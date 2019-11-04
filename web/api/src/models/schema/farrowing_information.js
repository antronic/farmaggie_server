import { Schema } from 'mongoose'

export default new Schema({
  breeding: {
    created_at: {
      type: Date,
      default: Date.now,
    },
    boar: String,
  },
  farrowing: {
    farrow_date: Date,
    piglet_amount: Number,
  },
  piglet_vaccine_injection: {
    iron: Date,
    pcv: Date,
    myco: Date,
  },
  breeder: {
    type: Schema.Types.ObjectId,
    ref: 'Breeder',
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})
