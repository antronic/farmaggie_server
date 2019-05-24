import Beacon from 'models/Beacon'

export default {
  create: (req, res) => {
    return Beacon.create(req.body.beacon)
      .then(doc => res.json(doc))
  },

  delete: (req, res) => {
    console.log(req.query)
    return Beacon.deleteOne({ _id: req.query._id })
      .then(doc => res.json(doc))
  },

  get: (req, res) => {
    // const request = {
    //   ...req.body.request,
    // }
    return Beacon.find(req.body.request, req.body.project)
      .then(doc => res.json(doc))
  },
}