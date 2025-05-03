import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/trendzy-logo.svg";
import cart_icon from "../../assets/cart-icon.svg";
import { useSelector } from "react-redux";
import { getCartCount } from "../../features/cart/cartSlice";

const Navbar = () => {
	const [pagesMenu, setPagesMenu] = useState(false);
	const [active, setActive] = useState("home");
	const [menu, setMenu] = useState(false);
  const cartCount = useSelector(getCartCount);

	const pagesHandler = () => {
		setPagesMenu(!pagesMenu);
	};

	const toggleMenu = () => {
		setMenu(!menu);
	};

	const handleNavItemClick = (item) => {
		setActive(item);
		setMenu(false);
		setPagesMenu(false);
	};

	return (
		<header>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img src={logo} alt="logo" className="nav-logo" />
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						onClick={toggleMenu}
						aria-expanded={menu ? "true" : "false"}
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className={`collapse navbar-collapse ${menu ? "show" : ""}`}>
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li
								className={`nav-item ${active === "home" ? "active" : ""}`}
								onClick={() => handleNavItemClick("home")}
							>
								<Link to="/" className="nav-link">
									Home
								</Link>
							</li>
							<li
								className={`nav-item ${active === "about" ? "active" : ""}`}
								onClick={() => handleNavItemClick("about")}
							>
								<Link to="/about" className="nav-link">
									About
								</Link>
							</li>
							<li className="nav-item dropdown">
								<span
									className="nav-link dropdown-toggle"
									onClick={pagesHandler}
									role="button"
									aria-expanded={pagesMenu ? "true" : "false"}
								>
									Pages
								</span>
								<ul className={`dropdown-menu ${pagesMenu ? "show" : ""}`}>
									<li
										onClick={() => handleNavItemClick("Shop All")}
										className={active === "Shop All" ? "activeLine" : ""}
									>
										<Link to="/Shop-All" className="dropdown-item">
											Shop All
										</Link>
									</li>
									<li
										onClick={() => handleNavItemClick("blog")}
										className={active === "blog" ? "activeLine" : ""}
									>
										<Link to="/blogs" className="dropdown-item">
											Blog
										</Link>
									</li>
									<li
										onClick={() => handleNavItemClick("contact")}
										className={active === "contact" ? "activeLine" : ""}
									>
										<Link to="/contact" className="dropdown-item">
											Contact
										</Link>
									</li>
									<li
										onClick={() => handleNavItemClick("FAQs")}
										className={active === "FAQs" ? "activeLine" : ""}
									>
										<Link to="/faqs" className="dropdown-item">
											FAQs
										</Link>
									</li>
									<li
										onClick={() => handleNavItemClick("privacy policy")}
										className={active === "privacy policy" ? "activeLine" : ""}
									>
										<Link to="/privacy-policy" className="dropdown-item">
											Privacy Policy
										</Link>
									</li>
								</ul>
							</li>
						</ul>

						<Link to={"/cart"}>
							<div className="nav-search-cart d-flex align-items-center">
								<img src={cart_icon} alt="cart icon" />
								<div className="cart-count">{cartCount}</div>
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
