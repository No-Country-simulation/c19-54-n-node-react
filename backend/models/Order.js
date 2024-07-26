import { Schema, model } from 'mongoose'

const OrderSchema = new Schema(
  {
    status: { type: String, required: true, default: 'Pending' },
    products:
        [{
          productId: { type: String },
          quantity: { type: Number, default: 1 },
          price: { type: String }
        }
        ],
    shippingAddress: {
      country: { type: String },
      street1: { type: String },
      street2: { type: String },
      city: { type: String },
      province: { type: String },
      zip: { type: String }
    },
    billingAddress: {
      country: { type: String },
      street1: { type: String },
      street2: { type: String },
      city: { type: String },
      province: { type: String },
      zip: { type: String }
    },
    userId: { type: String, required: true },
    storeId: { type: String, required: true },
    total: { type: Number, required: true }
  },
  { timestamps: true }
)

export const Order = model('Order', OrderSchema)
