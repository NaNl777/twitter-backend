import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.route.js";
import { twittRouter } from "./routes/twitts.route.js";
import { commentRouter } from "./routes/comments.route.js";

const port = 3030;

const dbUrl = "mongodb+srv://zelim:Ru95@cluster0.09gco.mongodb.net/twitts";
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(twittRouter);
app.use(commentRouter);

const start = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected...");
    await app.listen(port, () => {
      console.log("Server has been started..");
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
