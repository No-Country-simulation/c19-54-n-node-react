import { Product } from '../models/Product.js'
import { uploadFile } from '../utils/uploadFile.js'
import { upload } from '../config/multer.js'
import mongoose from 'mongoose'

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json({
      status: 'Success',
      data: {
        products
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

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Invalid product ID'
      })
    }

    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Product not found'
      })
    }

    res.status(200).json({
      status: 'Success',
      data: {
        product
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

const createProduct = async (req, res) => {
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
  
          const newProduct = new Product({
            name: body.name,
            description: body.description,
            originalPrice: body.originalPrice,
            categories: body.categories.split(','),
            status: "Unpublished",
            images: imageArray,
            storeId: body.storeId
          })
          await newProduct.save()
          return res.status(200).json({
            status: 'Success',
            data: { newProduct }
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


const updateProduct = async (req, res) => {

}
const deleteProduct = async (req, res) => {

}

const getStoreProducts = async (req, res) => {
  try {
    const storeId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(storeId)) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Invalid store ID'
      })
    }

    const products = await Product.find(
      {
        storeId: storeId
      }
    ).sort({createdAt: -1})
    
    if (!products) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Product not found'
      })
    }

    res.status(200).json({
      status: 'Success',
      data: {
        products
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
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getStoreProducts
}