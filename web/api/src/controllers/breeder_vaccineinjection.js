import Breeder from '../models/Breeder'
import BreederVaccineInjection from '../models/BreederVaccineInjection'

export default {
  create: (req, res) => {
    const vaccine_injection = req.body.vaccine_injection
    console.log(vaccine_injection)
    BreederVaccineInjection.create(vaccine_injection)
      .then(doc => {
        console.log({ doc: doc._id })
        return Breeder.findByIdAndUpdate(doc.breeder, { '$push': { 'vaccine_injection': doc._id } })
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
    const vaccine_injection = Object.assign({}, req.body.vaccine_injection)
    return BreederVaccineInjection.findByIdAndUpdate(vaccine_injection._id, vaccine_injection)
      .then(() => BreederVaccineInjection.findById(vaccine_injection._id))
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(400).json({ message: err.message })
      })
  },
  delete: (req, res) => {
    BreederVaccineInjection.findById(req.query._id)
      .then((vaccine) => {
        return BreederVaccineInjection.deleteOne({ _id: req.query._id })
          .then((doc) => {
            return Breeder.findByIdAndUpdate(vaccine.breeder, { '$pull': { 'vaccine_injection': vaccine._id } })
              .then(() => {
                res.json(doc)
              })
          })
      })

  },
}
