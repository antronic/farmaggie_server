import { Router } from 'express'

import pole from 'controllers/pole'

const router = Router()

router.use('/', (req, res, next) => {
  next()
})

const api = (() => Router()
  .get('/poles', pole.get_poles)
  .get('/pole', pole.get_pole)
)()

router.use('/api', api)

export default router