import JWT from "jsonwebtoken";

export function protect(req,res,next){
    const header = req.headers.authorization;

    if(!header || !header.startsWith("Bearer")){
        return res.status(401).json({error:"Not Authenticated"});
    }

    const token = header.split(" ")[1];

    try{
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        req.usedId = decoded.userId;
        next();
    } catch {
        return res.status(401).json({error:"Invalid token"});
    }
}