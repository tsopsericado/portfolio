pw: GkBbZbtREOg2NJOu;
username: ricardotsopse;

import { Mongoose } from "mongoose";

export default async function connectToDB() {
  try {
    await Mongoose.connect(
      "mongodb+srv://ricardotsopse:GkBbZbtREOg2NJOu@cluster0.27f1t6z.mongodb.net/"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
