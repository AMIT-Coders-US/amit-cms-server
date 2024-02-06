import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  mainImage: { type: String, required: true },
  ReviewName: { type: String, required: true },
  ReviewDescription: { type: String, required: true },
  stars: { type: Number, required: true },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
