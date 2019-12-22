import PigletPenVaccineInjection from '../models/PigletPenVaccineInjection'
import PigletPen from '../models/PigletPen'

export default {
  create: (req, res) => {
    const vaccine_injection = req.body.vaccine_injection
    PigletPenVaccineInjection.create(vaccine_injection)
      .then(doc => {
        return PigletPen.findByIdAndUpdate(doc.piglet_pen, { '$push': { 'vaccine_injection': doc._id } })
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
    return PigletPenVaccineInjection.findByIdAndUpdate(vaccine_injection._id, vaccine_injection)
      .then(() => PigletPenVaccineInjection.findById(vaccine_injection._id))
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(400).json({ message: err.message })
      })
  },
  delete: (req, res) => {
    return PigletPenVaccineInjection.deleteOne({ _id: req.query._id })
      .then(doc => res.json(doc))
  },
}
