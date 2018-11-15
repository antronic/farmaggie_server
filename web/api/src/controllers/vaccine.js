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
  getList: (req, res) => {
    return Vaccine.aggregate([
      {
        $sort: {
          expired_date: -1
        }
      },

      {
        $group: {
          _id: '$name',
          expired_date: {
            $addToSet: '$expired_date'
          },
          count: {
            $addToSet: '$_id'
          }
        }
      },

      {
        $unwind: '$count'
      },

      {
        $group: {
          _id: '$_id',
          early_expired_date: {
            $first: '$expired_date'
          },
          later_expired_date: {
            $last: '$expired_date'
          },
          count: {
            $sum: 1
          }
        }
      },

      {
        $project: {
          early_expired_date: {
            $arrayElemAt: ['$early_expired_date', 0]
          },
          later_expired_date: {
            $arrayElemAt: ['$later_expired_date', 0]
          },
          count: 1
        }
      }
    ]).then(doc => res.json(doc))
  },
}