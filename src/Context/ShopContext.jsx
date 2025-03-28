import React, { createContext } from "react";
import products from "../assets/all_products";
import blog_details from "../assets/blog";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const contextValue = {
    products,
    blog_details,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
