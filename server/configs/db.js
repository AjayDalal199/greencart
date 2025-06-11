import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
