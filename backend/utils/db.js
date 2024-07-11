import { set, connect } from 'mongoose'
const uri = "mongodb+srv://admin:u3tp3DSZjyV51x5F@e-commerce.z58ekxs.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

set('strictQuery', true, 'useNewUrlParser', true)
const connectDB = async () => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error(err.message)
    await mongoose.disconnect();
  }
}
export default connectDB
