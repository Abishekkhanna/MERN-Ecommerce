import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "public-id",
      url: "url",
    },
  });
  res.status(201).json({
    success: true,
    user,
  });
};
