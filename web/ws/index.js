const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http, { origins: '*:*' })

io.set('origins', '*:*')

const cors = require('cors')

const line = require('./line')

let recent_temp = ''
let recent_hud = ''
let pigs = {}

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

app.get('/poles', (req, res) => {
})

io.on('connection', (socket) => {
  console.log('a user connected')

  // when pole send new values
  socket.on('pole_update', (msg) => {
    // send new values from pole
    // to subscriber
    let data = msg

    // If pig already in vars
    if (Object.hasOwnProperty.call(pigs, data.mac) > 0) {
      const old_data = pigs[data.mac]

      Object.assign(pigs, {}, {
        [data.mac]: Object.assign({}, old_data, { [data.device]: data.rssi }),
      })
    } else {
      Object.assign(pigs, {}, {
        [data.mac]: {
          [data.device]: data.rssi
        }
      })
    }

    console.log(pigs)
    io.emit('pole_update_web', pigs)
  })

  var emit_msg_time = 0

  function checkDangerTemp(temp, hud) {
    if (parseInt(temp, 10) > 27 && parseInt(hud, 10) > 50) {
      return true
    }
    return false
  }

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
