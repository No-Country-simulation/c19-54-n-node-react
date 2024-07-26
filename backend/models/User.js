import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String },
    password: { type: String, required: true },
    billingAddress: {
      country: { type: String },
      street1: { type: String },
      street2: { type: String },
      city: { type: String },
      province: { type: String },
      zip: { type: String }
    },
    shippingAddress: {
      country: { type: String },
      street1: { type: String },
      street2: { type: String },
      city: { type: String },
      province: { type: String },
      zip: { type: String }
    },
    roles: { type: [String] }
  },
  { timestamps: true }
)

export const User = model('User', UserSchema)
