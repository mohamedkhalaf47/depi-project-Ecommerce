import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

const NotFound = ({code, title, description,button}) => {
	const navigate = useNavigate();
	return (
		<div
			className={`${styles.notFoundContainer} d-flex align-items-center justify-content-center flex-column my-5`}
		>
			<h1>{code}</h1>
			<h4>{title}</h4>
			<p>{description}</p>
			<div className="d-flex gap-2 align-items-center">
				{button ? (
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
