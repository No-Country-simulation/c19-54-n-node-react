import { Router } from 'express'
import { controllers } from '../controllers/user.controller.js'
import { tControllers } from '../controllers/verifyToken.controller.js'

const UsersRouter = Router()

UsersRouter
  .get('/', tControllers.verifyTokenAndAdmin, controllers.getAllUsers)
  .get('/:id', tControllers.verifyToken, controllers.getUserById)
  .post('/', tControllers.verifyToken, controllers.createUser)
  .put('/:id, ', tControllers.verifyTokenAndAuthorization, controllers.updateUser)
  .delete('/:id', tControllers.verifyTokenAndAuthorization, controllers.deleteUser)
  .get('/role/:role', tControllers.verifyToken, controllers.getUsersByRole)

export default UsersRouter
