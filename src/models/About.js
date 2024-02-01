import { mongoose } from "mongoose";

const HomeSchema = new mongoose.Schema(
  {
    heading: string,
    summary: string,
  },
  { timeStamps: true }
);

const Home = mongoose.models.Home || mongoose.models("Home", HomeSchema);

export default Home;
