import { Router } from 'express'
import { controllers } from '../controllers/product.controller.js'


const productsRouter = Router()

productsRouter
    .get('/', controllers.getAllProducts)
    .get('/:id', controllers.getProductById)
    .post('/', controllers.createProduct)
    .put('/:id', controllers.updateProduct)
    .delete('/:id', controllers.deleteProduct)

export default productsRouter