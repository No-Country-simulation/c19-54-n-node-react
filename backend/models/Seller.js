import { Schema, model } from 'mongoose'

const SellerSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    email: { type: String},
    //add password hashed
    address: { type: [String] }
  },
  { timestamps: true }
)

export const Seller = model('Seller', SellerSchema)