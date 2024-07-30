import { Router } from 'express'
import { controllers } from '../controllers/product.controller.js'

const productsRouter = Router()

productsRouter
  .get('/', controllers.getAllProducts)
  .get('/:id', controllers.getProductById)
  .post('/', controllers.createProduct)
  .put('/:id', controllers.updateProduct)
  .put('/:id/:status', controllers.updateProductStatus)
  .delete('/:id', controllers.deleteProduct)
  .get('/store/:id', controllers.getStoreProducts)
  .get('/category/:cat', controllers.getCategoryProducts)

export default productsRouter
