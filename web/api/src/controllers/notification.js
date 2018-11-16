import Notification from 'models/Notification'

export default {
  create: (req, res) => {
    const create = req.body.create || {}

    const title = create.title || ''
    const content = create.content || ''
    const time = create.time || Date.now()

    const receiver = create.receiver

    return Notification.createNotitication(title, content, time, receiver)
      .then(doc => res.json(doc))
  },

  getNotRead: (req, res) => {
    // no params
    return Notification.getNotificationWithCriteria(req.query.receiver, false, 20)
      .then(doc => res.json(doc))
  },

  getRead: (req, res) => {
    // no params
    return Notification.getNotificationWithCriteria(req.query.receiver, true, 20)
      .then(doc => res.json(doc))
  },

  get: (req, res) => {
    // no params
    return Notification.getNotification(req.query.receiver, 20)
      .then(doc => res.json(doc))
  },

  read: (req, res) => {
    const update = req.body.update || {}

    const ids = update.ids || []

    return Notification.readNotification(ids)
      .then(doc => res.json(doc))
  }
}