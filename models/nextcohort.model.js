import mongoose from "mongoose";

const cohortSchema = new mongoose.Schema({
  cohort: [
    {
      cohortName: { type: String },
      cohortDates: { type: [Date] },
    },
  ],
});

const NextCohort = mongoose.model("NextCohort", cohortSchema);

export default NextCohort;
