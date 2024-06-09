// Import Section
import express from "express";
import "dotenv";
import "./config/database.config.js";
import "./config/nodemailer.config.js";
import "./config/cloudinary.config.js";
import cors from "cors";

// Configuration Section
const app = express();

// Middleware Section
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

// Export Section
export { app };