import HandleError from "../helper/handleError.js";
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
  const token = user.getJWTToken();
  res.status(201).json({
    success: true,
    user,
    token,
  });
};
