const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http, { origins: '*:*' })

io.set('origins', '*:*')

const cors = require('cors')

const line = require('./line')

let recent_temp = ''
let recent_hud = ''
let pigs = {}

let same_address = {}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/info', (req, res) => {
  res.json({
    temp: recent_temp,
    humidity: recent_hud,
  })
})

app.get('/poles', (req, res) => {})

var emit_msg_time = 0
function checkDangerTemp(temp, hud) {
  if (parseInt(temp, 10) > 27 && parseInt(hud, 10) > 50) {
    return true
  }
  return false
}

io.on('connection', (socket) => {
  console.log('WS User connected')

  // Restore data
  io.emit('same_address_web', same_address)
  io.emit('pole_update_web', pigs)

  socket.on('pole_data_reset', (msg) => {
    if (msg === 'CNFM') {
      pigs = {}
      io.emit('pole_update_web', pigs)
    }
  })

  // when pole send new values
  socket.on('pole_update', (bcs) => {
    pigs = bcs
    io.emit('pole_update_web', pigs)
  })

  socket.on('dummy/send_pole', (msg) => {
    io.emit('dummy/pole_update', JSON.stringify(msg))
  })

  socket.on('request_pigs', (msg) => {
    // send back to only requester
    socket.emit(pigs)
  })

  socket.on('dht_update', (msg) => {
    const temp = msg.temp
    const hud = msg.hud

    recent_temp = temp
    recent_hud = hud

    if (checkDangerTemp(temp, hud) && new Date().getTime() >= emit_msg_time + 300000) {
      emit_msg_time = new Date().getTime()
      line.sendMessage([
        {
          type: 'text',
          text: `ตอนนี้อุณหภูมิ ${temp}°C และความชื้น ${hud}% หมูร้อนสุดๆ จะเป็นหมูย่างแล้ว ราดน้ำด่วน!`
        }
      ])
    }

    io.emit('temp_update', temp)
    io.emit('hud_update', hud)
  })

  socket.on('disconnect', () => { })
})

const listener = http.listen(3003, () => {
  console.log(`WS is running on ${listener.address().port}`)
})
