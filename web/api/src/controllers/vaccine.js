import Vaccine from '../models/Vaccine'

export default {
  create: (req, res) => {
    return Vaccine.create(req.body.vaccine)
      .then(doc => res.json(doc))
  },
  get: (req, res) => {
    return Vaccine.find(req.body.request, req.body.project)
      .then(doc => res.json(doc))
  },

  getOne: (req, res) => {
    return Vaccine.findOne({ name: req.query.name })
      .then(doc => res.json(doc))
  },

  delete: (req, res) => {
    return Vaccine.deleteOne({_id: req.query._id })
      .then(doc => res.json(doc))
  },
}