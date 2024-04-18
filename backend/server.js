import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import env from "./SRC/validateEnv.js";
import app from "./app.js";
const port = env.PORT;

mongoose
  .connect(env.Mongo_CONNECTION_STRING)
  .then(() => {
    console.log("MongoDB is connected");
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch(console.error);
