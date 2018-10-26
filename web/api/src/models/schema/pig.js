import { Schema } from 'mongoose'

export default new Schema({
  beacon_id: {
    type: String,
    default: '0x00000',
  },

  name: String,
  age: Number,
  kids: {
    type: Array,
    default: [],
  },

  vaccine: {
    type: Array,
    default: [],
  },

  birthdate: Date,

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