import { Router } from 'express'
import { controllers } from '../controllers/order.controller.js'


const ordersRouter = Router()

ordersRouter
    .get('/', controllers.getAllOrders)
    .get('/:id', controllers.getOrderById)
    .post('/', controllers.createOrder)
    .put('/:id', controllers.updateOrder)
    .delete('/:id', controllers.deleteOrder)

export default ordersRouter