import { Schema } from 'mongoose'

export default new Schema({
  bill_id: {
    type: String,
  },

  name: String,
  type: String,
  price: Number,
  amount: Schema.Types.Mixed,

  payment_status: String,

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