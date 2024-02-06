import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  id: { type: String, required: true },
  category: { type: String, required: true },
  isFree: { type: Boolean, required: true },
  title: { type: String, required: true },
  imageLink: { type: String, required: true },
  description: { type: String, required: true },
  courseTitle: { type: String, required: true },
  courseDescription: { type: String, required: true },
  bootcampText: { type: String, required: true },
  durationText: { type: String, required: true },
  certificateText: { type: String, required: true },
  nextCohort: { type: Date, required: true },
  applicationDeadline: { type: Date, required: true },
  overviewTitle: { type: String, required: true },
  card1Title: { type: String, required: true },
  card1Description: { type: String, required: true },
  card2Title: { type: String, required: true },
  card2Description: { type: String, required: true },
  whatIsTitle: { type: String, required: true },
  whatIsDescription: { type: String, required: true },
  hardwareReqs: { type: [String], required: true },
  softwareReqs: { type: [String], required: true },
  preReqs: { type: [String], required: true },
  curriculum: {
    type: [
      {
        title: { type: String, required: true },
        content: { type: [String], required: true },
      },
    ],
    required: true,
  },
  tuitionPrice: { type: Number, required: true },
  tuitionSalePrice: { type: Number, required: true },
  scholarshipAmount: { type: Number, required: true },
  scholarshipDetails: { type: String, required: true },

  careerOpportunities: {
    type: [
      {
        jobRole: { type: String },
        averageSalary: { type: Number },
      },
    ],
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
// module.exports = Course;
