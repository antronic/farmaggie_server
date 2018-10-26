import Pig from '../models/Pig'

export default {
  create: (req, res) => {
    return Pig.createNewPig(req.body.create)
      .then(doc => res.json(doc))
  },

  get: (req, res) => {
    return Pig.find(req.body.request, req.body.project)
      .then(doc => res.json(doc))
  },
}