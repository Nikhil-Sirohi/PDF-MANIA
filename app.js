import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
import pdfRoutes from "./routes/pdfRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import dotenv from "dotenv"; // Load environment variables
dotenv.config();

const app = express();

connectDB();

app.use(express.json());

// Set up routes
app.use("/api/auth", authRoutes);
app.use("/api/pdfs", pdfRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

app.use(errorHandler); // Use error handling middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
