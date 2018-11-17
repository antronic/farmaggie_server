import mongoose, { Schema } from 'mongoose'

export default new Schema({
  name: String,

  mac: {
    type: String,
    default: '0x00000'
  },

  beacon_id: String,

  major: {
    type: String,
  },

  minor: {
    type: String,
  },

  color: {
    type: String,
    default: '#aaaaaaa',
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