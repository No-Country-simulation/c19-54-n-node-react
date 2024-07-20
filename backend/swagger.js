import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const PORT = process.env.PORT || 8080

const options = {
  definition: {
    openapi: "3.0.3",
    info:{
      title: 'ARtesano - API',
      description:
        'This API provides backend functionality for an e-commerce platform specializing in handicrafts. It allows managing and accessing information about products, users, and sellers. With this API, you can perform operations such as querying the product catalog, registering and authenticating users, and managing seller profiles.',
      version: '1.0.11'
    }},
    apis: ['./routes/orders.routes.js', './routes/products.routes.js', './routes/stores.routes.js', './routes/users.routes.js', './swagger/users.docs.js', './swagger/stores.docs.js'],
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/docs.json', (req, res) =>{
    res.setHeader("Content-type", "application/json")
    res.send(swaggerSpec)
  })

  console.log(
    `Docs are available at http://localhost:${PORT}/docs`
  )
}

export {swaggerDocs}