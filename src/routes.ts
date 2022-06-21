import { Router } from 'express'
import { createUserContoller } from './useCases/CreateUser'
import { getUserContoller } from './useCases/GetUser'

const router = Router()

router.post('/users', (request, response) => {
  return createUserContoller.handle(request, response)
})

router.get('/users/:id', (request, response) => {
  return getUserContoller.handle(request, response)
})

export { router }
