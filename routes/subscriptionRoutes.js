import express from "express";
import {
  createSubscription,
  getUserSubscription,
} from "../controllers/subscriptionController.js";

const router = express.Router();

// Create subscription route
router.post("/", createSubscription);
// Get user subscription route
router.get("/:userId", getUserSubscription);
export default router;
