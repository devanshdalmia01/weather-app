import { NextFunction, Request, Response } from "express";

export default function checkPrime(
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (new Date().getDate() % 2 === 0) {
		return res
			.status(200)
			.json({ message: "Date is not prime so no data" });
	} else {
		for (let i = 3; i <= Math.sqrt(new Date().getDate() - 2); i += 2) {
			if (new Date().getDate() - (2 % i) === 0) {
				return res
					.status(200)
					.json({ message: "Date is not prime so no data" });
			}
		}
		next();
	}
}
