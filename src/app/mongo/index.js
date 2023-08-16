import mongoose, { Mongoose } from "mongoose";

const connectMondoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMondoDb;
