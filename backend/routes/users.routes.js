import { Router } from 'express'
import { controllers } from '../controllers/user.controller.js'


const router = Router()

router
    .get('/', controllers.getAllUsers)
    .get('/:id', controllers.getUserById)
    .post('/', controllers.createUser)
    .put('/:id', controllers.updateUser)
    .delete('/:id', controllers.deleteUser)

export default router