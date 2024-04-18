import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address.",
      ],

      required: true,
      unique: true,
    },
    password: {
      type: String,
      //   match: [
      //     /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
      //     "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
      //   ],

      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
