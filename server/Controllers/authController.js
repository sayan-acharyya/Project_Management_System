import { asyncHandler } from "../middlewares/asyncHandler.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utills/generateToken.js";


//Register user
export const registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password ) {
        return next(new ErrorHandler("Please provide all required feilds", 400));
    }
    let user = await User.findOne({ email });
    if (user) {
        return next(new ErrorHandler("user already exist with this email", 400));
    }
    const newPassword = await bcrypt.hash(password, 10);

    user = new User({ name, email, password: newPassword, role });
    await user.save();
    generateToken(user, 201, "User registered successfully", res);
})

export const login = asyncHandler(async (req, res, next) => {
  
})

export const getUser = asyncHandler(async (req, res, next) => {

})

export const logout = asyncHandler(async (req, res, next) => {

})

export const forgotPassword = asyncHandler(async (req, res, next) => {

})

export const resetPassword = asyncHandler(async (req, res, next) => {

})