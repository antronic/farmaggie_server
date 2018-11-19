require('dotenv').config()

import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import morgan from 'morgan'

import route from './route'
import './libs/db'

import './services/notification_checker'
import './services/movement_tracker'

const port = process.env.API_PORT
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(morgan('dev'))

app.use(route)

const server = http.createServer(app)

const listener = server.listen(port, () => {
  console.log(`Server is listening on ${listener.address().port}`)
})