import { Schema, model } from 'mongoose'
const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String }
  },
  { timestamps: true }
)

export const Product = model('Product', ProductSchema)
