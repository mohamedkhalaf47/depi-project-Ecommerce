import React, { useEffect, useState } from "react";
import "./home.css";
import { recent_products,reviews } from "../../assets/recent_products";
import { Link } from "react-router-dom";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeBrand, setActiveBrand] = useState("Artistry");
  
  useEffect(() => {
    // Run the effect of appearing when the page loads
    setTimeout(() => {
      setVisible(true);
    }, 100);

    // Monitor the elements that appear on hover
    const elements = document.querySelectorAll(".fadeInUp-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeInUp-section-visible");
        }
      });
    });

    elements.forEach((element) => observer.observe(element));

    // Update phone status based on screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);

    // Clean the observer and remove the resize listener when unmounting
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`page-container p-5 ${visible ? "visible" : ""}`}>
      {/* Hero Section {1} */}
      <section className="hero-section d-flex align-items-center text-center text-white position-relative">
        <div className="w-100 bg-image"></div>
        <div className="container-fluid position-absolute top-50 start-50 translate-middle text-dark">
          <h2 className="display-3 mb-3 fw-medium text-center">
            The hidden gems in <br /> fashion trends
          </h2>
          <p className="mb-4">
            Step into the realm of unparalleled style <br />
            with our unbeatable t-shirt trendsetter of today.
          </p>
          <div>
            <Link to={`/shop-all`} className="btn btn-outline-dark m-2 btn-custom">
              Shop Women
            </Link>
            <Link to={`/shop-all`} className="btn btn-outline-dark m-2 btn-custom">
              Shop Men
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section {2} */}
      <section className="container-fluid py-5 products-section">
        <h2 className="mb-4 text-start fs-2">Recent Products</h2>
        <div className="row">
          {recent_products.map((product) => (
            <div
              key={product.id}
              className="col-lg-3 col-md-4 col-6 col-sm-12 mb-3 fadeInUp-section"
            >
              <div className="card shadow-sm border-0 card-custom h-100 d-flex flex-column">
                <span className="badge badge-custom">{product.category}</span>
                <Link to={`product/${product.name}`}>
                  <img
                    src={product.frontImg}
                    className="card-img-top card-img-hover"
                    alt={product.name}
                    {...(!isMobile && {
                      onMouseEnter: (e) => (e.target.src = product.hoverImg),
                      onMouseLeave: (e) => (e.target.src = product.frontImg),
                    })}
                  />
                </Link>
                <div className="card-body card-body-custom d-flex flex-column justify-content-between flex-grow-1">
                  <h6 className="card-title card-title-custom text-truncate m-0">
                    {product.name}
                  </h6>
                  <div className="card-price-container">
                    <span className="card-price">{product.price}</span>
                    {product.discount && (
                      <span className="card-discount">{product.discount}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Icons Section {3} */}
      <section className="container-fluid my-5">
        <div className="text-center mb-4">
          <p key={activeBrand} className="text-muted review-text">
            {reviews[activeBrand]}
          </p>
          <div className="stars-rating">
            <img src="../../src/assets/stars-rating.svg" alt="Star Icon" />
          </div>
        </div>
        <div className="container-fluid my-4">
          <div className="d-flex justify-content-center align-items-center gap-5">
            {["Artistry", "Dexign", "Emblem", "Grapherz"].map((brand) => (
              <img
                key={brand}
                src={`../../src/assets/${brand.toLowerCase()}.svg`}
                alt={brand}
                className={`icon ${activeBrand === brand ? "active" : ""}`}
                onClick={() => setActiveBrand(brand)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Category Section {4} */}
      <section className="container-fluid my-5">
        <div className="row g-4">
          <div className="col-md-5 order-md-1 order-2">
            <div className="card border-0 shadow-sm h-100 position-relative">
              <img
                src="../../src/assets/shopCategory_male.jpg"
                className="card-img-top object-fit-cover"
                alt="Category"
              />
              <div className="category-name">Men</div>
            </div>
          </div>
          <div className="col-md-7 d-flex flex-column order-md-2 order-1">
            <div className="mb-3 text-start align-items-start">
              <h2 className="fw-semibold text-start fs-2">Shop by Category</h2>
              <Link to={'shop-all'} className="btn btn-outline-dark m-2 p-2 btn-custom">
                View All Products
              </Link>
            </div>
            <div className="row g-3 flex-grow-1 align-items-end">
              {[
                "../../src/assets/shopCategory_female.jpg",
                "../../src/assets/shopCategory_kid.jpg",
              ].map((category, index) => (
                <div className="col-md-6 col-6" key={index}>
                  <div className="card border-0 shadow-sm w-100 position-relative">
                    <img
                      src={category}
                      className="card-img-top object-fit-cover"
                      alt="Category"
                    />
                    <div className="category-name">
                      {index === 0 ? "Women" : "Kid"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
