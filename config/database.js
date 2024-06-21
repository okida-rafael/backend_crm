//Lida com a conexão com o MongoDB

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.error("MongoDB disconnected! Trying to reconnect...");
  connectDB();
});

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("MongoDB disconnected...");
  } catch (err) {
    console.error("Error disconnecting from MongoDB:", err.message);
  }
};

export { connectDB, disconnectDB };
