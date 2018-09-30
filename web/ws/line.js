const axios = require('axios')

const channel_token = 'Bearer lTTnmP4aU8SwY4qQfmqxe4wBK2n3LOlAlANjwvCLBcnqipH8OpVnRpWVSGBMyQ6Y5mlQ88G1CyOGC1McM8P1ZQuPta9XAoMWuI0JFKDw2WK5b64bXEU+EUktluRkVt3knHU9igtNh87AK0AQK1Zs9gdB04t89/1O/w1cDnyilFU='
const user_id = 'U9f9fff68feb95582f87c81e8d6ba7062'

const sendMessageLink = 'https://api.line.me/v2/bot/message/push'

exports.sendMessage = (messages = []) => {
  const template = {
    to: user_id,
    messages,
  }

  return axios({
    method: 'post',
    url: sendMessageLink,
    data: template,
    headers: {
      Authorization: channel_token,
      'Content-Type': 'application/json',
    }
  })
}

