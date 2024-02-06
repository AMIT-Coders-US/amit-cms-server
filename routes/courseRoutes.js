import express from "express";
const courseRoutes = express.Router();

import Course from "../models/course.model.js";

// Get all courses
courseRoutes.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get course by ID
courseRoutes.get("/:id", async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findOne({ id: courseId }); // Use findOne and specify the 'id' field
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new course
courseRoutes.post("/", async (req, res) => {
  try {
    const newCourse = await Course.create(req.body); // Assuming req.body contains the JSON object for the new course
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default courseRoutes;
