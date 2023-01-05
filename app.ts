import express from "express";
import "dotenv/config";
import weatherRoutes from "./router/weatherRoutes.js";

const app = express();

app.use("/api", weatherRoutes);

export default app;
