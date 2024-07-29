import { Order } from '../models/Order.js'
import { upload } from '../config/multer.js'
import mongoose from 'mongoose'

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
    res.status(200).json({
      status: 'Success',
      data: {
        orders
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

const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Invalid order ID'
      })
    }

    const order = await Order.findById(orderId)
    if (!order) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Order not found'
      })
    }

    res.status(200).json({
      status: 'Success',
      data: {
        order
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

const createOrder = async (req, res) => {
    upload.fields([{ name: 'images', maxCount: 5 }])(req, res, async err => {
      if (err) {
        return res.status(500).json({ status: 'Failed', message: err.message })
      } 
      try {
        const body = req.body
        const products = (JSON.parse(body.products)).products
        let total = 0

        if (products && products.length > 0) {
        const productArray = []
          for (let i = 0; i < products.length; i++) {
          productArray.push(products[0])
          total += products[0].price
          }
  
          const newOrder = new Order({
            storeId: body.storeId,
            userId: body.userId,
            shippingAddress: JSON.parse(body.shippingAddress),
          status: 'Pending',
          products: productArray, // por que le crea un _id a cada producto?
          total
          })
          await newOrder.save()
          return res.status(200).json({
            status: 'Success',
            data: { newOrder }
          })
        } else {
          return res
            .status(400)
          .json({ status: 'Failed', message: 'Debes enviar un producto' })
        }
      } catch (err) {
        res.status(500).json({
          status: 'Failed',
          message: err.message
        })
      }
    })
}

const updateOrder = async (req, res) => {

}
const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json(`Order with id = ${req.params.id} deleted`)
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err.message
    })
  }
}

const getStoreOrders = async (req, res) => {
  try {
    const storeId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(storeId)) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Invalid store ID'
      })
    }

    const orders = await Order.find(
      {
        storeId
      }
    ).sort({ createdAt: -1 })

    if (!orders) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Order not found'
      })
    }

    res.status(200).json({
      status: 'Success',
      data: {
        orders
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

const getUserOrders = async (req, res) => {
  try {
    const userId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Invalid user ID'
      })
    }

    const orders = await Order.find(
      {
        userId
      }
    ).sort({ createdAt: -1 })

    if (!orders) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Orders not found'
      })
    }

    res.status(200).json({
      status: 'Success',
      data: {
        orders
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
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  getStoreOrders,
  getUserOrders
}
