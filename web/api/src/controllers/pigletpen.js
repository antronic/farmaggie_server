import PigletPen from '../models/PigletPen'
import PigletPenVaccineInjection from '../models/PigletPenVaccineInjection'

export default {
  create: (req, res) => {
    const pigletpen = Object.assign({}, req.body.pigletpen)
    return PigletPen.create(pigletpen)
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(400).json({ message: err.message })
      })
  },
  get: (req, res) => {
    const query = req.query
    const request = JSON.parse(query.request || '{}')

    return PigletPen.find(request).populate('vaccine_injection')
      .then(doc => { return res.json(doc) })
  },
  update: (req, res) => {
    const pigletpen = Object.assign({}, req.body.pigletpen)
    return PigletPen.findByIdAndUpdate(pigletpen._id, pigletpen)
      .then(() => PigletPen.findById(pigletpen._id).populate('vaccine_injection'))
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(400).json({ message: err.message })
      })
  },
  delete: (req, res) => {
    PigletPen.findById(req.query._id)
      .then(async (pigletpen) => {
        if (pigletpen) {
          await PigletPenVaccineInjection.deleteMany({ _id: pigletpen.vaccine_injection })
        }
        return pigletpen
      })
    return PigletPen.deleteOne({ _id: req.query._id })
      .then(doc => res.json(doc))
  }
}
