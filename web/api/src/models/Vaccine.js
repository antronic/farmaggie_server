import mongoose from 'mongoose'
import schema from './schema/vaccine'


schema.statics.findByName = (name, project) => {
  return this.find({ name }, project)
}

export default mongoose.model('Vaccine', schema)