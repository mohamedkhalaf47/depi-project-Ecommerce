import React, { createContext, useState } from "react";
import products from "../assets/all_products";
import blog_details from "../assets/blog";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
	const currency = "$";
	const backendUrl = import.meta.env.VITE_BACKEND_URL;
	const [token, setToken] = useState(
		localStorage.getItem("UserToken")
			? localStorage.getItem("UserToken")
			: false
	);

	const contextValue = {
		products,
		currency,
		blog_details,
		backendUrl,
		token,
		setToken,
	};
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
export default ShopContextProvider;
