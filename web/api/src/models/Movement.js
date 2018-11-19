import mongoose from 'mongoose'
import schema from './schema/pig_move'

schema.statics.stamp = function(pig_id, pig_mac, zone)  {
  return this.create({
    beacon_id: pig_id,
    pig_mac,
    zone,
    created_at: Date.now(),
    timestamp: new Date().getTime(),
  })
}

export default mongoose.model('Movement', schema)
