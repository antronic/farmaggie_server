require('dotenv').config()

import mongoose from 'mongoose'

const url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME

let connected = false
let connecting = true

const connect = () => {
  const intv = setInterval(() => {
    if (connected) {
      clearInterval(intv)
    }

    if (connecting) {
      console.err('Attempting to reconnect...')
      connect()
    }
  }, 1000)

  connecting = true

  return mongoose.connect(url, {
    useNewUrlParser: true,
  })
    .then(() => {
      connected = true
      connecting = false
      console.log('Database already started!')
    })
    .catch((err) => {
      connecting = false
      console.log('Database error!')
      console.error(err)
    })

}

export default connect()
