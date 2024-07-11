import { set, connect } from 'mongoose'
const dotenv = require("dotenv");

dotenv.config();

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

set('strictQuery', true, 'useNewUrlParser', true)
const connectDB = async () => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(process.env.MONGO_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error(err.message)
    await mongoose.disconnect();
  }
}
export default connectDB
