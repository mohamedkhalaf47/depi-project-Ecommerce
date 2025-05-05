import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";
import styles from "../../Components/ProductDisplay/ProductDisplay.module.css";
import related_products from "../../assets/related_products";
import male1 from "../../assets/additional_male1.jpg";
import male2 from "../../assets/additional_male2.jpg";
import female1 from "../../assets/additional_female1.jpg";
import female2 from "../../assets/additional_female2.jpg";
import kid1 from "../../assets/additional_kid1.jpg";
import kid2 from "../../assets/additional_kid2.jpg";
import { ShopContext } from "../../Context/ShopContext";

const categoryImages = {
	Men: [male1, male2],
	Women: [female1, female2],
	Kids: [kid1, kid2],
};

const ProductDisplay = ({ product }) => {
	const [value, setValue] = useState(1);
	const additionalImages = categoryImages[product.category] || [];
	const [isMobile, setIsMobile] = useState(false);
	const { token } = useContext(ShopContext);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 992);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [product]);

	return (
		<>
			<section className="product_section">
				<div className="container py-5">
					<div className="row g-4">
						<div className="col-lg-6 col-md-12">
							<div className={styles.stickyImageColumn}>
								<div className="row g-5">
									<div className="col-6">
										<img
											src={product.image}
											alt={`${product.name} Front`}
											className={`${styles.productImage} img-fluid rounded-3`}
										/>
									</div>
									<div className="col-6">
										<img
											src={product.hover_image}
											alt={`${product.name} Hover`}
											className={`${styles.productImage} img-fluid rounded-3`}
										/>
									</div>
									{additionalImages.map((imgSrc, idx) => (
										<div className="col-6" key={idx}>
											<img
												src={imgSrc}
												alt={`${product.category} ${idx + 1}`}
												className={`${styles.productImage} img-fluid rounded-3`}
											/>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12 d-flex flex-column justify-content-start">
							<Link to={`/category/${product.category}`}>
								<span className={`badge badge_custom ${styles.badge_custom}`}>
									{product.category}
								</span>
							</Link>
							<h2 className={`fw-bold ${styles.productTitle}`}>
								{product.name}
							</h2>
							<h3 className={`fw-semibold ${styles.productPrice}`}>
								${product.price} USD
							</h3>
							<p className={styles.productDescription}>{product.description}</p>

							<div className={styles.addToCartSection}>
								<span className={styles.Quantity}>Quantity</span>
								<input
									type="number"
									value={value}
									onChange={(e) => setValue(Number(e.target.value))}
									min={1}
									max={10}
									className={styles.numberInput}
								/>
								{token ? (
									<button
										className={`btn btn-sm btn-dark mt-3 ${styles.addToCartBtn}`}
										onClick={() =>
											dispatch(
												addToCart({
													productId: product.id.toString(),
													inputValue: value,
												})
											)
										}
									>
										Add to Cart
									</button>
								) : (
									<button
										disabled
										className={`btn btn-sm btn-dark mt-3 ${styles.addToCartBtn}`}
									>
										Login To Purchase Product
									</button>
								)}
							</div>

							<div className={styles.productDetailsContainer}>
								<h3 className={styles.productDetailsTitle}>Product details</h3>
								<div className={styles.productDetailItem}>
									<h5>Material</h5>
									<p>Cotton</p>
								</div>
								<hr className={styles.separator} />
								<div className={styles.productDetailItem}>
									<h5>Shipping Time</h5>
									<p>3-6 workdays</p>
								</div>
								<hr className={styles.separator} />
								<div className={styles.productDetailItem}>
									<h5>Made In</h5>
									<p>New York</p>
								</div>
								<hr className={styles.separator} />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.shippingSection}>
					<div>
						<img
							src="../../../src/assets/freeShipping_icon-01.svg"
							alt="freeShipping"
						/>
						<h4>Free Shipping</h4>
						<p>
							Perceived end knowledge certainly day sweetness why cordially. Ask
							a quick six seven offer see among.
						</p>
					</div>
					<div>
						<img
							src="../../../src/assets/fastDelivery_icon-02.svg"
							alt="freeShipping"
						/>
						<h4>Fast Delivery</h4>
						<p>
							Parlors waiting so against me no. Wishing calling is warrant
							settled was lucky.
						</p>
					</div>
					<div>
						<img
							src="../../../src/assets/quality_icon-03.svg"
							alt="freeShipping"
						/>
						<h4>100% Quality Guarantee</h4>
						<p>
							Unaffected at ye of compliment alteration to. Place voice no
							arises along to.
						</p>
					</div>
				</div>

				<div className={styles.reviewSection}>
					<h3 className={styles.reviewTitle}>Reviews</h3>
					<p className={styles.reviewText}>
						Read Reviews from our satisfied customers. Share your experience
						with Us by clicking the below button!
					</p>
					<button className={`btn btn-sm ${styles.reviewBtn}`}>
						Submit a review
					</button>
				</div>

				<div className={styles.reviews_container}>
					<div className={styles.review_card}>
						<div className={styles.reviewer_name}>Frances Guerrero</div>

						<div className={styles.title_and_stars}>
							<div className={styles.review_title}>A must-have product</div>
							<div className={styles.stars}>
								<img src="../../../src/assets/stars-rating.svg" alt="4 stars" />
							</div>
						</div>

						<div className={styles.review_text}>
							But in certain circumstances and owing to the claims of duty or
							the obligations of business it will frequently occur that
							pleasures have to be repudiated and annoyances accepted. The wise
							man therefore always
						</div>
					</div>

					<div className={styles.review_card}>
						<div className={styles.reviewer_name}>Larry Lawson</div>

						<div className={styles.title_and_stars}>
							<div className={styles.review_title}>Amazing...loved it</div>
							<div className={styles.stars}>
								<img src="../../../src/assets/stars-rating.svg" alt="4 stars" />
							</div>
						</div>

						<div className={styles.review_text}>
							It uses a dictionary of over 200 Latin words, combined with a
							handful of model sentence structures, to generate Lorem Ipsum
							which looks reasonable. The generated Lorem Ipsum is therefore
							always free from repetition, injected humour, or
							non-characteristic words etc.
						</div>
					</div>

					<div className={styles.review_card}>
						<div className={styles.reviewer_name}>Lori Stevens</div>

						<div className={styles.title_and_stars}>
							<div className={styles.review_title}>Highly recommended!</div>
							<div className={styles.stars}>
								<img src="../../../src/assets/stars-rating.svg" alt="4 stars" />
							</div>
						</div>

						<div className={styles.review_text}>
							The standard chunk of Lorem Ipsum used since the 1500s is
							reproduced below for those interested. Sections 1.10.32 and
							1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
							reproduced in their exact original form.
						</div>
					</div>

					<div className={styles.review_card}>
						<div className={styles.reviewer_name}>Bryan Knight</div>

						<div className={styles.title_and_stars}>
							<div className={styles.review_title}>Wonderful Product</div>
							<div className={styles.stars}>
								<img src="../../../src/assets/stars-rating.svg" alt="4 stars" />
							</div>
						</div>

						<div className={styles.review_text}>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classNameical Latin literature from 45
							BC, making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more.
						</div>
					</div>
				</div>
			</section>
			<section className="container py-5">
				<h2 className="mb-4 text-start fs-2">Related products</h2>
				<div className={`${styles.products_container}`}>
					{related_products.map((product) => (
						<div key={product.id}>
							<div className={`${styles.card} shadow-sm border-0 h-100`}>
								<span className={`badge ${styles.second_badge_custom}`}>
									{product.category}
								</span>

								<img
									src={product.image}
									className={`${styles.card_img_top}`}
									alt={product.name}
									onClick={() => {
										navigate(`/product/${product.name}`);
										scrollTo(0, 0);
									}}
									{...(!isMobile && {
										onMouseEnter: (e) => (e.target.src = product.hover_image),
										onMouseLeave: (e) => (e.target.src = product.image),
									})}
								/>

								<div className="card-body text-start">
									<h6 className="card-title">{product.name}</h6>
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
					))}
				</div>
			</section>
		</>
	);
};

export default ProductDisplay;
