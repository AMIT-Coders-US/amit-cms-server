import express from "express";
const cohortRoutes = express.Router();

import NextCohort from "../models/nextcohort.model.js";

// Get all cohorts
cohortRoutes.get("/", async (req, res) => {
  try {
    const cohorts = await NextCohort.find();
    res.json(cohorts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new link
cohortRoutes.post("/", async (req, res) => {
  try {
    const newCohort = await NextCohort.create(req.body); // Assuming req.body contains the JSON object for the new course
    res.status(201).json(newCohort);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default cohortRoutes;
