import React, { useContext } from "react";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const NotFound = () => {
	const navigate = useNavigate();
	const { token } = useContext(ShopContext);
	return (
		<div
			className={`${styles.notFoundContainer} d-flex align-items-center justify-content-center flex-column my-5`}
		>
			<h1>{token ? "404" : "401"}</h1>
			<h4>{token ? "Page Not Found" : "Login To Use Our Features"}</h4>
			<p>
				{token
					? "The page you are looking for doesn't exist"
					: "Click On The Following Button To Login"}
			</p>
			<div className="d-flex gap-2 align-items-center">
				{token ? (
					<>
						<button
							onClick={() => {
								navigate("/");
								scrollTo(0, 0);
							}}
							className={`btn btn-sm btn-dark mt-3 ${styles.error_button}`}
						>
							Back To Home
						</button>
						<button
							onClick={() => {
								navigate("/Shop-All");
								scrollTo(0, 0);
							}}
							className={`btn btn-sm btn-dark mt-3 ${styles.error_button}`}
						>
							View Our Products
						</button>
					</>
				) : (
					<>
						<button
							onClick={() => {
								navigate("/login");
								scrollTo(0, 0);
							}}
							className={`btn btn-sm btn-dark mt-3 ${styles.error_button}`}
						>
							Login
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default NotFound;
