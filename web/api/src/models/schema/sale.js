import mongoose from 'mongoose'
import mongooseSequence from 'mongoose-sequence'

const AutoIncrement = mongooseSequence(mongoose)

const schema = new mongoose.Schema({
  customer_name: {
    type: String,
    default: '',
  },
  sold_date: {
    type: Date,
    default: null,
  },
  pig_amount: {
    type: Number,
    default: 0,
  },
  price_per_kilogram: {
    type: Number,
    default: 0.00,
  },
  total_weight: {
    type: Number,
    default: 0.00,
  },
  avg_weight: {
    type: Number,
    default: 0.00,
  },
  total_price: {
    type: Number,
    default: 0.00,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
})

schema.plugin(AutoIncrement, {inc_field: 'sale_code'})

export default schema
