//Configura o servidor Express, conecta ao banco de dados e define as rotas e middlewares.

import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB, disconnectDB } from "./config/database.js";
import clientRoutes from "./routes/clientRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();
connectDB();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("A api está de pé!");
});

app.use("/api/clients", clientRoutes);

app.use(notFound);
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`Server iniciado na porta: ${port}`);
});

// Graceful shutdown
const gracefulShutdown = async () => {
  console.log("Shutting down gracefully...");
  await disconnectDB();
  server.close(() => {
    console.log("Server shut down.");
    process.exit(0);
  });
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
