const express = require("express");
const {
	register,
	login,
	getAllUsers,
	getSingleUser,
} = require("../controllers/userController");
const authUser = require("../middleware/authUser");

const userRouter = express.Router();

userRouter.post("/register",register);

userRouter.post("/login",login);

userRouter.get("/users",getAllUsers);

userRouter.get("/users/:userId",getSingleUser);

module.exports = userRouter;
