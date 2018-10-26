import { Schema } from 'mongoose'

export default new Schema({
  name: String,

  info: String,

  farm: {
    type: Array,
    default: [],
  },

  username: String,
  password: String,
  salt: String,

  created_by: {
    type: String,
    default: 'anonymous',
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
})