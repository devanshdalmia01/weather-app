import { Request, Response } from "express";
import { getWeatherFromCityCode } from "../helpers/getWeatherAPI.js";

const check = (p: number) => {
	for (let i = 3; i <= Math.sqrt(p); i += 2)
		if (p % i === 0) {
			return true;
		}
	return false;
};

const getWeatherDataForCity = async (req: Request, res: Response) => {
	if (new Date().getDate() % 2 === 0 || check(new Date().getDate() + 1)) {
		return res.send({ message: "Date is not prime so no data" });
	} else if (req.query.cityCode === undefined) {
		getWeatherFromCityCode(1259229, res);
	} else {
		getWeatherFromCityCode(Number(req.query.cityCode), res);
	}
};

export { getWeatherDataForCity };
