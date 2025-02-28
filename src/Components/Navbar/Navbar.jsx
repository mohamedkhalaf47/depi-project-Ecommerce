import "./navbar.css";
import logo from "../../assets/trendzy-logo.svg";
import cart_icon from "../../assets/cart-icon.svg";
import search_icon from "../../assets/search-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);

  const pagesHandler = () => {
    setActive("pages");
    setMenu(!menu);
  };

  return (
    <header>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => setActive("home")}
          className={active === "home" ? "active" : ""}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            Home
          </Link>
        </li>
        <li
          onClick={() => setActive("about")}
          className={active === "about" ? "active" : ""}
        >
          <Link to="/about" style={{ textDecoration: "none", color: "#000" }}>
            About
          </Link>
        </li>
        <li onClick={pagesHandler}>
          Pages
          {menu && (
            <ul className="mega-menu">
              <li
                onClick={() => setActive("home")}
                className={active === "home" ? "activeLine" : ""}
              >
                <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
                  Home
                </Link>
              </li>
              <li
                onClick={() => setActive("Shop All")}
                className={active === "Shop All" ? "activeLine" : ""}
              >
                <Link
                  to="/shop-all"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Shop All
                </Link>
              </li>
              <li
                onClick={() => setActive("about")}
                className={active === "about" ? "activeLine" : ""}
              >
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  About
                </Link>
              </li>
              <li
                onClick={() => setActive("blog")}
                className={active === "blog" ? "activeLine" : ""}
              >
                <Link
                  to="/blog"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Blog
                </Link>
              </li>
              <li
                onClick={() => setActive("contact")}
                className={active === "contact" ? "activeLine" : ""}
              >
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Contact
                </Link>
              </li>
              <li
                onClick={() => setActive("FAQs")}
                className={active === "FAQs" ? "activeLine" : ""}
              >
                <Link
                  to="/faqs"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  FAQs
                </Link>
              </li>
              <li
                onClick={() => setActive("privacy policy")}
                className={active === "privacy policy" ? "activeLine" : ""}
              >
                <Link
                  to="/privacy-policy"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className="nav-search-cart">
        <img src={search_icon} alt="search icon" />
        <img src={cart_icon} alt="cart icon" />
        <div className="cart-count">0</div>
      </div>
    </header>
  );
};

export default Navbar;