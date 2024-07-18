import { Product } from '../models/Product.js'
import { uploadFile } from '../utils/uploadFile.js'
import { upload } from '../config/multer.js'

const getAllProducts = async (req, res) => {

}

const getProductById = async (req, res) => {

}

const createProduct = async (req, res) => {
    upload.fields([{ name: 'images', maxCount: 5 }])(req, res, async err => {
      if (err) {
        return res.status(500).json({ status: 'Failed', message: err.message })
      }
      try {
        const body = req.body
        const images = req.files ? req.files.images : null
  
        console.log(body)
  
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
            storeId: "21"//placeholder, required property
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

export const controllers = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}