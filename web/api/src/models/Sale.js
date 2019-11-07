import mongoose from 'mongoose'
import schema from './schema/sale'

export default mongoose.model('Sale', schema)
