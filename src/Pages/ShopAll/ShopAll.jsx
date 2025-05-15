import React, { useState, useEffect, useContext } from "react";
import products from "../../assets/all_products";
import plusIcon from "../../assets/addtoCartIcon.svg";
import "./ShopAll.css";
import { addToCart } from "../../features/cart/cartSlice";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ShopContext } from "../../Context/ShopContext";

const ShopAll = () => {
	const { category } = useParams();
	const [isMobile, setIsMobile] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(category || "All");
	const [page, setPage] = useState(1);
	const { token } = useContext(ShopContext);
	const dispatch = useDispatch()
	const navigate = useNavigate();

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 992);
		};
		setSelectedCategory(category || "All");
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [category]);

	const filteredProducts =
		selectedCategory === "All"
			? products
			: products.filter((product) => product.category === selectedCategory);

	const displayedProducts =
		page === 1 ? filteredProducts.slice(0, 8) : filteredProducts.slice(8, 12);

	return (
		<div className="shop-container container py-5">
			<section className="text-center mb-5">
				<div className="shop-header rounded-2">
					<h2 className="fw-bold p-3">Shop All</h2>
					<div className="d-flex justify-content-center gap-3 mt-3">
						{["All", "Men", "Women", "Kids"].map((category) => (
							<button
								key={category}
								className={`btn ${
									selectedCategory === category
										? "btn-dark"
										: "btn-outline-dark"
								}`}
								onClick={() => {
									navigate(`/category/${category}`);
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
								<span className="badge badge-custom">{product.category}</span>
								<Link
									to={`/product/${product.name}`}
									onClick={() => scrollTo(0, 0)}
								>
									<img
										src={product.image}
										className="card-img-top"
										alt={product.name}
										{...(!isMobile && {
											onMouseEnter: (e) => (e.target.src = product.hover_image),
											onMouseLeave: (e) => (e.target.src = product.image),
										})}
									/>
								</Link>
								<div className="card-body text-start">
									<div className="d-flex align-items-center justify-content-between">
										<h6 className="card-title">{product.name}</h6>
										{token && <img
											src={plusIcon}
											alt="plus"
											className="plus_icon"
											onClick={() =>
												dispatch(
													addToCart({
														productId: product.id.toString(),
														inputValue: 1,
													})
												)
											}
										/>}
									</div>
									<span className="card-text text-muted">
										${product.price} USD
									</span>
									{product.discount && (
										<span className="text-secondary mx-3">
											<del>${product.discount} USD</del>
										</span>
									)}
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
