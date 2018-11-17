import { Router } from 'express'

import pole from 'controllers/pole'
import vaccine from 'controllers/vaccine'
import webhook from 'controllers/webhook'
import beacon from 'controllers/beacon'
import pig from 'controllers/pig'
import bill from 'controllers/bill'

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

  .post('/bill/add', bill.create)
  .get('/bill', bill.get)

  .post('/beacon/add', beacon.create)
  .post('/beacon', beacon.get)

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
  .post('/temp_humidity', webhook.post_temp_humidity)
)()
router.use('/whook', wk)

export default router