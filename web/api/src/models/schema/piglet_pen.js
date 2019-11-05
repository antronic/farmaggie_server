import { Schema } from 'mongoose'

export default new Schema({
  pig_amount: {
    type: Number,
    required: true,
  },
  vaccine_injection: {
    fmd: {
      type: Date,
      default: null,
    },
    csf: {
      type: Date,
      default: null,
    },
    pseudo: {
      type: Date,
      default: null,
    },
  },
  coop_number: {
    type: Number,
    unique: true,
    required: true,
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})
