import Sale from '../models/Sale'

export default {
  create: (req, res) => {
    const sale = Object.assign({}, req.body.sale)
    return Sale.create(sale)
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

    return Sale.find(request)
      .then(doc => { return res.json(doc) })
  },
  update: (req, res) => {
    const sale = Object.assign({}, req.body.sale)
    return Sale.findByIdAndUpdate(sale._id, sale)
      .then(() => Sale.findById(sale._id))
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(400).json({ message: err.message })
      })
  },
  delete: (req, res) => {
    return Sale.deleteOne({ _id: req.query._id })
      .then(doc => res.json(doc))
  },
}