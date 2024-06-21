//Define as rotas da API para as operações CRUD.

import express from "express";
import {
  getClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";

const router = express.Router();

router.route("/").get(getClients).post(createClient);

router.route("/:id").get(getClientById).put(updateClient).delete(deleteClient);

export default router;
