import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Login
userSchema.methods.matchPaaword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};
const User = mongoose.model("user", userSchema);

export default User;
