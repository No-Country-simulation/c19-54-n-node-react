import { set, connect } from 'mongoose'
set('strictQuery', true, 'useNewUrlParser', true)
const connectDB = async () => {
  try {
    await connect(process.env.URI)
    console.log('MongoDB is Connected...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}
export default connectDB
