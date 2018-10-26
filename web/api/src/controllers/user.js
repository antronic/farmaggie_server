import User from 'models/User'

export default {
  register: (req, res) => {
    return User.register(req.body.data.username, req.body.data.password)
      .then(doc => res.json(doc))
  },

  login: async (req, res) => {
    const result = await User.login(req.body.data.username, req.body.data.password)

    res.json({ result })
  },
}