// Import Section
import { app } from "./app.js";
import router from "./routes/index.routes.js";

// Configuration Section
const PORT = process.env.BACKEND_PORT;

// Routes and Server Handling
app.use("/", router);
app.listen(PORT, (error) => {
    if(error){
        console.log(`ERROR: Server error connecting to port: ${PORT} | ${error}`);
        return;
    }
    console.log(`SUCCESS: Server connected at: http://localhost:${PORT}`);
});