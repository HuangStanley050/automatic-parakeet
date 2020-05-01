import mongoose from "mongoose";
const db = process.env.DB;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
export { connectDB };
