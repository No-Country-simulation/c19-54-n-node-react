import express from 'express'
import UsersRouter from './users.routes.js'
import ProductsRouter from './products.routes.js'
import StoresRouter from './stores.routes.js'
import OrdersRouter from './orders.routes.js'
import authRouter from './auth.routes.js'

const router = express.Router()

router.use('/users', UsersRouter)
router.use('/products', ProductsRouter)
router.use('/stores', StoresRouter)
router.use('/orders', OrdersRouter)
router.use('/auth', authRouter)


export default router
