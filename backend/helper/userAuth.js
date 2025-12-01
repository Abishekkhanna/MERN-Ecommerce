import jwt from "jsonwebtoken";
import HandleError from "./handleError.js";
import User from "../models/userModel.js";

export const verifyUser = async(req,res,next) => {
    const {token} = req.cookies;
    if(!token){
        return next(new HandleError("Please Login to See Products",401));
    }
    const decodedData = jwt.verify(token,process.env.JWT_TOKEN);
    req.user = await User.findById(decodedData.id);
    next();
}