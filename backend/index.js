import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.routes.js'
import productsRoutes from './routes/products.routes.js'

const PORT = process.env.PORT || 8080
const app = express()

app
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors())
  .disable('x-powered-by')
  .use('/users', usersRoutes)
  .use('/products', productsRoutes)
  .listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
  })
