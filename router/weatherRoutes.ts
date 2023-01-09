import express from "express";
import { getWeatherDataForCity } from "../controller/weatherController.js";

const router = express.Router();

//  Current Weather Conditions of Any Particular City
router.get("/weather", getWeatherDataForCity);

export default router;
