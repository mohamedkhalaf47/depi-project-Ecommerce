import React from "react";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className={`${styles.notFoundContainer} d-flex align-items-center justify-content-center flex-column my-5`}>
			<h1>404</h1>
			<h4>Page Not Found</h4>
			<p>The page you are looking for doesn't exist</p>
			<div className="d-flex gap-2 align-items-center">
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
			</div>
		</div>
	);
};

export default NotFound;
