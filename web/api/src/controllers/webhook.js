import axios from 'axios'

export default {
  post_index: (req, res) => {
    if (req.body.queryResult.intent.displayName === 'temp_humidity') {
      res.json()
    }
  },

  post_temp_humidity: (req, res) => {
    console.log(req.body)

    axios.get('http://192.168.2.2:3000/info', {
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