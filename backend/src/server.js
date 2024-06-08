// Import Section
import { app } from "./app.js";
import "dotenv";

// Configuration Section
const PORT = process.env.BACKEND_PORT;

// Routes and Server Handling
app.listen(PORT, (error) => {
    if(error){
        console.log(`ERROR: Server error connecting to port: ${PORT}`);
        return;
    }
    console.log(`SUCCESS: Server successfully connected at: http://localhost:${PORT}`);
});