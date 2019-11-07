import { Schema } from 'mongoose'

export default new Schema({
  coop_number: {
    type: Number,
    unique: true,
    required: true,
  },
  pig_amount: {
    type: Number,
    required: true,
  },
  vaccine_injection: [{
    type: Schema.Types.ObjectId,
    ref: 'PigletPenVaccineInjection'
  }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})
