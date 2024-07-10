import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    image: { type: String },
    //add password hashed
    billing_address: {type: [String]},
    shipping_address: { type: [String] }
  },
  { timestamps: true }
)

export const Product = model('Product', ProductSchema)