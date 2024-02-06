import mongoose from "mongoose";

const stepsSchema = new mongoose.Schema({
  StepsToApply: { type: [String], required: true },
});

const StepsToApply = mongoose.model("StepsToApply", stepsSchema);

export default StepsToApply;
