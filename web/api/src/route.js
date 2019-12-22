import { Router } from 'express'

import pole from 'controllers/pole'
import vaccine from 'controllers/vaccine'
import webhook from 'controllers/webhook'
import beacon from 'controllers/beacon'
import pig from 'controllers/pig'
import bill from 'controllers/bill'
import breeder from 'controllers/breeder'
import breederVaccineinjection from 'controllers/breeder_vaccineinjection'
import farrowingInformation from 'controllers/farrowingInformation'
import pigletpen from 'controllers/pigletpen'
import pigletpenVaccineInjection from 'controllers/pigletpen_vaccineinjection'
import sale from 'controllers/sale'

import user from 'controllers/user'

import notification from 'controllers/notification'

const router = Router()

router.use('/', (req, res, next) => {
  next()
})

// middleware
const api = (() => Router()
  .get('/poles', pole.get_poles)
  .get('/pole', pole.get_pole)

  .post('/vaccine/add', vaccine.create)
  .get('/vaccine', vaccine.get)
  .get('/vaccine/one', vaccine.getOne)
  .get('/vaccine/list', vaccine.getList)
  .delete('/vaccine/delete', vaccine.delete)

  .post('/pig/add', pig.create)
  .get('/pig', pig.get)

  .post('/farrowing-room', breeder('farrowing_room').createRoom)
  .get('/farrowing-room', breeder('farrowing_room').getAll)
  .patch('/farrowing-room', breeder('farrowing_room').update)

  .post('/breeding-pigsty', breeder('breeding_pigsty').createRoom)
  .get('/breeding-pigsty', breeder('breeding_pigsty').getAll)
  .patch('/breeding-pigsty', breeder('breeding_pigsty').update)

  .post('/breeder/vaccine-injection', breederVaccineinjection.create)
  .patch('/breeder/vaccine-injection', breederVaccineinjection.update)
  .delete('/breeder/vaccine-injection', breederVaccineinjection.delete)

  .post('/farrowing-information', farrowingInformation.create)
  .patch('/farrowing-information', farrowingInformation.update)
  .delete('/farrowing-information', farrowingInformation.delete)

  .post('/piglet-pen', pigletpen.create)
  .get('/piglet-pen', pigletpen.get)
  .patch('/piglet-pen', pigletpen.update)

  .post('/piglet-pen/vaccine-injection', pigletpenVaccineInjection.create)
  .patch('/piglet-pen/vaccine-injection', pigletpenVaccineInjection.update)
  .delete('/piglet-pen/vaccine-injection', pigletpenVaccineInjection.delete)

  .post('/sale', sale.create)
  .get('/sale', sale.get)
  .patch('/sale', sale.update)
  .delete('/sale', sale.delete)

  .post('/bill/add', bill.create)
  .get('/bill', bill.get)

  .post('/beacon/add', beacon.create)
  .get('/beacon', beacon.get)
  .delete('/beacon/delete', beacon.delete)

  .post('/movement/stamp', pig.stamp_move)

  .post('/login', user.login)
  .post('/register', user.register)
)()
router.use('/api', api)

const ext = (() => Router()
  .get('/push-noti/not-read', notification.getNotRead)
  .get('/push-noti/read', notification.getRead)
  .get('/push-noti', notification.get)

  .post('/push-noti/new', notification.create)
  .post('/push-noti/read', notification.read)
)()
router.use('/ext', ext)

const wk = (() => Router()
  .post('/', webhook.post_index)
  .post('/ggassistant', webhook.post_index)
  .post('/temp_humidity', webhook.post_temp_humidity)
)()
router.use('/whook', wk)

router.all('/', (req, res) => {
  res.redirect(301, 'https://angry-montalcini-2721e6.netlify.com.')
})

export default router