import React, { useContext } from "react";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
// import styles from "./singleProduct.module.css"

const SingleProduct = () => {
  const { products } = useContext(ShopContext);
  const { productName } = useParams();
  const product = products.find((e) => e.name == productName);
  return(
    <ProductDisplay product={product}/>
  );
};

export default SingleProduct;
