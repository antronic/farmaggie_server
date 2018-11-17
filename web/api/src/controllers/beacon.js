import Beacon from 'models/Beacon'

export default {
  create: (req, res) => {
    return Beacon.create(req.body.beacon)
      .then(doc => res.json(doc))
  },

  get: (req, res) => {
    return Beacon.find(req.body.request, req.body.project)
      .then(doc => res.json(doc))
  },
}