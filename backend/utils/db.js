import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.URI}`, {
      serverSelectionTimeoutMS: 5000, // 5 segundos de timeout para selección del servidor
      socketTimeoutMS: 45000 // 45 segundos de timeout para operaciones de socket
    })
    console.log('MongoDB connected...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

export default connectDB
