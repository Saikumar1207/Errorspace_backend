import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/api/signup", signup);
router.post("/api/login", login);

export default router;
