import { createSlice } from "@reduxjs/toolkit";
import products from "../../assets/all_products";

const loadCartFromStorage = () => {
	const storedCart = localStorage.getItem("cartItems");
	return storedCart ? JSON.parse(storedCart) : {};
};

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: loadCartFromStorage(),
	},
	reducers: {
		addToCart: (state, action) => {
			const { productId, inputValue = 1 } = action.payload;
			const newQuantity = (state.cartItems[productId] || 0) + inputValue;
			if (newQuantity <= 0) {
				delete state.cartItems[productId];
			} else {
				state.cartItems[productId] = newQuantity;
			}
		},
		removeFromCart: (state, action) => {
			const { productId, inputValue = 1 } = action.payload;
			const newQuantity = (state.cartItems[productId] || 0) - inputValue;
			if (newQuantity <= 0) {
				delete state.cartItems[productId];
			} else {
				state.cartItems[productId] = newQuantity;
			}
		},
		clearCart: (state) => {
			state.cartItems = {};
		},
	},
});

export const cartMiddleware = (store) => (next) => (action) => {
	const result = next(action);
	if (
		cartSlice.actions.addToCart.match(action) ||
		cartSlice.actions.removeFromCart.match(action) ||
		cartSlice.actions.clearCart.match(action)
	) {
		const state = store.getState();
		localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
	}
	return result;
};

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const getCartCount = (state) => {
	let totalCount = 0;
	for (const productId in state.cart.cartItems) {
		if (state.cart.cartItems[productId] > 0) {
			totalCount += state.cart.cartItems[productId];
		}
	}
	return totalCount;
};

export const getCartAmount = (state) => {
	let totalAmount = 0;
	for (const productId in state.cart.cartItems) {
		if (state.cart.cartItems[productId] > 0) {
			const productInfo = products.find(
				(product) => product.id.toString() === productId.toString()
			);
			if (productInfo) {
				totalAmount += productInfo.price * state.cart.cartItems[productId];
			}
		}
	}
	return Number.parseFloat(totalAmount).toFixed(2);
};

export default cartSlice.reducer;
