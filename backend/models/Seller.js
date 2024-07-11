import { Schema, model } from 'mongoose'

const SellerSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    email: { type: String, required: true },
    //add password hashed
    address: { 
      country: { type: String },
      street1: { type: String },
      street2: { type: String },
      city: { type: String },
      province: { type: String },
      zip: { type: String }
    }
  },
  { timestamps: true }
)

export const Seller = model('Seller', SellerSchema)