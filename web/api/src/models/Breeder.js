import mongoose from 'mongoose'
import schema from './schema/breeder'

export default mongoose.model('Breeder', schema)
