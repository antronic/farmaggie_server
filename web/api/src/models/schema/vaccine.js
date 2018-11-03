import { Schema } from 'mongoose'

export default new Schema({
  name: String,
  price: Number,

  expired_date: Date,
  received_date: Date,

  pig_ages: [Number], // Age to inject // Unit as day

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