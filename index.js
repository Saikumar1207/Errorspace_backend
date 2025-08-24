import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

// Routes
app.use( authRoutes);


// DB & Server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
