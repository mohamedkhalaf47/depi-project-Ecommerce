const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			return res
				.status(401)
				.json({ success: false, message: "Missing Field." });
		}
		if (!validator.isEmail(email)) {
			return res
				.status(401)
				.json({ success: false, message: "Please Enter a Valid Email." });
		}
		if (password.length < 8) {
			return res
				.status(401)
				.json({ success: false, message: "Please Enter a Strong Password." });
		}

		const oldUser = await userModel.findOne({ email });

		if (oldUser) {
			res.status(400).json({ success: false, message: "User Already Exists" });
		}

		const hashedPassword = await bcrypt.hash(password, 8);

		const userData = {
			name,
			email,
			password: hashedPassword,
		};

		const newUser = new userModel(userData);
		const user = await newUser.save();

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

		res
			.status(202)
			.json({ success: true, message: { user: user, token: token } });
	} catch (error) {
		console.log(error);
		res.status(400).json({ success: false, message: error.message });
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await userModel.findOne({ email });
		if (!user) {
			return res
				.status(204)
				.json({ success: false, message: "User Not Found" });
		}
		const isMatched = await bcrypt.compare(password, user.password);
		if (isMatched) {
			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
			return res.status(200).json({
				success: true,
				message: "Logged In Successfully",
				token,
			});
		} else {
			return res
				.status(400)
				.json({ success: false, message: "Invalid Credentials" });
		}
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

const getAllUsers = async (req, res) => {
	try {
		const users = await userModel.find({}, { __v: false, password: false });
		res.status(200).json({ success: true, data: [users] });
	} catch (error) {
		console.log(error);
		res.status(400).json({ success: false, message: error.message });
	}
};

const getSingleUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await userModel.findById(userId, {
			__v: false,
			password: false,
		});
		res.status(200).json({ success: true, user });
	} catch (error) {
		console.log(error);
		res.status(400).json({ success: false, message: error.message });
	}
};

module.exports = {
	getAllUsers,
	register,
	login,
	getSingleUser,
};
