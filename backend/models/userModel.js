import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter Your Name"],
      maxLength: [25, "Name shouldn't Exceed 25 Character"],
      minLength: [3, "Name should Greater than 3 Character"],
    },
    email: {
      type: String,
      required: [true, "Enter Your Email"],
      unique: true,
      validate: [validator.isEmail, "Enter Valid Email"],
    },
    password: {
      type: String,
      required: [true, "Enter Your Password"],
      minLength: [6, "Please make sure the password is minimum of 6 character"],
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
        required: [true],
      },
      url: {
        type: String,
        required: [true],
      },
    },
    role: {
      type: String,
      default: "user",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_TOKEN, {
    expiresIn: process.env.JWT_TOKEN_EXPIRY,
  });
};

userSchema.methods.verifyPassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

export default mongoose.model("user", userSchema);
