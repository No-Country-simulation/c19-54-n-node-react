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
  
          let imageArray = []
          for (let i = 0; i < images.length; i++) {
          let { downloadURL } = await uploadFile(images[i])
          imageArray.push(downloadURL)
          }
  
          const newStore = new Store({
            name: body.name,
            intro: body.intro,
            sellerId: body.sellerId,
            status: "Unpublished",
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

}
const deleteStore = async (req, res) => {

}

export const controllers = {
  getAllStores,
  getStoreById,
  createStore,
  updateStore,
  deleteStore
}