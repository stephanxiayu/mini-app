import express from "express";
const router = express.Router();
import { requiresAuth } from "../middleware/auth.js";
import * as UserController from "../controller/userController.js";

router.post("/signup", UserController.signUpController);
router.get("/", requiresAuth, UserController.getAuthenticatedUser);
router.post("/login", UserController.login);

router.post("/logout", UserController.logout);
export default router;
