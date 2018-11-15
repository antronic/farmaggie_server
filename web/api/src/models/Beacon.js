import mongoose from 'mongoose'
import schema from './schema/beacon'

export default mongoose.model('Beacon', schema)