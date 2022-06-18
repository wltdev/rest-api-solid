import 'module-alias/register'
import express from 'express'
import { router } from './routes'

import { ErrorMiddleware } from './middlewares/ErrorMiddleware'

const app = express()
app.use(express.json())
app.use(router)
app.use(ErrorMiddleware)

export { app }
