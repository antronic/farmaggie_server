import mongoose from 'mongoose'
import schema from './schema/bill'

export default mongoose.model('Bill', schema)