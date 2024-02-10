import express from "express";
const faqRoutes = express.Router();

import FAQ from "../models/faq.model.js";

// Get all faqs
faqRoutes.get("/", async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new FAQ
faqRoutes.post("/", async (req, res) => {
  try {
    const newFAQ = await FAQ.create(req.body); // Assuming req.body contains the JSON object for the new course
    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default faqRoutes;
