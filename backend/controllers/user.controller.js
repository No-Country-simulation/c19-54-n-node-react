import { User } from '../models/User.js'
import { uploadFile } from '../utils/uploadFile.js'
import { upload } from '../config/multer.js'

const getAllUsers = async (req, res) => {
  const users = await User.find({})
  try {
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
      message: err
    })
  }
}

const getUserById = async (req, res) => {
  const userId = req.params._id
  const user = await User.findById(userId)
  try {
    res.status(200).json({
      status: 'Success',
      data: {
        user
      }
    })
    console.log("status: 'Success'")
  } catch (err) {
    res.status(500).json({
      status: 'Failed',
      message: err
    })
  }
}

const createUser = async (req, res) => {
  upload.fields([{ name: 'image', maxCount: 1 }]),
    async (req, res) => {
      const body = req.body
      const image = req.files.image

      if (image && image.length > 0) {
        const { downloadURL } = await uploadFile(image[0])

        const newUser = new User({
          name: body.name,
          email: body.email,
          password: body.password,
          image: downloadURL,
          billingAddress: body.billingAddress,
          shippingAddress: body.shippingAddress,
          roles: body.roles
        })
        newUser.save()
        return res.status(200).json({ newUser })
      }
      return res.status(400).json({ message: 'Debes enviar una imagen' })
    }
}

const updateUser = async (req, res) => {}
const deleteUser = async (req, res) => {}

export const controllers = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
