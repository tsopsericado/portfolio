import { mongoose } from "mongoose";

const Userchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { timeStamps: true }
);

const User = mongoose.models.User || mongoose.models("User", Userchema);

export default User;
