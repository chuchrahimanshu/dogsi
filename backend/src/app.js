// Import Section
import express from "express";
import "dotenv";
import "./config/database.config.js";
import "./config/nodemailer.config.js";
import "./config/cloudinary.config.js";

// Configuration Section
const app = express();

// Export Section
export { app };