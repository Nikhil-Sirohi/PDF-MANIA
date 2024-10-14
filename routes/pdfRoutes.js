import express from "express";
import { Router } from "express";
const router = Router();
import { uploadPDFsAndMerge } from "../controllers/pdfController.js";
import multer from "multer";

// Set up multer for memory storage
const storage = multer.memoryStorage();

// Define a file filter to allow only PDF files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Only PDF files are allowed"), false); // Reject the file
  }
};

// Initialize multer with memory storage and the file filter
const upload = multer({ storage, fileFilter });

router.post("/merge", upload.array("files", 10), uploadPDFsAndMerge);

export default router;
