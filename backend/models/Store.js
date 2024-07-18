import { Schema, model } from 'mongoose'

const StoreSchema = new Schema(
  {
    sellerId: { type: String, required: true },
    name: { type: String, required: true },
    images: { type: [String] },
    status: { type: String, required: true, default: "Unpublished" },
    intro: { type: String }
  },
  { timestamps: true }
)

export const Store = model('Store', StoreSchema)