import { mongoose } from "mongoose";

const EducationSchema = new mongoose.Schema(
  {
    degree: String,
    year: String,
    college: String,
  },
  { timeStamps: true }
);

const Education =
  mongoose.models.Education || mongoose.models("Education", EducationSchema);

export default Education;
