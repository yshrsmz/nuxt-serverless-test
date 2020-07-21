import express, { Router } from 'express'
import { nuxt } from './core/nuxt'

const app = express()
// const router = Router()

// app.use('/api', router)

app.use(async (req, res, next) => {
  await nuxt.ready()
  nuxt.render(req, res, next)
})

export default app
