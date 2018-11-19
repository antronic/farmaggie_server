import mongoose, { Schema } from 'mongoose'

export default new Schema({
  beacon_id: {
    type: mongoose.Types.ObjectId,
    default: null,
  },

  // pig_id: {
  //   type: mongoose.Types.ObjectId,
  //   default: null,
  // },

  pig_mac: {
    type: String,
    default: null,
  },

  zone: {
    type: String,
    default: null,
  },

  created_at: {
    type: Date,
    default: Date.now(),
  },

  timestamp: {
    type: Number,
    default: new Date().getTime(),
  },

})