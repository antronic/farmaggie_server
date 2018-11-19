import axios from 'axios'
import { random } from 'lodash'

import Pig from 'models/Pig'

export const getTempHumidity = () => {
  return new Promise((resolve) => {
    const msgs = [
      msg => `ตอนนี้อุณหภูมิ ${msg.temp}°C และความชื้น ${msg.humidity}%`,
    ]

    axios.get('http://ws:3003/info', {
      headers: {
        'Access-Control-Allow-Origin': '*:*'
      }
    })
      .then((response) => {
        const data = {
          temp: response.data.temp,
          humidity: response.data.humidity,
        }

        const msg = msgs[random(0, msgs.length - 1)]

        resolve(msg(data))
      })
  })
}

export const getPigAmount = () => {
  return new Promise((resolve) => {
    const msgs = [
      msg => `ตอนนี้ฟาร์มของคุณ มีหมูทั้งหมด ${msg} ตัว 🐷`,
      msg => `มีน้องหมูทั้งหมด ${msg} ตัวค่ะ ❤️`,
      msg => `ตายหมดแล้วค่ะ....อุ๊ย.......😝 ล้อเล่นค่ะ มีทั้งหมด ${msg} ตัว 🐷`,
    ]

    Pig.countDocuments()
      .then((pig) => {
        const msg = msgs[random(0, msgs.length - 1)]
        resolve(msg(pig))
      })
  })
}

export default {
  getTempHumidity,
  getPigAmount,
}