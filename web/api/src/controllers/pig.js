import Pig from '../models/Pig'

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
}