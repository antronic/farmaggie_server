var hud_max = 0
var hud_min = 100

// ==========================================
const canvas = document.getElementById('gp')
const ctx = canvas.getContext('2d')

const hud = [31, 31, 31, 31, 31, 31, 31, 31, 31, 31]

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10],
    datasets: [{
      pointRadius: 0,
      label: '',
      fill: true,
      backgroundColor: '#00AAD7',
      data: hud,
    }]
  },
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawTicks: false,
          drawOnChartArea: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        }
      }],
      yAxes: [{
        gridLines: {
          display: false,
          drawTicks: false,
          drawOnChartArea: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          // min: hud_min,
          // max: hud_max,
        }
      }]
    },

    devicePixelRatio: 10.0,
    responsive: true,
    maintainAspectRatio: false,

    legend: {
      display: false,
    },

    elements: {
      line: {
        borderWidth: 0,
      },
      rectangle: {
        borderWidth: 0,
      },
    },

    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 0,
      }
    },
  }
})

Chart.defaults.global.elements.line = {
  fill: false,
}


const socket = window.io('http://127.0.0.1:3003')

// =====================

let sensor1_val = 0
let sensor2_val = 0
let sensor1_val2 = 0
let sensor2_val2 = 0

const visualizePosition = () => {
  // ((current - min / delta (max, min)) * 100)
  const sensor1 = document.getElementById('sen1')
  const sensor2 = document.getElementById('sen2')

  const min1 = -32
  const max1 = -80
  const max2 = -80
  const min2 = -32

  const per1 = 100 - Math.abs(sensor1_val - min1 / (max1 - min1)) * 1
  const per2 = 100 - Math.abs(sensor2_val - min2 / (max2 - min2)) * 1

  // sensor1.innerHTML = Math.abs(per1)
  // sensor2.innerHTML = Math.abs(per2)

  document.getElementById('sen1').style.width = per1 + '%'
  console.log(per1 + '%')
  document.getElementById('sen2').style.width = per2 + '%'
}

const visualizePosition2 = () => {
  // ((current - min / delta (max, min)) * 100)
  const sensor1 = document.getElementById('sen12')
  const sensor2 = document.getElementById('sen22')

  const min1 = -32
  const max1 = -80
  const max2 = -80
  const min2 = -32

  const per1 = 100 - Math.abs(sensor1_val2 - min1 / (max1 - min1)) * 1
  const per2 = 100 - Math.abs(sensor2_val2 - min2 / (max2 - min2)) * 1

  // sensor1.innerHTML = Math.abs(per1)
  // sensor2.innerHTML = Math.abs(per2)

  document.getElementById('sen12').style.width = per1 + '%'
  console.log(per1 + '%')
  document.getElementById('sen22').style.width = per2 + '%'
}

socket.on('pole_listener', (msg) => {
  console.log(msg)
  if (msg.device === 'pole_1') {
    if (msg.mac === '3CA30897E4CE') {
      sensor1_val = parseInt(msg.rssi, 10)
    }
    if (msg.mac === '3CA30897E0E2') {
      sensor1_val2 = parseInt(msg.rssi, 10)
    }
  }

  if (msg.device === 'pole_2') {
    if (msg.mac === '3CA30897E4CE') {
      sensor2_val = parseInt(msg.rssi, 10)
    }
    if (msg.mac === '3CA30897E0E2') {
      sensor2_val2 = parseInt(msg.rssi, 10)
    }
  }

  visualizePosition()
  visualizePosition2()
})

// ===================

let temp_str = 0
let hud_current = 0

const updateHudChart = (eli) => {
  const el = parseInt(eli, 10)
  if (el > hud_max) {
    hud_max = el
  }
  if (el < hud_min) {
    hud_min = el
  }

  if (hud.length >= 10) {
    hud.shift()
  }
  hud.push(el)

}

let station = ''

socket.on('pole_update_web', (msg) => {
  const pig = msg['3CA30897E4CE']
  const pig2 = msg['EFDE59427EDA']
  let min = -10000
  let pole = ''
  let min_2 = -1000
  let pole_pig_2 = 'pole_1'

  Object.keys(pig).forEach((item, key) => {
    if (parseInt(pig[item], 10) >= min) {
      min = parseInt(pig[item], 10)
      pole = item
    }
  })

  if (!pig2 === false) {
    Object.keys(pig2).forEach((item, key) => {
      if (parseInt(pig2[item], 10) >= min_2) {
        min_2 = parseInt(pig2[item], 10)
        pole_pig_2 = item
      }
    })
  }

  setTimeout(() => {
    if (pole === station) {
      // alert('Eating...')
    }
    station = pole
  }, 5000)

  document.querySelector('#pole_1').style.backgroundColor = 'initial'
  document.querySelector('#pole_2').style.backgroundColor = 'initial'
  document.querySelector('#pole_3').style.backgroundColor = 'initial'
  document.querySelector('#pole_4').style.backgroundColor = 'initial'

  document.querySelector('#' + pole).style.backgroundColor = '#0f0'

  document.querySelector('#pole_1').innerHTML = '<h2> POLE 1: ' + pig.pole_1 + '</h2>'
  document.querySelector('#pole_2').innerHTML = '<h2> POLE 2: ' + pig.pole_2 + '</h2>'
  document.querySelector('#pole_3').innerHTML = '<h2> POLE 3: ' + pig.pole_3 + '</h2>'
  document.querySelector('#pole_4').innerHTML = '<h2> POLE 4: ' + pig.pole_4 + '</h2>'

  document.querySelector('#pole_1_1').style.backgroundColor = 'initial'
  document.querySelector('#pole_2_1').style.backgroundColor = 'initial'
  document.querySelector('#pole_3_1').style.backgroundColor = 'initial'
  document.querySelector('#pole_4_1').style.backgroundColor = 'initial'

  document.querySelector('#' + pole_pig_2 + '_1').style.backgroundColor = '#0fd'

  document.querySelector('#pole_1_1').innerHTML = '<h2> POLE 1: ' + pig2.pole_1 + '</h2>'
  document.querySelector('#pole_2_1').innerHTML = '<h2> POLE 2: ' + pig2.pole_2 + '</h2>'
  document.querySelector('#pole_3_1').innerHTML = '<h2> POLE 3: ' + pig2.pole_3 + '</h2>'
  document.querySelector('#pole_4_1').innerHTML = '<h2> POLE 4: ' + pig2.pole_4 + '</h2>'
})

socket.on('temp_update', (msg) => {
  document.querySelector('#temp').innerHTML = '<h1>' + msg + '°</h1>'
  // updateTempChart(msg)
  // chart.update()
})

socket.on('hud_update', (msg) => {
  hud_current = msg
  document.querySelector('#hud').innerHTML = '<h3>' + msg + '%</h3>'
  updateHudChart(msg)
  chart.update()
})

setInterval(() => {
  updateHudChart(hud_current)
  chart.update()
}, 1000)
