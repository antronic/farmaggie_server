import Bill from 'models/Bill'

export default {
  create: (req, res) => {

    console.log(req.body)
    return Bill.create(req.body.bill)
      .then(doc => res.json(doc))
  },

  get: (req, res) => {
    return Bill.find(req.body.request, req.body.project)
      .then(doc => res.json(doc))
  },
}