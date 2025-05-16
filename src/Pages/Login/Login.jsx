import React, { useContext, useEffect, useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
	const [state, setState] = useState("Login");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const { backendUrl, token, setToken } = useContext(ShopContext);

	const onSubmitFn = async (e) => {
		e.preventDefault();

		try {
			if (state === "Sign Up") {
				const { data } = await axios.post(`${backendUrl}/api/user/register`, {
					name,
					email,
					password,
				});
				if (data.success) {
					localStorage.setItem("UserToken", data.token);
					setToken(data.token);
					toast.success("Created Account Successfully");
					setTimeout(() => {
						window.location.reload();
					}, 1000);
				}
			}
			if (state === "Login") {
				const { data } = await axios.post(`${backendUrl}/api/user/login`, {
					email,
					password,
				});
				if (data.success) {
					localStorage.setItem("UserToken", data.token);
					setToken(data.token);
					toast.success("Logged In Successfully");
				}
			}
		} catch (error) {
			console.log(error.message);
			toast.error("Invalid Credentials");
		}
	};

	useEffect(() => {
		if (token) {
			navigate("/");
		}
	}, [token]);

	return (
		<form onSubmit={onSubmitFn} className={styles.form_container}>
			<div className={styles.inputs_container}>
				<p className={styles.form_title}>
					{state === "Sign Up" ? "Create An Account" : "Login"}
				</p>
				{state === "Sign Up" && (
					<div className="w-100">
						<p>Full Name</p>
						<input
							className={styles.input_fill}
							type="text"
							onChange={(e) => setName(e.target.value)}
							value={name}
							required
						/>
					</div>
				)}
				<div className="w-100">
					<p>Email</p>
					<input
						className={styles.input_fill}
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required
					/>
				</div>
				<div className="w-100">
					<p>Password</p>
					<input
						className={styles.input_fill}
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
				</div>
				<button type="submit" className={styles.button_form}>
					{state === "Sign Up" ? "Create Account" : "Login"}
				</button>
				{state === "Sign Up" ? (
					<p>
						Already Have an Account?{" "}
						<span
							className={styles.toggle_form}
							onClick={() => setState("Login")}
						>
							Login Here
						</span>
					</p>
				) : (
					<p>
						Create a New Account?{" "}
						<span
							className={styles.toggle_form}
							onClick={() => setState("Sign Up")}
						>
							Click Here
						</span>
					</p>
				)}
			</div>
		</form>
	);
};

export default Login;
