import PigFarrowing from '../models/PigFarrowing'
import Pig from '../models/Pig'

const createPopulateDB = db => ({
  getOne: doc => {
    return db.findById(doc._id).populate('pig').populate('farrowing_information')
  },
})

const checkIsExists = (model) => async (id) => {
  const result = await model.estimatedDocumentCount({ _id: id })
  return result > 0
}

export default {
  createRoom: async (req, res) => {
    // get pig id, coop_number, coop_type
    const farrowingRequest = Object.assign({}, req.body.farrowing, { coop_type: 'farrowing_room' })
    const exists = await checkIsExists(Pig)(req.body.pig)
    if (!exists) {
      return res.status(400).json({ message: `Invalid 'pig' id` })
    }
    
    const model = createPopulateDB(PigFarrowing)
    return PigFarrowing.create(farrowingRequest)
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
    const request = JSON.parse(query.request || '{}')
    
    return PigFarrowing.find(request).populate('pig').populate('farrowing_information')
    .then(doc => { console.log('doc'); return res.json(doc) })
  },
}

