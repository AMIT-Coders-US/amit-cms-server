import express from "express";
const linkRoutes = express.Router();

import Link from "../models/link.model.js";

// Get all links
linkRoutes.get("/", async (req, res) => {
  try {
    const links = await Link.find();
    res.json(links);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new link
linkRoutes.post("/", async (req, res) => {
  try {
    const newLink = await Link.create(req.body); // Assuming req.body contains the JSON object for the new course
    res.status(201).json(newLink);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default linkRoutes;
