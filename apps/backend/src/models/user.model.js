import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId:{type:String,unique:true},
    email:{type:String,unique:true},
    name:String,
    picture:String,
    dailyUsageCount: { type: Number, default: 0 },
    usageDate: { type: String, default: null }, 
    createdAt:{type:Date, default:Date.now}
});

export const User = mongoose.model("User",userSchema);