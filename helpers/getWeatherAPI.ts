import fetch from "node-fetch";
import { Response } from "express";
import weatherInterface from "../interface/weather.js";
import Weather from "../models/weather.js";

const getWeatherFromCityCode = async (cityCode: number, res: Response) => {
	const data = await fetch(
		`${process.env.API_BASE_URL}weather?id=${cityCode}&appid=${process.env.API_KEY}`,
		{
			method: "GET",
		}
	)
		.then((response) => {
			return response.json();
		})
		.catch((error) => {
			if (error instanceof Error) {
				return res.send({
					error: true,
					data: error.message,
				});
			}
		});
	Weather.findOne({ id: cityCode }, (error: Error, doc: weatherInterface) => {
		if (error) {
			return res
				.status(500)
				.json({ error: true, message: error.message });
		} else if (!doc) {
			const weather = new Weather({
				...data,
			});
			weather.save();
			return res.status(200).json(weather as weatherInterface);
		} else if (doc.dt < data.dt) {
			Weather.updateOne(
				{ id: cityCode },
				{
					$set: {
						...data,
					},
				},
				(error: Error, doc: weatherInterface) => {
					if (error) {
						return res
							.status(500)
							.json({ error: true, message: error.message });
					}
					return res.status(200).json(data as weatherInterface);
				}
			);
		} else {
			return res.status(200).json(data as weatherInterface);
		}
	});
};

export { getWeatherFromCityCode };
