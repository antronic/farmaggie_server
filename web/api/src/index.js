import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'

import route from './route'

const port = 9000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
}))

app.use(route)

const server = http.createServer(app)

const listener = server.listen(port, () => {
  console.log(`Server is listening on ${listener.address().port}`)
})