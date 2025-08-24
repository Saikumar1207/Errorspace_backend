// backend/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true }, // correct casing
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
