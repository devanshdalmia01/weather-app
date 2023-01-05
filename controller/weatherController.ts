import { Request, Response } from "express";
import weatherInterface from "../interface/weather.js";
import Weather from "../models/weather.js";

function check(p: number) {
	for (let i = 3; i <= Math.sqrt(p); i += 2)
		if (p % i === 0) {
			return true;
		}
	return false;
}

const getWeatherDataForCity = async (req: Request, res: Response) => {
	if (new Date().getDate() % 2 === 0) {
		return res.send({ message: "Date is not prime so no data" });
	} else if (check(new Date().getDate())) {
		return res.send({ message: "Date is not prime so no data" });
	} else {
		const data = await fetch(
			`${process.env.API_BASE_URL}weather?id=${req.params.citycode}&appid=${process.env.API_KEY}`,
			{
				method: "GET",
			}
		)
			.then((response) => {
				return response.json();
			})
			.catch((err) => {
				if (err instanceof Error) {
					return res.send({ error: true, data: err.message });
				}
			});
		const weather = new Weather({
			...data,
		});
		weather.save();
		return res.send(weather as weatherInterface);
	}
};

export { getWeatherDataForCity };
