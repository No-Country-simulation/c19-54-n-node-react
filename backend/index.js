import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import UsersRouter from './routes/users.routes.js'
import productsRouter from './routes/products.routes.js'
import storesRouter from './routes/stores.routes.js'
import ordersRouter from './routes/orders.routes.js'
import connectDB from './utils/db.js'

const PORT = process.env.PORT || 8080
const app = express()

connectDB()
app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .disable('x-powered-by')
  .use('/users', UsersRouter)
  .use('/products', productsRouter)
  .use('/stores', storesRouter)
  .use('/orders', ordersRouter)
  .listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`)
  })
