import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
  faqs: {
    type: [
      {
        title: { type: String, required: true },
        body: { type: String, required: true },
      },
    ],
    required: true,
  },
});

const FAQ = mongoose.model("FAQ", faqSchema);

export default FAQ;
