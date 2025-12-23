import User from "../Models/userSchema.js";
import dotenv from "dotenv";

dotenv.config();

export const CreateUser = async (req, res) => {
  try {
    const { username, age, DOB, profile } = req.body;
    const newUser = new User({ username, age, DOB, profile });
    await newUser.save();
    res
      .status(200)
      .json({ message: "The user is registered Successfully", data: newUser });
  } catch (error) {
    res.status(503).json({ message: "The user is not registered" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const findUser = await User.find();
    res
      .status(200)
      .json({ message: "All users is fetched Successfully", data: findUser });
  } catch (error) {
    res.status(503).json({ message: "error in fetching user" });
  }
};

export const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const findUser = await User.findById(id);
    res.status(200).json({
      message: "The specific user is fetched successfully",
      data: findUser,
    });
  } catch (error) {
    res.status(503).json({ message: "Error in fetching user by Id" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, age, DOB, profile } = req.body;
    const updated = await User.findByIdAndUpdate(
      { id },
      { username, age, DOB, profile },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "The user is updated successfully", data: updated });
  } catch (error) {
    res.status(503).json({ message: "Error in Updating user" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "User is deleted successfully", data: deleteUser });
  } catch (error) {
    res.status(503).json({ message: "Error in deleting user" });
  }
};
