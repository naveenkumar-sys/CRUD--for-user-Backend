
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  age: {
    type:String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  profile: {
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
