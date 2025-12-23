import { TokenExpiredError } from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  Profile: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  }
});

const user = mongoose.model("user", userSchema);

export default user;
