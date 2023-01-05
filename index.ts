import mongoose, { ConnectOptions } from "mongoose";
import app from "./app.js";

const connectDB = async () => {
	try {
		mongoose.connect(`${process.env.MONOGO_DB_URL}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as ConnectOptions);
	} catch (err) {
		console.error(err);
	}
};

const start = async () => {
	try {
		await connectDB();
		app.listen(process.env.PORT, () =>
			console.log(`Server is listening on port ${process.env.PORT}...`)
		);
	} catch (err) {
		console.error(err);
	}
};

start();
