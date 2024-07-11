import { Router } from 'express'
import { controllers } from '../controllers/product.controller.js'


const router = Router()

router
    .get('/', controllers.getAllProducts)
    .get('/:id', controllers.getProductById)
    .post('/', controllers.createProduct)
    .put('/:id', controllers.updateProduct)
    .delete('/:id', controllers.deleteProduct)

export default router