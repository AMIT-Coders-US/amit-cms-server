import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  mainImage: { type: String, required: true },
  personImage: { type: String, required: true },
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
