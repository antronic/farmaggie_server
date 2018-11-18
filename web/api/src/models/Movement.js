import mongoose from 'mongoose'
import schema from './schema/pig_move'

export default mongoose.model('Movement', schema)
