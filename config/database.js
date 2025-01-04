import mongoose from "mongoose";


const connectDB = async () => {
    if (mongoose.connections[0].readyState){
        return true
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        return true
    } catch(err){
        console.log("MongoDB connection error:", err);
        return false;
    }
}

export default connectDB