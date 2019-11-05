import { Schema } from 'mongoose'

export default new Schema({
  pig_amount: Number,
  vaccine_injection: {
    fmd: Date,
    csf: Date,
    pseudo: Date,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})
