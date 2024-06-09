// Import Section
import express from "express";
import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";

// Configuration Section
const router = express.Router();

// Middleware Section
router.use("/auth", authRouter);
router.use("/users", userRouter);

// Export Section
export default router;