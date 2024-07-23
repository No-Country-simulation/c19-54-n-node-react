import { Router } from 'express'
import { controllers } from '../controllers/user.controller.js'


const UsersRouter = Router()

UsersRouter
    .get('/', controllers.getAllUsers)
    .get('/:id', controllers.getUserById)
    .post('/', controllers.createUser)
    .put('/:id', controllers.updateUser)
    .delete('/:id', controllers.deleteUser)
    .get('/role/:role', controllers.getUsersByRole)

export default UsersRouter