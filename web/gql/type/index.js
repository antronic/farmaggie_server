const Query = require('./Query')
const Mutation = require('./Mutation')

const Input = require('../input')

const Vaccine = require('./Vaccine')
const Pig = require('./Pig')
const User = require('./User')
const Bill = require('./Bill')
const Beacon = require('./Beacon')

module.exports = [
  Query,
  Mutation,

  ...Input,

  Vaccine,
  Pig,
  User,
  Bill,
  Beacon,
]