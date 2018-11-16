import mongoose from 'mongoose'
import schema from './schema/notification'

schema.statics.createNotitication = function (title, content, created_at, receiver = null) {
  return this.create({
    title,
    content,
    created_at,
    receiver,
  })
}

schema.statics.readNotification = function (ids) {
  if (!Array.isArray(ids)) {
    return Promise.reject('Parameter must be an Array of _id')
  }

  return this.update(
    { _id: { $in: ids } },
    { $set: { is_read: true, read_at: Date.now() } }
  )
}

schema.statics.getNotificationWithCriteria = function (receiver = null, isRead = false, limit = 20) {
  return this.find(
    {
      receiver,
      is_read: isRead,
    },
    null,
    {
      limit,
      sort: {
        created_at: -1,
      },
    },
  )
}

schema.statics.getNotification = function (receiver = null, limit = 20) {
  return this.find(
    {
      receiver,
    },
    null,
    {
      limit,
      sort: {
        created_at: -1,
      },
    },
  )
}

export default mongoose.model('Notification', schema)