import mongoose from "mongoose";


const connectDB = async () => {
    if (mongoose.connections[0].readyState){
        return true
    }

    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URI, {
            connectTimeoutMS: 30000,
        });
        console.log("MongoDB connected!");
        return true
    } catch(err){
        console.log("MongoDB connection error:", err);
        throw new Error("Failed to connect to MongoDB");
    }
}

export default connectDB