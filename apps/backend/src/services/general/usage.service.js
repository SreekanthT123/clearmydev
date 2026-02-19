import { User } from "../../models/user.model.js";

const DAILY_LIMIT = 30;

function getToday(){
    return new Date().toISOString().slice(0,10);
}

export async function checkAndIncrementUsage(userId){
    const user = await User.findById(userId);

    if(!user){
        return {allowed:false};
    }

    const today = getToday();

    if(user.usageDate !== today){
        user.usageDate = today;
        user.dailyUsageCount = 0;
    }

    if(user.dailyUsageCount >= DAILY_LIMIT){
        return {allowed:false, remaining:0};
    }

    user.dailyUsageCount +=1;
    await user.save();

    return {
        allowed:true,
        remaining: DAILY_LIMIT - user.dailyUsageCount
    };
}