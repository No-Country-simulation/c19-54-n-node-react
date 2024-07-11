import { Schema, model } from 'mongoose'

const PaymentSchema = new Schema(
  {
    userId: { type: String, required: true },
    type: { type: String, required: true }, //definir medios de pago
    status: { type: String, required: true, default: "Pending" },
    orders: { type: [String] },
    billingAddress: { 
        country: { type: String },
        street1: { type: String },
        street2: { type: String },
        city: { type: String },
        province: { type: String },
        zip: { type: String }
    },
    total: { type: Number, required: true, default: 0 },
    card: {
        type: { type: String },
        lastFourNumbers: { type: String },
        expiryMonth: { type: Number },
        expiryYear: { type: Number },
        cvvVerified: { type: Boolean}
    }   //opcional si se paga con tarjeta, considerar otros datos de otros medios
  },
  { timestamps: true }
)

export const Payment = model('Payment', PaymentSchema)