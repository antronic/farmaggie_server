const server = require('http').createServer()

const io = require('socket.io')(server, {
  path: '/ws/iot/farm',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
})

const listener = server.listen(3000, () => {
  console.log(`WS is running on ${listener.address().port}`)
})

io.on('connection', (socket) => {
  console.log('a user connected')

  // when pole send new values
  socket.on('pole_update', (msg) => {
    // send new values from pole
    // to subscriber
    let data = msg
    // #NAME:PEN_1#DEVICES:2#DATA:[["pole_1"]]
    io.emit('pole_listener', data)
  })

  socket.on('disconnect', () => {})
})