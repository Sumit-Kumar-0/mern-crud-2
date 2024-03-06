import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.bgCyan.bold);
    return conn;
  } catch (error) {
    console.error(
      `Error in DB CONNECTION: ${error.message}`.red.underline.bold
    );
    process.exit(1);
  }
};

export default connectDB;
