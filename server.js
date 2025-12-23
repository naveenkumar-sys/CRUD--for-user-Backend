import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//dotenv config
dotenv.config();

//app initialization
const app = express();

//default middleware
app.use(express.json());

//cors middleware - handle error from different port
app.use(cors());

//default route
app.get("/", (req, res) => {
  res.status(200).send("welcome to Backend!🖐️");
});

//port

const port = process.env.PORT || 3000;

//starting the server
app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
