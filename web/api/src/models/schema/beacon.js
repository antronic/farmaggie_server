import mongoose, { Schema } from 'mongoose'

export default new Schema({
  name: String,
  mac: {
    type: String,
    default: '0x00000'
  },
  uid: String,

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