// Import Section
import nodemailer from "nodemailer";

// Creating a Transporter
const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
});

// Export Section
export { transporter };