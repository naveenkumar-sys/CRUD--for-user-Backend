import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/db.config.js";
import router from "./Routes/UserRouter.js";

//dotenv config
dotenv.config();

//app initialization
const app = express();

//default middleware
app.use(express.json());

//cors middleware - handle error from different port
app.use(cors());

//call connectDB
connectDB();

//default route
app.get("/", (req, res) => {
  res.status(200).send("welcome to Backend!🖐️");
});

//custom router
app.use("/api/user", router);

//port

const port = process.env.PORT || 3000;

//starting the server
app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
