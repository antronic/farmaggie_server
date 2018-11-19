import axios from 'axios'
import { random } from 'lodash'
import googleAssistant from './google_assistant/intent'

export default {
  post_index: async (req, res) => {
    const body = req.body
    let resp = {}

    if (!body.queryResult) {
      res.json({
        error: 'You request does not match our structure.'
      })
    }

    if (body.queryResult.intent.displayName === 'temp_humidity') {
      resp = {
        fulfillmentText: await googleAssistant.getTempHumidity(),
      }
    }

    if (body.queryResult.intent.displayName === 'pig_amount') {
      resp = {
        fulfillmentText: await googleAssistant.getPigAmount(),
        // fulfillmentText: 'ตายห่าหมดแล้ว อีสัส!'
      }
    }

    res.json(resp)
  },

  post_temp_humidity: (req, res) => {
    console.log(req.body)

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
        const resp = {
          fulfillmentText: `ตอนนี้อุณหภูมิ ${data.temp}°C และความชื้น ${data.humidity}%`
          // fulfillmentText: `ตอนนี้อุณหภูมิ ${data.temp}°C และความชื้น ${data.humidity}% แล้วอยากรู้อะไรอีกไหม อีเหี้ย`
        }

        res.json(resp)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
        res.end()
      })
  }
}