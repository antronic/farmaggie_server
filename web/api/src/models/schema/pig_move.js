import mongoose, { Schema } from 'mongoose'

export default new Schema({
  name: String,
  mac: {
    type: String,
    default: '0x00000'
  },
  uid: String,

  timestamp: {
    type: String,
    default: 'anonymous',
  },

})