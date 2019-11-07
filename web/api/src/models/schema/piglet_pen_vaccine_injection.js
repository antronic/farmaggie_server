import { Schema } from 'mongoose'

export default new Schema({
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
  piglet_pen: {
    type: Schema.Types.ObjectId,
    ref: 'PigletPen',
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})
