import express from "express";
import { getWeatherDataForCity } from "../controller/weatherController.js";
import checkPrime from "../middlewares/checkPrime.js";

const router = express.Router();

router.get("/weather", checkPrime, getWeatherDataForCity);

export default router;
