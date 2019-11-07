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
  }
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