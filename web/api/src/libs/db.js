require('dotenv').config()

import mongoose from 'mongoose'

const url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME

export default mongoose.connect(url, {
  useNewUrlParser: true,
})
  .then(() => console.log('Database already started!'))
  .catch((err) => {
    console.log('Database error!')
    console.error(err)
  })
