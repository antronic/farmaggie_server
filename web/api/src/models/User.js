import mongoose from 'mongoose'
import schema from './schema/user'

import { sha512, genRandomString } from 'utils'


schema.statics.hashPassword = function (password) {
  const { passwordHash, salt } = sha512(password, genRandomString(16))

  return {
    passwordHash,
    salt,
  }
}

schema.statics.generateToken = function (username) {

}

schema.methods.comparePassword = (password, salt) => {}

schema.statics.findByUsername = function (username, project) {
  return this.find({ username }, project)
}

schema.statics.register = function (username, password) {
  const { passwordHash, salt } = this.hashPassword(password)

  return this.model('User').create({
    username,
    password: passwordHash,
    salt,
  })
}

schema.statics.login = async function (username, password) {
  const user = await this.findOne({ username }, {}, { sort: { updated_at: -1 } })

  if(!user) {
    return false
  } else {
    const { passwordHash } = sha512(password, user.salt)
    return user.password === passwordHash
  }
}

export default mongoose.model('User', schema)
