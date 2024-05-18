import mongoose, { Connection } from "mongoose";

let isconnect: Connection | boolean = false;

const connectDB = async () => {
  if (isconnect) {
    // console.log("already Connected");
    return isconnect;
  }
  try {
    const res = await mongoose.connect(process.env.DB!);
    isconnect = res.connection;
    // console.log("DB connected");
    return isconnect;
  } catch (error) {
    // console.log(error);
    process.exit(1);
  }
};

export default connectDB;
