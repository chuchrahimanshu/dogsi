// Import Section
import mongoose from "mongoose";

// Database Connection
(async () => {
    try {
        const database = await mongoose.connect(process.env.MONGODB_URI);
        if (!database) {
            console.log(`ERROR: Connecting database MongoDB`);
        }
        const port = database.connection.port;
        console.log(`SUCCESS: MongoDB connected at: mongodb://localhost:${port}`);
    } catch (error) {
        console.log(`ERROR: Connecting database MongoDB | ${error}`)
    }
})();

// Export Section
export default mongoose.connection;

