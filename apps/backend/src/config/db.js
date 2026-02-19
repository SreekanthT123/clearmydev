import mongoose from "mongoose";

export async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo db connected successfully");
    } catch(error){
        console.log("mongodb connection failed", error.message);
        process.exit(1);
    }
}