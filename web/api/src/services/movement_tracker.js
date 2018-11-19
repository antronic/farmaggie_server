import { CronJob } from 'cron'
import moment from 'moment'

import Movement from 'models/Movement'
import Beacon from 'models/Beacon'
import Notification from 'models/Notification'

const cronString = '0 5,15,20,25,30,35,40,45,50,55,0 * * * *'

const time = '5 นาที'

console.log('Tracking imported!')

function check() {
  const timestamp = moment()

  const mustSend = []
  return Movement.find(
    {
      timestamp: {
        $gte: timestamp.subtract(5, 'minutes').format('x'),
        // $lte: timestamp.format('x'),
      }
    },
    null,
    // {
    //   sort: {
    //     _id: -1,
    //   },
    // }
  ).then((docs) => {
    const pigs = []
    const pigData = {}

    docs.forEach((doc) => {
      if (pigs.indexOf(doc.beacon_id) < 0) {
        pigs.push(doc.beacon_id)
      }

      let data = []

      if (Object.hasOwnProperty.call(pigData, doc.beacon_id)) {
        data = pigData[doc.beacon_id]
      }

      if (data.indexOf(doc.zone) < 0) {
        data.push(doc.zone)
      }

      Object.assign(pigData, {
        [doc.beacon_id]: data
      })
    })


    Object.keys(pigData).forEach((item) => {
      console.log(item, pigData[item])
      if (pigData[item].length < 2) {
        mustSend.push(item)
      }
    })

    Beacon.find({
      _id: {
        $in: mustSend,
      }
    }).then((beacons) => {
      const tasks = []
      beacons.forEach((beacon) => {

        const task = Notification.createNotitication(
          'Pig not move',
          `${beacon.name} ไม่มีการเคลื่อนเป็นเวลา ${time} กรุณาไปตรวจสอบ`,
          new Date(),
          'line',
        )

        tasks.push(task)
      })

      Promise.all(tasks)
    })
  })
}

var job = new CronJob(cronString, function () {
  console.log('Tracking checking...')
  check()
})

job.start()
