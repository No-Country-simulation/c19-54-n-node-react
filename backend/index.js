import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/index.js'
import connectDB from './utils/db.js'

import { swaggerDocs } from './swagger.js'

const PORT = process.env.PORT || 8080
const app = express()

connectDB()

app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .disable('x-powered-by')

  .use(routes)

  .listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`)
    swaggerDocs(app, PORT)
  })
