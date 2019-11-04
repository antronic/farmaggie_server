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
  vaccine_injection: {
    fmd: Date,
    csf: Date,
    pseudo: Date
  },
  coop_number: Number,
  coop_type: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

schema.index({ coop_number: 1, coop_type: 1 }, { unique: true })

export default schema
