import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShopAll.css";

const ShopAll = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    { id: 9, name: "New arrival tee", price: "$55.00 USD", category: "Women", frontImg: "../../src/assets/female04_front.jpg", hoverImg: "../../src/assets/female04_hover.jpg" },
    { id: 10, name: "Casual summer tee", price: "$60.00 USD", category: "Men", frontImg: "../../src/assets/male06_front.jpg", hoverImg: "../../src/assets/male06_hover.jpg" },
    { id: 11, name: "Whimsical wonderland tee", price: "$105.00 USD", discount: "$115.49 USD", category: "Kids", frontImg: "../../src/assets/kid01_front.jpg", hoverImg: "../../src/assets/kid01_hover.jpg" },
    { id: 12, name: "Magical moments kid's tee", price: "$99.00 USD", discount: "$110.00 USD", category: "Kids", frontImg: "../../src/assets/kid02_front.jpg", hoverImg: "../../src/assets/kid02_hover.jpg" },
  ];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const displayedProducts = page === 1 ? filteredProducts.slice(0, 8) : filteredProducts.slice(8, 12);

  return (
    <div className="shop-container container py-5">
      <section className="text-center mb-5">
        <div className="head rounded-2">
          <h2 className="fw-bold p-3">Shop All</h2>
          <div className="d-flex justify-content-center gap-3 mt-3">
            {["All", "Men", "Women", "Kids"].map((category) => (
              <button
                key={category}
                className={`btn ${selectedCategory === category ? "btn-dark" : "btn-outline-dark"}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setPage(1); 
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="row g-4 fade-in" key={page}>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-6">
              <div className="card shadow-sm border-0 h-100">
                <span className="badge bg-secondary position-absolute m-2">{product.category}</span>
                <img
                  src={product.frontImg}
                  className="card-img-top"
                  alt={product.name}
                  {...(!isMobile && {
                    onMouseEnter: (e) => (e.target.src = product.hoverImg),
                    onMouseLeave: (e) => (e.target.src = product.frontImg),
                  })}
                />
                <div className="card-body text-center">
                  <h6 className="card-title">{product.name}</h6>
                  <p className="card-text text-muted">{product.price}</p>
                  {product.discount && <p className="text-danger"><del>{product.discount}</del></p>}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products available</p>
        )}
      </section>

      {selectedCategory === "All" && (
        <div className="pagination-controls d-flex justify-content-end align-items-center mt-5">
          {page === 1 ? (
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => {
                setPage(2);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Next <i className="fas fa-arrow-right ms-2"></i>
            </button>
          ) : (
<button
  className="btn btn-outline-dark px-4 py-2"
  onClick={() => {
    setPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }}
>
  Previous <i className="fas fa-arrow-left ms-2"></i>
</button>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopAll;
