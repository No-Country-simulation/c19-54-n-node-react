import { Store } from '../models/Store.js'
import { uploadFile } from '../utils/uploadFile.js'
import { upload } from '../config/multer.js'
import mongoose from 'mongoose'

const getAllStores = async (req, res) => {
  try {
    const stores = await Store.find({})
    res.status(200).json({
      status: 'Success',
      data: {
        stores
      }
    })
    console.log("status: 'Success'")
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err.message
    })
  }
}

const getStoreById = async (req, res) => {
  try {
    const storeId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(storeId)) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Invalid store ID'
      })
    }

    const store = await Store.findById(storeId)
    if (!store) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Store not found'
      })
    }

    res.status(200).json({
      status: 'Success',
      data: {
        store
      }
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      status: 'Failed',
      message: err.message
    })
  }
}

const createStore = async (req, res) => {
  upload.fields([{ name: 'images', maxCount: 5 }])(req, res, async err => {
    if (err) {
      return res.status(500).json({ status: 'Failed', message: err.message })
    }
    try {
      const body = req.body
      const images = req.files ? req.files.images : null

      if (images && images.length > 0) {
        const imageArray = []
        for (let i = 0; i < images.length; i++) {
          const { downloadURL } = await uploadFile(images[i])
          imageArray.push(downloadURL)
        }

        const newStore = new Store({
          name: body.name,
          intro: body.intro,
          sellerId: body.sellerId,
          status: 'Unpublished',
          images: imageArray
        })
        await newStore.save()
        return res.status(200).json({
          status: 'Success',
          data: { newStore }
        })
      } else {
        return res
          .status(400)
          .json({ status: 'Failed', message: 'Debes enviar una imagen' })
      }
    } catch (err) {
      res.status(500).json({
        status: 'Failed',
        message: err.message
      })
    }
  })
}

const updateStore = async (req, res) => {
  upload.fields([])(req, res, async err => {
    if (err) {
      return res.status(500).json({ status: 'Failed', message: err.message })
    }
  try {
   
    const storeId = req.params.id
    const body = req.body
    const store = await Store.findById(storeId)
    if (!store) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Store not found'
      })
    } 

    store.name = (body.name != null && body.name != undefined) ? body.name : store.name
    store.intro = (body.intro != null && body.intro != undefined) ? body.intro : store.intro

    store.save()

    return res.status(200).json({
      status: 'Success',
      data: { store }
    })

  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err.message
    })
  }
})
}

const updateStoreStatus = async (req, res) => {
  try {
    const storeId = req.params.id
    const status = req.params.status

    const store = await Store.findById(storeId)
    if (!store) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Store not found'
      })
    } 
    store.status = status
    store.save()

    return res.status(200).json({
      status: 'Success',
      data: { store }
    })

  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err.message
    })
  }
}

const deleteStore = async (req, res) => {
  try {
    await Store.findByIdAndDelete(req.params.id)
    res.status(200).json(`Store with id = ${req.params.id} deleted`)
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err.message
    })
  }
}

const getUserStore = async (req, res) => {
  try {
    const userId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Invalid user ID'
      })
    }

    const store = await Store.find(
      {
        sellerId: userId
      }
    )

    res.status(200).json({
      status: 'Success',
      data: {
        store
      }
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      status: 'Failed',
      message: err.message
    })
  }
}

export const controllers = {
  getAllStores,
  getStoreById,
  createStore,
  updateStore,
  updateStoreStatus,
  deleteStore,
  getUserStore
}
