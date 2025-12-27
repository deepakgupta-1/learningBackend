import mongoose from "mongoose";

const connectDB = async ()=>{
  
    try{
        console.log("Connecting to MongoDB...");
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("Connected to MongoDB",connectionInstance.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        throw error;
    }
}

export default connectDB;