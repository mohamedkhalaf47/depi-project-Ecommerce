import { Link, useLocation } from "react-router-dom";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import dribbble from "../../assets/dribbble.svg";
import twitter from "../../assets/twitter.svg";
import logo from "../../assets/trendzy-light.svg";
import "./footer.css";

const Footer = () => {
	const location = useLocation();
	return (
		<footer>
			<div className="footer-container">
				<div className="container-wrap">
					<div className="pages-links">
						<h6>Pages</h6>
						<ul>
							<li>
								<Link
									to={"/"}
									style={{ textDecoration: "none", color: "#fff" }}
									className={`${
										location.pathname === "/" ? "text-decoration-underline" : ""
									}`}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to={"about"}
									style={{ textDecoration: "none", color: "#fff" }}
									className={`${
										location.pathname === "/about"
											? "text-decoration-underline"
											: ""
									}`}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to={"Shop-All"}
									style={{ textDecoration: "none", color: "#fff" }}
									className={`${
										location.pathname === "/Shop-All"
											? "text-decoration-underline"
											: ""
									}`}
								>
									Shop All
								</Link>
							</li>
							<li>
								<Link
									to={"blogs"}
									style={{ textDecoration: "none", color: "#fff" }}
									className={`${
										location.pathname === "/blogs"
											? "text-decoration-underline"
											: ""
									}`}
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to={"contact"}
									style={{ textDecoration: "none", color: "#fff" }}
									className={`${
										location.pathname === "/contact"
											? "text-decoration-underline"
											: ""
									}`}
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									to={"faqs"}
									style={{ textDecoration: "none", color: "#fff" }}
									className={`${
										location.pathname === "/faqs"
											? "text-decoration-underline"
											: ""
									}`}
								>
									FAQs
								</Link>
							</li>
							<li>
								<Link
									to={"privacy-policy"}
									style={{ textDecoration: "none", color: "#fff" }}
									className={`${
										location.pathname === "/privacy-policy"
											? "text-decoration-underline"
											: ""
									}`}
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
					<div className="contact-links">
						<h6>Contact</h6>
						<p>example@gmail.com</p>
						<div className="social-links">
							<div className="social-icon">
								<img src={instagram} alt="instagram" />
							</div>
							<div className="social-icon">
								<img src={dribbble} alt="dribbble" />
							</div>
							<div className="social-icon">
								<img src={facebook} alt="facebook" />
							</div>
							<div className="social-icon">
								<img src={twitter} alt="twitter" />
							</div>
						</div>
					</div>
					<div className="logo-input">
						<img src={logo} alt="logo" />
						<p>Subscribe and get 15% off your first order.</p>
						<form className="input">
							<div>
								<input
									type="email"
									placeholder="Enter your email"
									className=" border-1 border-warning"
								/>
								<button>Subscribe</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
