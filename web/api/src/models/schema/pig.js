import mongoose, { Schema } from 'mongoose'

export default new Schema({
  beacon_id: {
    type: String,
    default: '0x00000',
  },

  name: String,
  age: Number,
  ear_no: String,
  species: String,
  pork_breast: String,
  kids: {
    type: Array,
    default: [],
  },

  pen: mongoose.Types.ObjectId,

  vaccine: {
    type: Array,
    default: [],
  },

  birthdate: Date,

  active: {
    type: Boolean,
    default: true
  },
  entered_date: {
    type: Date,
    default: Date.now,
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