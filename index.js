import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// Determine allowed frontend URL
const allowedOrigins = [
  "http://localhost:5173",              // Local dev frontend
  "https://errorspace-git-main-saikumars-projects-47fb2957.vercel.app/"              // Production frontend URL (set in backend env)
];

// Middleware
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

// Prefix all routes with /api
app.use("/api", authRoutes);

// Connect DB & start server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
