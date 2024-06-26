import express from "express";
const router = express.Router();
import {
  registerUser,
  authUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

// Rota de registro
router.post("/register", registerUser);

// Rota de login
router.post("/login", authUser);

// Rota de perfil do usuário (protegida)
router.get("/profile", protect, getUserProfile);

export default router;
