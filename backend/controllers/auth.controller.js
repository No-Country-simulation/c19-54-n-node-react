import { User } from '../models/User.js'
import { uploadFile } from '../utils/uploadFile.js'
import { upload } from '../config/multer.js'
import mongoose from 'mongoose'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
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

const login = async (req, res) => {
    upload.fields([{}])(req, res, async err => {
        if (err) {
          return res.status(500).json({ status: 'Failed', message: err.message })
        }
    try {
        const email = req.body.email
        const user = await User.findOne(
            {
                email: email
            }
        );
        if (!user) {
          return res.status(404).json({
            status: 'Failed',
            message: 'User not found'
          })
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
        {
            id: user._id,
            roles: user.roles
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
  
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});

      } catch (err) {
        console.error(err)
        res.status(500).json({
          status: 'Failed',
          message: err.message
        })
      }
    })
}
  
export const controllers = {
    register,
    login
  }