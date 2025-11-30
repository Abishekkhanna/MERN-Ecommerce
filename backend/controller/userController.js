import HandleError from "../helper/handleError.js";
import { sendToken } from "../helper/jswToken.js";
import User from "../models/userModel.js";

export const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name) {
    return next(new HandleError("Name Should not be empty"), 400);
  }
  if (!email) {
    return next(new HandleError("Email Should not be empty"), 400);
  }
  if (!password) {
    return next(new HandleError("Password Should not be empty"), 400);
  }

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "public-id",
      url: "url",
    },
  });
  sendToken(user, 201, res);
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new HandleError("Email or Password can't be Empty", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  const isValidPassword = await user.verifyPassword(password);
  if (!isValidPassword) {
    return next(new HandleError("Email or Password is Wrong", 401));
  }
  sendToken(user, 200, res);
};
