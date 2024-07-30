import { Router } from 'express'
import { controllers } from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter
  .post('/register', controllers.register)
  .post('/login', controllers.login)

export default authRouter
