import Pig from '../models/Pig'
import Movement from '../models/Movement'
import Breeder from '../models/Breeder'

import BreederController from './breeder'

export default {
  create: (req, res) => {
    const pig = req.body.pig

    return Pig.createNewPig(pig)
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

  update: (req, res) => {
    const pig = Object.assign({}, req.body.pig)
    return Pig.findByIdAndUpdate(pig._id, pig)
      .then(() => Pig.findById(pig._id))
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(400).json({ message: err.message })
      })
  },

  delete: (req, res) => {
    Breeder.find({ pig: req.query._id })
      .then(async (breeders) => {
        if (breeders.length > 0) {
          for (const breeder of breeders) {
            const mockReq = { query: { _id: breeder._id } }
            const mockRes = { json: () => {} }
            await BreederController(null).delete(mockReq, mockRes)
          }
        }
        return breeders
      })
      .then(() => {
        return Pig.deleteOne({ _id: req.query._id })
          .then(doc => res.json(doc))
      })
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