import Breeder from '../models/Breeder'
import Pig from '../models/Pig'
import BreederVaccineInjection from '../models/BreederVaccineInjection'
import FarrowingInformation from '../models/FarrowingInformation'

const createPopulateDB = db => ({
  getOne: doc => {
    return db.findById(doc._id).populate('pig').populate('farrowing_information').populate('vaccine_injection')
  },
})

const checkIsExists = (model) => async (id) => {
  return model.findById(id)
    .then(doc => {
      return doc !== null
    })
    .catch(() => {
      return false
    })
}

const checkIsPigAlreadyInAnotherCoop = (model, pigId) => {
  return model.findOne({ pig: pigId })
    .then((doc) => {
      if (doc) {
        return { isInAnotherCoop: true, data: doc }
      }
      throw new Error('Breeder not found')
    })
    .catch(() => {
      return { isInAnotherCoop: false }
    })
}

const moveBreederCoop = (model) => async ({ id, breederReq }) => {
  return model.findByIdAndUpdate(id, {
    coop_number: breederReq.coop_number,
    coop_type: breederReq.coop_type
  })
    .then(() => {
      return createPopulateDB(model).getOne({ _id: id })
    })
    .then((result) => {
      return { error: false, data: result }
    })
    .catch((error) => {
      return { error: error, data: null }
    })
}

// coop type are `breeding_pigsty` and `farrowing_room`
export default (coop_type) => {
  return {
    createRoom: async (req, res) => {
      // get pig id, coop_number, coop_type
      const farrowingRequest = Object.assign({}, req.body.breeder, { coop_type })
      const exists = await checkIsExists(Pig)(req.body.breeder.pig)
      if (!exists) {
        return res.status(400).json({ message: `Invalid 'pig' id` })
      }

      const { isInAnotherCoop, data: breederData } = await checkIsPigAlreadyInAnotherCoop(Breeder, req.body.breeder.pig)
      if (isInAnotherCoop) {
        const { error, data } = await moveBreederCoop(Breeder)({ 
          id: breederData._id,
          breederReq: farrowingRequest
        })
        if (error) {
          return res.status(400).json({ status: error.message })
        }

        return res.json(data)
      }

      const model = createPopulateDB(Breeder)
      return Breeder.create(farrowingRequest)
        .then(model.getOne)
        .then(doc => {
          res.json(doc)
        })
        .catch(err => {
          res.status(400).json({ status: err.message })
        })
    },
    getAll: (req, res) => {
      const query = req.query
      const prepareRequest = JSON.parse(query.request || '{}')
      const request = Object.assign(prepareRequest, { coop_type })
  
      return Breeder.find(request).populate('pig').populate('farrowing_information').populate('vaccine_injection')
        .then(doc => { return res.json(doc) })
    },
    update: async (req, res) => {
      const farrowingRequest = Object.assign({}, req.body.breeder, { coop_type })
      const exists = await checkIsExists(Pig)(req.body.breeder.pig)
      const isPigIdNil = req.body.breeder.pig === undefined
      if (!exists && !isPigIdNil) {
        return res.status(400).json({ message: `Invalid 'pig' id` })
      }
  
      Breeder.findByIdAndUpdate(farrowingRequest._id, farrowingRequest)
        .then(() => Breeder.findById(farrowingRequest._id).populate('pig').populate('farrowing_information').populate('vaccine_injection'))
        .then(doc => { return res.json(doc) })
    },
    delete: async (req, res) => {
      Breeder.findById(req.query._id)
        .then(async (breeder) => {
          if (breeder) {
            await BreederVaccineInjection.deleteMany({ _id: breeder.vaccine_injection })
            await FarrowingInformation.deleteMany({ _id: breeder.farrowing_information })
          }
          return breeder
        })
      return Breeder.deleteOne({ _id: req.query._id })
        .then(doc => res.json(doc))
    }
  }
}
