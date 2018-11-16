import mongoose, { Schema } from 'mongoose'

export default new Schema({
  notification_id: {
    type: String,
    default: 'noti_0000',
  },

  title: {
    type: String,
    default: '',
  },

  content: {
    type: String,
    default: '',
  },

  is_read: {
    type: Boolean,
    default: false,
  },

  sender: {
    type: String,
    default: 'anonymous',
  },

  receiver: {
    type: mongoose.Mixed,
    default: null,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },

  read_at: {
    type: Date,
    default: null,
  },
})