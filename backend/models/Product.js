import { Schema, model } from 'mongoose'

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    original_price: { type: Float64Array},
    sale_price: {type: Float64Array},
    categories: { type: [String] },
    //add seller_id
  },
  { timestamps: true }
)

export const Product = model('Product', ProductSchema)
