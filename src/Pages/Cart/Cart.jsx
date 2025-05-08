import { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShopContext } from "../../Context/ShopContext";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import styles from "./cart.module.css";
import CartTotal from "../../Components/CartTotal/CartTotal";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/empty-cart.svg";
import NotFound from "../NotFound/NotFound";

const Cart = () => {
	const { products, currency, token } = useContext(ShopContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();
	const [cartData, setCartData] = useState([]);

	useEffect(() => {
		const tempData = [];
		for (const productId in cartItems) {
			if (cartItems[productId] > 0) {
				tempData.push({
					id: productId,
					quantity: cartItems[productId],
				});
			}
		}
		setCartData(tempData);
	}, [cartItems]);

	return token ? (
		<div className={styles.cartContainer}>
			<div className={styles.cartTitle}>Your Cart</div>

			<div className={styles.itemsContainer}>
				{cartData.length > 0 ? (
					cartData.map((item, index) => {
						const singleProduct = products.find(
							(product) => product.id.toString() === item.id.toString()
						);
						return (
							<div key={index} className={styles.cartTable}>
								<div className={styles.cartItem}>
									<img
										className={styles.itemImage}
										src={singleProduct.image}
										alt={singleProduct.name}
									/>
									<p className={styles.itemName}>{singleProduct.name}</p>
									<div>
										<div className={styles.itemDataContainer}>
											<p>
												{currency}
												{singleProduct.price} USD
											</p>
											<p className={styles.itemCount}>{item.quantity}</p>
										</div>
									</div>
									<div className="d-flex gap-2 flex-column">
										<button
											className="p-1 rounded-2 bg-black text-white"
											onClick={() =>
												dispatch(
													addToCart({
														productId: singleProduct.id.toString(),
														inputValue: 1,
													})
												)
											}
										>
											Add Item
										</button>
										<button
											className="p-1 rounded-2 bg-black text-white"
											onClick={() =>
												dispatch(
													removeFromCart({
														productId: singleProduct.id.toString(),
														inputValue: 1,
													})
												)
											}
										>
											Remove Item
										</button>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<div className="d-flex align-items-center justify-content-center w-100 h-100 flex-column">
						<img
							src={emptyCart}
							className={styles.cartImage}
							alt="Empty Cart"
						/>
						<p>No Products Inside Your Cart</p>
						<Link
							to={"/Shop-All"}
							className="text-white text-decoration-none bg-black px-2 py-1 rounded-2"
						>
							Start Shopping
						</Link>
					</div>
				)}
			</div>

			<div className="d-flex justify-content-start my-5 border-top">
				<div className={styles.cartTotalContainer}>
					<CartTotal />
					{cartData.length > 0 && (
						<div className="w-100 text-start">
							<button className="bg-black text-white fs-5 my-2 px-2 py-1 rounded-2">
								Proceed To Checkout
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	):(<NotFound/>);
};

export default Cart;
