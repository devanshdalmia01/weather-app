import fetch from "node-fetch";
import { Request, Response } from "express";
import { getWeatherFromCityCode } from "../helpers/getWeatherAPI.js";
import geoip from "geoip-lite";

const getWeatherDataForCity = async (req: Request, res: Response) => {
	console.log(req.ip);
	console.log("GeoIP Package");
	console.log(geoip.lookup(req.ip));
	console.log("Key CDN");
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
	console.log("IP Info");
	console.log(
		await (
			await fetch(`https://ipinfo.io/${req.ip}/?token=5de107c6c57581`, {
				method: "GET",
			})
		).json()
	);
	if (req.query.cityCode === undefined) {
		getWeatherFromCityCode(1259229, res);
	} else {
		getWeatherFromCityCode(Number(req.query.cityCode), res);
	}
};

export { getWeatherDataForCity };
