import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { getCartAmount } from "../../features/cart/cartSlice";
import { ShopContext } from "../../Context/ShopContext";

const CartTotal = () => {
	const { currency } = useContext(ShopContext);
	const totalAmount = useSelector(getCartAmount);

	return (
		<div className="w-100">
			<div className="fs-2 mt-3">
				<p>Cart</p>
				<p>Total</p>
			</div>
			<div className="d-flex flex-column gap-1 mt-2 fs-4">
				<div className="d-flex justify-content-between">
					<p>SubTotal</p>
					<p>
						{currency}
						{totalAmount}
					</p>
				</div>
				<hr />
				<div className="d-flex justify-content-between">
					<p>Shipping Fee</p>
					<p>{currency}0 USD</p>
				</div>
				<hr />
				<div className="d-flex justify-content-between">
					<p>Total</p>
					<p>{totalAmount === 0 ? "For Free" : `${currency}${totalAmount}`}</p>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
