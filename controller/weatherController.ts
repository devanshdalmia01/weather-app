import fetch from "node-fetch";
import { Request, Response } from "express";
import { getWeatherFromCityCode } from "../helpers/getWeatherAPI.js";
import geoip from "geoip-lite";

const getWeatherDataForCity = async (req: Request, res: Response) => {
	if (req.query.cityCode === undefined) {
		getWeatherFromCityCode(1259229, res);
	} else {
		getWeatherFromCityCode(Number(req.query.cityCode), res);
	}
};

export { getWeatherDataForCity };
