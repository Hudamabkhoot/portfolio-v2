import mongoose from "mongoose";

export const maxDuration = 60;

const connectDB = async () => {
    if (mongoose.connections[0].readyState){
        return true
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        return true
    } catch(err){
        console.log("MongoDB connection error:", err);
        return false;
    }
}

export default connectDB