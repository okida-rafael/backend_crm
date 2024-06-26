//Define as rotas da API para as operações CRUD.

import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  getClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";

const router = express.Router();

router.route("/").get(protect, getClients).post(protect, createClient);

router
  .route("/:id")
  .get(protect, getClientById)
  .put(protect, updateClient)
  .delete(protect, deleteClient);

export default router;
