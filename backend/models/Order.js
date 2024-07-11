import { Schema, model } from 'mongoose'

const OrderSchema = new Schema(
  {
//COMPLETAR
  },
  { timestamps: true }
)

export const Order = model('Order', OrderSchema)