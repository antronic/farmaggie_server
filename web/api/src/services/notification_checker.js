import Notification from 'models/Notification'
import { CronJob } from 'cron'
import { sendMessage } from './line'

const cronString = '0 10,20,30,50,0 * * * *'

const ids = []

const mapNotification = doc => () => new Promise(
  (resolve) => {
    return sendMessage([
      {
        type: 'text',
        text: doc.content,
      }
    ])
      .then(() => {
        ids.push(doc._id)
        console.log('send > ' + doc._id)
        resolve()
      })
  }
)

const reduceSendMessage = (p, fn) => p.then(fn)

var job = new CronJob(cronString, function () {

  Notification.getNotificationWithCriteria('line', false, 20)
    .then(async (docs) => {
      console.log('its start')
      if (docs.length > 0) {
        console.log('we found new noti for LINE')

        const docsPromise = docs.map(mapNotification)
        docsPromise.push(() => new Promise((resolve) => {
          return Notification.readNotification(ids)
            .then((doc) => {
              console.log(doc)
              resolve()
            })
        }))

        docsPromise.reduce(reduceSendMessage, Promise.resolve())
      } else {
        console.log('no new noti for LINE')
      }
    })
}, null, true, 'Asia/Bangkok')

job.start()