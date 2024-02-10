import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  facebook: { type: String, required: false },
  instagram: { type: String, required: false },
  x: { type: String, required: false },
  linkedIn: { type: String, required: false },
  tiktok: { type: String, required: false },
  microsoftBooking: { type: String, required: false },
});

const Link = mongoose.model("Link", linkSchema);

export default Link;
