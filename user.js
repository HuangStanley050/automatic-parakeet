import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  address: String,
});

export default mongoose.model("User", userSchema);
