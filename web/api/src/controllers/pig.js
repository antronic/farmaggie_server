import Pig from '../models/Pig'
import Movement from '../models/Movement'

export default {
  create: (req, res) => {
    return Pig.createNewPig(req.body.pig)
      .then(doc => res.json(doc))
  },

  get: (req, res) => {
    const query = req.query
    const request = JSON.parse(query.request)

    // If request has field 'name', add regex search
    if (Object.keys(request).includes('name')) {''
      request.name = { $regex: '^' + request.name + '.*', $options: 'i' }
    }

    return Pig.find(request, query.project)
      .then(doc => res.json(doc))
  },

  delete: (req, res) => {
    return Pig.deleteOne({ _id: req.query._id })
      .then(doc => res.json(doc))
  },

  stamp_move: (req, res) => {
    const movement = req.body.movement

    return Movement.stamp(
      movement.beacon_id,
      movement.pig_mac,
      movement.zone,
    ).then(doc => res.json(doc))
  }
}