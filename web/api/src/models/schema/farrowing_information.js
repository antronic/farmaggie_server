import { Schema } from 'mongoose'

export default new Schema({
  breeding: {
    created_at: {
      type: Date,
      default: null,
    },
    boar: String,
  },
  farrowing: {
    farrow_date: {
      type: Date,
      default: null,
    },
    piglet_amount: {
      type: Number,
      default: 0,
    },
  },
  piglet_vaccine_injection: {
    iron: {
      type: Date,
      default: null,
    },
    pcv: {
      type: Date,
      default: null,
    },
    myco: {
      type: Date,
      default: null,
    },
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
