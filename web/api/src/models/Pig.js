import mongoose from 'mongoose'
import schema from './schema/pig'


schema.statics.findByUID = function (uid, project) {
  return this.find({ uid }, project)
}

schema.statics.createNewPig = function(data) {
  return this.create(data)
}

export default mongoose.model('Pig', schema)