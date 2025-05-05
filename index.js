const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const userRouter = require("./routes/userRouter");
const connectDatabase = require("./config/connectDB");

// App Config
const app = express();
const PORT = process.env.PORT;
connectDatabase();

// App Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Endpoint
app.use("/api/user", userRouter);

// Starting App
app.listen(PORT, () => {
	console.log("Server Started");
});
