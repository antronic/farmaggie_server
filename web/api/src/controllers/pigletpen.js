import PigletPen from '../models/PigletPen'

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

    return PigletPen.find(request)
      .then(doc => { return res.json(doc) })
  },
  update: (req, res) => {
    const pigletpen = Object.assign({}, req.body.pigletpen)
    return PigletPen.findByIdAndUpdate(pigletpen._id, pigletpen)
      .then(() => PigletPen.findById(pigletpen._id))
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(400).json({ message: err.message })
      })
  },
}
