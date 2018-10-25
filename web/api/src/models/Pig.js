import { model } from 'mongoose'
import schema from './schema/pig'


schema.statics.findByUID = (uid, project) => {
  return this.find({ uid }, project)
}

export default model('Pig', schema)