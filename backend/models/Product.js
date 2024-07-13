import { Schema, model } from 'mongoose'

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    original_price: { type: Float64Array},
    sale_price: {type: Float64Array},
    images: { type: [String]},
    categories: { type: [String] },
    status: { type: String, default: "Unpublished" },
    stock: { type: Number, required: true, default: 0 },
    storeId: { type: String, required: true }
  },
  { timestamps: true }
)

export const Product = model('Product', ProductSchema)
