import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./home.css";
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

  const products = [
    { id: 1, name: "Urban edge men's tee", price: "$49.00 USD", category: "Men", frontImg: "../../src/assets/male01_front.jpg", hoverImg: "../../src/assets/male01_hover.jpg" },
    { id: 2, name: "Retro revival t-shirt", price: "$105.49 USD", category: "Women", frontImg: "../../src/assets/female01_front.jpg", hoverImg: "../../src/assets/female01_hover.jpg" },
    { id: 3, name: "Adventure seeker tee", price: "$80.49 USD", discount: "$99.99 USD", category: "Men", frontImg: "../../src/assets/male02_front.jpg", hoverImg: "../../src/assets/male02_hover.jpg" },
    { id: 4, name: "Classic comfort crewneck", price: "$49.00 USD", category: "Women", frontImg: "../../src/assets/female02_front.jpg", hoverImg: "../../src/assets/female02_hover.jpg" },
    { id: 5, name: "Athletic performance tee", price: "$79.49 USD", discount: "$105.49 USD", category: "Men", frontImg: "../../src/assets/male03_front.jpg", hoverImg: "../../src/assets/male03_hover.jpg" },
    { id: 6, name: "Weekend warrior t-shirt", price: "$40.00 USD", category: "Men", frontImg: "../../src/assets/male04_front.jpg", hoverImg: "../../src/assets/male04_hover.jpg" },
    { id: 7, name: "Vintage vibes graphic tee", price: "$47.00 USD", discount: "$60.00 USD", category: "Men", frontImg: "../../src/assets/male05_front.jpg", hoverImg: "../../src/assets/male05_hover.jpg" },
    { id: 8, name: "Romantic ruffle tee", price: "$35.49 USD", category: "Women", frontImg: "../../src/assets/female03_front.jpg", hoverImg: "../../src/assets/female03_hover.jpg" },
  ];
  const reviews = {
    Artistry: "Love the quality and style of the clothes I ordered from Artistry! The shipping was super fast too. Definitely my go-to for trendy fashion finds!",
    Dexign: "I've never been disappointed with my purchases from this fashion website. The clothes are not only stylish but also made of high-quality materials. Highly recommended!",
    Emblem: "Amazing experience shopping here! The variety of styles is impressive, and the customer service is top-notch. Will definitely be coming back for more",
    Grapherz: "I'm always on the lookout for unique pieces, and this website delivers every time. From casual wear to formal attire, they have it all.",
  };

  return (
    <div className={`page-container ${visible ? "visible" : ""}`}>
      {/* Hero Section {1} */}
      <section className="hero-section d-flex align-items-center text-center text-white position-relative">
        <div className="w-100 bg-image"></div>
        <div className="container position-absolute top-50 start-50 translate-middle text-dark">
          <h2 className="display-3 mb-3 fw-medium">
            The hidden gems in <br /> fashion trends
          </h2>
          <p className="mb-4">
            Step into the realm of unparalleled style <br /> 
            with our unbeatable t-shirt trendsetter of today.
          </p>
          <div> 
            <a href="#" className="btn btn-outline-dark m-2 btn-custom">Shop Women</a>
            <a href="#" className="btn btn-outline-dark m-2 btn-custom">Shop Men</a>
          </div>
        </div>
      </section>

      {/* Products Section {2} */}
      <section className="container py-5 products-section">
        <h2 className="mb-4">Recent Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-6 col-sm-12 mb-3 fadeInUp-section">
              <div className="card shadow-sm border-0 card-custom h-100 d-flex flex-column">
                <span className="badge badge-custom">{product.category}</span>
                <img
                  src={product.frontImg}
                  className="card-img-top card-img-hover"
                  alt={product.name}
                  {...(!isMobile && {
                    onMouseEnter: (e) => (e.target.src = product.hoverImg),
                    onMouseLeave: (e) => (e.target.src = product.frontImg),
                  })}
                />
                <div className="card-body card-body-custom d-flex flex-column justify-content-between flex-grow-1">
                  <h6 className="card-title card-title-custom text-truncate m-0">
                    {product.name}
                  </h6>
                  <div className="card-price-container">
                    <span className="card-price">{product.price}</span>
                    {product.discount && <span className="card-discount">{product.discount}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Icons Section {3} */}
      <section className="container my-5">
        <div className="text-center mb-4">
          <p key={activeBrand} className="text-muted review-text">
            {reviews[activeBrand]}
          </p>
          <div className="stars-rating">
            <img src="../../src/assets/stars-rating.svg" alt="Star Icon" />
          </div>
        </div>
        <div className="container my-4">
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
      <section className="container my-5">
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
            <div className="mb-3 text-start">
              <h2 className="fw-semibold">Shop by Category</h2>
              <button className="btn btn-outline-dark m-2 btn-custom">View All Products</button>
            </div>
            <div className="row g-3 flex-grow-1 align-items-end">
              {[
                "../../src/assets/shopCategory_female.jpg",
                "../../src/assets/shopCategory_kid.jpg"
              ].map((category, index) => (
                <div className="col-md-6 col-6" key={index}>
                  <div className="card border-0 shadow-sm w-100 position-relative">
                    <img
                      src={category}
                      className="card-img-top object-fit-cover"
                      alt="Category"
                    />
                    <div className="category-name">{index === 0 ? "Women" : "Kid"}</div>
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
