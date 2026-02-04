import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("DB CONNECTED");
        });

        mongoose.connection.on('error', (err) => {
            console.log("DB Connection Error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("DB Disconnected");
        });

        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
            serverSelectionTimeoutMS: 30000, // 30 seconds
            socketTimeoutMS: 45000, // 45 seconds
        });

        console.log("MongoDB connection successful");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

export default connectDB;