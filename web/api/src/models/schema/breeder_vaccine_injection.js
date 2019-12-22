import { Schema } from 'mongoose'

const schema = new Schema({
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

export default schema
