import fetch from "node-fetch";
import { Request, Response } from "express";
import { getWeatherFromCityCode } from "../helpers/getWeatherAPI.js";
import geoip from "geoip-lite";

const getWeatherDataForCity = async (req: Request, res: Response) => {
	console.log(req.ip);
	// GeoIP Package
	console.time();
	console.log(geoip.lookup(req.ip));
	console.timeEnd();
	// Key CDN
	console.time();
	console.log(
		await (
			await fetch(`https://tools.keycdn.com/geo.json?host=${req.ip}`, {
				method: "GET",
				headers: {
					"User-Agent": "keycdn-tools:https://.*",
				},
			})
		).json()
	);
	console.timeEnd();
	// IP Info
	console.time();
	console.log(
		await (
			await fetch(`https://ipinfo.io/${req.ip}/?token=5de107c6c57581`, {
				method: "GET",
			})
		).json()
	);
	console.timeEnd();
	if (req.query.cityCode === undefined) {
		getWeatherFromCityCode(1259229, res);
	} else {
		getWeatherFromCityCode(Number(req.query.cityCode), res);
	}
};

export { getWeatherDataForCity };
