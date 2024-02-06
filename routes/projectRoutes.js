import express from "express";
const projectRoutes = express.Router();

import Project from "../models/project.model.js";

// Get all projects
projectRoutes.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get project by ID
projectRoutes.get("/:id", async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId); // Use findOne and specify the 'id' field
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new project
projectRoutes.post("/", async (req, res) => {
  try {
    const newProject = await Project.create(req.body); // Assuming req.body contains the JSON object for the new course
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default projectRoutes;
