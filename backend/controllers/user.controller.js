import { User } from '../models/User.js'
import { uploadFile } from '../utils/uploadFile.js'
import { upload } from '../config/multer.js'
import mongoose from 'mongoose'

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const CryptoJS = require("crypto-js");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json({
      status: 'Success',
      data: {
        users
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

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Invalid user ID'
      })
    }

    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({
        status: 'Failed',
        message: 'User not found'
      })
    }

    res.status(200).json({
      status: 'Success',
      data: {
        user
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

const createUser = (req, res) => {
  upload.fields([{ name: 'image', maxCount: 1 }])(req, res, async err => {
    if (err) {
      return res.status(500).json({ status: 'Failed', message: err.message })
    }

    try {
      const body = req.body
      const image = req.files ? req.files.image : null

      if (image && image.length > 0) {
        const { downloadURL } = await uploadFile(image[0])

        const newUser = new User({
          name: body.name,
          email: body.email,
          password: CryptoJS.AES.encrypt(
            body.password,
            process.env.PASS_SEC
          ).toString(),
          image: downloadURL,
          billingAddress: JSON.parse(body.billingAddress),
          shippingAddress: JSON.parse(body.shippingAddress),
          roles: body.roles.split(',')
        })
        await newUser.save()
        return res.status(200).json({
          status: 'Success',
          data: { newUser }
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

const updateUser = async (req, res) => {
  // Código para actualizar usuario
}

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json(`User with id = ${req.params.id} deleted`)

  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err.message
    })
  }
}

const getUsersByRole = async (req, res) => {
  try {
    const role = req.params.role

    const users = await User.find(
      {
        roles: {
          $in: [role]
        }
      }
    ).sort({createdAt: -1})
    
    if (!users) {
      return res.status(404).json({
        status: 'Failed',
        message: 'Users not found'
      })
    }

    res.status(200).json({
      status: 'Success',
      data: {
        users
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
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser, 
  getUsersByRole
}
