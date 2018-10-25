import Vaccine from '../models/Vaccine'

export default {
  create: (req, res) => {
    return Vaccine.create({
      name: req.body.name,
      created_by: req.body.created_by,
    })
      .then((doc) => {
        res.json(doc)
      })
  },
  get: (req, res) => {
    return Vaccine.find(req.body.request, req.body.project)
      .then((doc) => {
        res.json(doc)
      })
  }
}