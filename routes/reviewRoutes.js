import express from "express";
const reviewRoutes = express.Router();

import Review from "../models/review.model.js";

// Get all reviews
reviewRoutes.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get review by ID
reviewRoutes.get("/:id", async (req, res) => {
  try {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId); // Use findOne and specify the 'id' field
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new review
reviewRoutes.post("/", async (req, res) => {
  try {
    const newReview = await Review.create(req.body); // Assuming req.body contains the JSON object for the new course
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default reviewRoutes;
