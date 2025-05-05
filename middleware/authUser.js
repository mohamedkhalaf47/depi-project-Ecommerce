const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
	try {
		const userToken =
			req.headers["Authorization"] || req.headers["authorization"];
		const token = userToken.split(" ")[1]; // Bearer Token
		if (!token) {
			return res
				.status(401)
				.json({ success: false, message: "Not Authorized Login Again" });
		}
		jwt.verify(token, process.env.JWT_SECRET_KEY);
		next();
	} catch (error) {
		console.log(error);
		res.status(400).json({ success: false, message: error.message });
	}
};

module.exports = authUser;
