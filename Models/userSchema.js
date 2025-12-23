import { TokenExpiredError } from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  UserAge: {
    type: Number,
    required: true,
  },
  userDOB: {
    type: String,
    required: true,
  },
  userProfile: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  token: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

export default user;
