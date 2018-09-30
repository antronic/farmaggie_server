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


const socket = window.io('http://127.0.0.1:3000')

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

socket.on('temp_listener', (msg) => {
  document.querySelector('#temp').innerHTML = '<h1>' + msg + '°</h1>'
  // updateTempChart(msg)
  // chart.update()
})

socket.on('hud_listener', (msg) => {
  hud_current = msg
  document.querySelector('#hud').innerHTML = '<h3>' + msg + '%</h3>'
  updateHudChart(msg)
  chart.update()
})

setInterval(() => {
  updateHudChart(hud_current)
  chart.update()
}, 1000)