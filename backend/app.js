import "dotenv/config";

import env from "./SRC/validateEnv.js";
import express from "express";
import morgan from "morgan";
import session from "express-session";
import userRouter from "../backend/SRC/router/userRoutes.js";
import noteRouter from "../backend/SRC/router/notesRouter.js";
import { isHttpError } from "http-errors";
import cors from "cors";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // or whichever domain your frontend is served from
  })
);
app.use(
  session({
    secret: env.Session_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/api/user", userRouter);
app.use("/api/notes", noteRouter);

app.use((error, req, res, next) => {
  console.error(error);
  let errorMessage = "Alter, was ist bei dir falsch!";
  let statusCode = 500;

  if (isHttpError(error)) {
    statusCode = error.statusCode;
    errorMessage = error.message;
  }

  res.status(statusCode).json({ error: errorMessage });
});

export default app;
