import { Schema } from 'mongoose'

const schema = new Schema({
  pig: {
    type: Schema.Types.ObjectId,
    ref: 'Pig'
  },
  farrowing_information: [{
    type: Schema.Types.ObjectId,
    ref: 'FarrowingInformation'
  }],
  vaccine_injection: [{
    type: Schema.Types.ObjectId,
    ref: 'BreederVaccineInjection'
  }],
  coop_number: Number,
  coop_type: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

export default schema
