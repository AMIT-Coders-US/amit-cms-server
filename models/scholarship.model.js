import mongoose, { mongo } from "mongoose";

const scholarshipSchema = new mongoose.Schema({
  scholarship1Title: { type: String, required: true },
  scholarship1Description: { type: String, required: true },
  scholarship2Title: { type: String, required: true },
  scholarship2Description: { type: String, required: true },
});

const Scholarship = mongoose.model("Scholarship", scholarshipSchema);

export default Scholarship;
