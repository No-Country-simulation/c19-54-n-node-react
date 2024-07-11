import { Schema, model } from 'mongoose'

const OrderSchema = new Schema(
  {
    status: { type: String, required: true },
    products: 
        [ {
            productId: { type: String },
            quantity: { type: int },
          }
        ]
    ,
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
    userId: { type: String, required: true }
  },
  { timestamps: true }
)

export const Order = model('Order', OrderSchema)