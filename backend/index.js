import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
//import router from './routes/products.routes.js'

const PORT = process.env.PORT || 8080
const app = express()
app
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors())
  .disable('x-powered-by')
  //.use('/noticias', router)
   .listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
  })
