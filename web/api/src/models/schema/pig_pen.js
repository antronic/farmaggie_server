import { Schema } from 'mongoose'

export default new Schema({
  name: String,
  size: Number,

  pigs: {
    type: Array,
    default: [],
  },

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