import { Schema, model } from 'mongoose'

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    images: { type: [String]},
    originalPrice: { type: Float64Array},
    salePrice: {type: Float64Array},
    categories: { type: [String] },
    status: { type: String },
    stock: { type: Number },
    sellerId: { type: String, required: true }
  },
  { timestamps: true }
)

export const Product = model('Product', ProductSchema)
