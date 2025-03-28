import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/trendzy-logo.svg";
import cart_icon from "../../assets/cart-icon.svg";
import search_icon from "../../assets/search-icon.svg";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);

  const pagesHandler = () => {
    setActive("pages");
    setMenu(!menu);
  };

  const toggleMenu = () => {
    setMenu(!menu);
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
                onClick={() => setActive("home")}
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${active === "about" ? "active" : ""}`}
                onClick={() => setActive("about")}
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
                  aria-expanded={menu ? "true" : "false"}
                >
                  Pages
                </span>
                <ul className={`dropdown-menu ${menu ? "show" : ""}`}>
                  <li
                    onClick={() => setActive("home")}
                    className={active === "home" ? "activeLine" : ""}
                  >
                    <Link to="/" className="dropdown-item">
                      Home
                    </Link>
                  </li>
                  <li
                    onClick={() => setActive("Shop All")}
                    className={active === "Shop All" ? "activeLine" : ""}
                  >
                    <Link to="/shop-all" className="dropdown-item">
                      Shop All
                    </Link>
                  </li>
                  <li
                    onClick={() => setActive("about")}
                    className={active === "about" ? "activeLine" : ""}
                  >
                    <Link to="/about" className="dropdown-item">
                      About
                    </Link>
                  </li>
                  <li
                    onClick={() => setActive("blog")}
                    className={active === "blog" ? "activeLine" : ""}
                  >
                    <Link to="/blogs" className="dropdown-item">
                      Blog
                    </Link>
                  </li>
                  <li
                    onClick={() => setActive("contact")}
                    className={active === "contact" ? "activeLine" : ""}
                  >
                    <Link to="/contact" className="dropdown-item">
                      Contact
                    </Link>
                  </li>
                  <li
                    onClick={() => setActive("FAQs")}
                    className={active === "FAQs" ? "activeLine" : ""}
                  >
                    <Link to="/faqs" className="dropdown-item">
                      FAQs
                    </Link>
                  </li>
                  <li
                    onClick={() => setActive("privacy policy")}
                    className={active === "privacy policy" ? "activeLine" : ""}
                  >
                    <Link to="/privacy-policy" className="dropdown-item">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="nav-search-cart d-flex align-items-center">
              <img src={search_icon} alt="search icon" />
              <img src={cart_icon} alt="cart icon" />
              <div className="cart-count">0</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
