import mongoose from "mongoose";

// Define File schema
const fileSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true }, // Original file name
    id: { type: String, required: true }, // File ID in GridFS
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

const File = mongoose.model("File", fileSchema); // Create File model
module.exports = File; // Export File model
