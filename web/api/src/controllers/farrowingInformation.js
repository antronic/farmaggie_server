import FarrowingInformation from '../models/FarrowingInformation'
import Breeder from '../models/Breeder'

export default {
  create: (req, res) => {
    const farrowingInformationRequest = mapSchema(req.body.farrowing_information)
    FarrowingInformation.create(farrowingInformationRequest)
      .then(doc => {
        return Breeder.findByIdAndUpdate(doc.breeder, { '$push': { 'farrowing_information': doc._id } })
          .then(() => {
            return doc
          })
      })
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(400).json({ status: err.message })
      })
  },
  update: (req, res) => {
    const farrowingInfo = Object.assign({}, req.body.farrowing_information)
    return FarrowingInformation.findByIdAndUpdate(farrowingInfo._id, farrowingInfo)
      .then(() => FarrowingInformation.findById(farrowingInfo._id))
      .then(doc => {
        console.log(doc)
        res.json(doc)
      })
      .catch(err => {
        res.status(400).json({ message: err.message })
      })
  },
  delete: (req, res) => {
    FarrowingInformation.findById(req.query._id)
      .then((farrowingInfo) => {
        return FarrowingInformation.deleteOne({ _id: req.query._id })
          .then((doc) => {
            return Breeder.findByIdAndUpdate(farrowingInfo.breeder, { '$pull': { 'farrowing_information': farrowingInfo._id } })
              .then(() => {
                res.json(doc)
              })
          })
      })
  },
}

const mapSchema = (obj) => {
  if (!obj) return null

  const breeding = Object.assign({
    created_at: null,
    boar: null,
  }, obj.breeding)
  const farrowing = Object.assign({
    farrow_date: null,
    piglet_amount: 0,
  }, obj.farrowing)
  const piglet_vaccine_injection = Object.assign({
    iron: null,
    pcv: null,
    myco: null,
  }, obj.piglet_vaccine_injection)
  return {
    breeding,
    farrowing,
    piglet_vaccine_injection,
    breeder: obj.breeder
  }
}