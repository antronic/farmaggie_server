import { Schema } from 'mongoose'

export default new Schema({
  name: String,
  age: Number,
  birthdate: Date,
  vaccine: [],
})