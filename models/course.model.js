import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  freeCourseLink: { type: String },
  id: { type: String, required: true },
  category: { type: String, required: true },
  isFree: { type: Boolean },
  title: { type: String, required: true },
  imageLink: { type: String },
  description: { type: String },
  courseTitle: { type: String },
  courseDescription: { type: String },
  bootcampText: { type: String },
  durationText: { type: String },
  certificateText: { type: String },
  nextCohort: { type: Date },
  applicationDeadline: { type: Date },
  overviewTitle: { type: String },
  overviewDescription: { type: String },

  card1Title: { type: String },
  card1Description: { type: String },
  card2Title: { type: String },
  card2Description: { type: String },
  whatIsTitle: { type: String },
  whatIsDescription: { type: String },
  hardwareReqs: { type: [String] },
  softwareReqs: { type: [String] },
  preReqs: { type: [String] },
  curriculumPdfLink: {
    type: String,
    required: false,
  },
  curriculum: {
    type: [
      {
        title: { type: String },
        content: { type: [String] },
      },
    ],
  },
  tuitionPrice: { type: Number },
  tuitionSalePrice: { type: Number },
  scholarshipAmount: { type: Number },
  scholarshipDetails: { type: String },

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
