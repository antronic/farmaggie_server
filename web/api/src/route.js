import { Router } from 'express'

import pole from 'controllers/pole'
import vaccine from 'controllers/vaccine'
import webhook from 'controllers/webhook'
import pig from 'controllers/pig'
import bill from 'controllers/bill'

import user from 'controllers/user'

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

  .post('/pig/add', pig.create)
  .get('/pig', pig.get)

  .post('/bill/add', bill.create)
  .get('/bill', bill.get)

  .post('/login', user.login)
  .post('/register', user.register)
)()
router.use('/api', api)

const wk = (() => Router()
  .post('/', webhook.post_index)
  .post('/temp_humidity', webhook.post_temp_humidity)
)()
router.use('/whook', wk)

export default router