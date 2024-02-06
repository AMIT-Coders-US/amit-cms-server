import express from "express";
const scholarshipRoutes = express.Router();

import Scholarship from "../models/scholarship.model.js";

// Get all projects
scholarshipRoutes.get("/", async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get project by ID
scholarshipRoutes.get("/:id", async (req, res) => {
  try {
    const scholarshipId = req.params.id;
    const scholarship = await Scholarship.findById(scholarshipId); // Use findOne and specify the 'id' field
    if (scholarship) {
      res.json(scholarship);
    } else {
      res.status(404).json({ message: "Scholarship not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new project
scholarshipRoutes.post("/", async (req, res) => {
  try {
    const newScholarship = await Scholarship.create(req.body); // Assuming req.body contains the JSON object for the new course
    res.status(201).json(newScholarship);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default scholarshipRoutes;
