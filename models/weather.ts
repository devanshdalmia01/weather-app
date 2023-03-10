import { Schema, model } from "mongoose";
import weather from "../interface/weather.js";

const weatherSchema = new Schema<weather>({
	coord: { lon: Number, lat: Number },
	weather: [
		{
			id: Number,
			main: String,
			description: String,
			icon: String,
			_id: false,
		},
	],
	base: String,
	main: {
		temp: Number,
		feels_like: Number,
		temp_min: Number,
		temp_max: Number,
		pressure: Number,
		humidity: Number,
		sea_level: Number,
		grnd_level: Number,
	},
	visibility: Number,
	wind: { speed: Number, deg: Number, gust: Number },
	clouds: { all: Number },
	dt: Number,
	sys: {
		country: String,
		sunrise: Number,
		sunset: Number,
	},
	timezone: Number,
	id: Number,
	name: String,
	cod: Number,
});

export default model("Weather", weatherSchema);
