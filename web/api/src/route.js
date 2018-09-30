import { Router } from 'express'

import pole from 'controllers/pole'
import webhook from 'controllers/webhook'

const router = Router()

router.use('/', (req, res, next) => {
  next()
})

const api = (() => Router()
  .get('/poles', pole.get_poles)
  .get('/pole', pole.get_pole)
)()

const wk = (() => Router()
  .post('/', webhook.post_index)
  .post('/temp_humidity', webhook.post_temp_humidity)
)()

router.use('/api', api)
router.use('/whook', wk)

export default router