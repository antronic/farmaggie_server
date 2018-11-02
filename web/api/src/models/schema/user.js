import { Schema } from 'mongoose'

export default new Schema({
  firstname: String,
  lastname: String,

  info: String,
  farm_size: String,
  location: Object,

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