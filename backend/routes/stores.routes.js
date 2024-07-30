import { Router } from 'express'
import { controllers } from '../controllers/store.controller.js'

const storesRouter = Router()

storesRouter
  .get('/', controllers.getAllStores)
  .get('/:id', controllers.getStoreById)
  .post('/', controllers.createStore)
  .put('/:id', controllers.updateStore)
  // .put('/:id/:status', controllers.updateStoreStatus)
  .delete('/:id', controllers.deleteStore)
  .get('/user/:id', controllers.getUserStore)

export default storesRouter
