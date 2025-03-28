import React from 'react'
// import styles from "./productDisplay.module.css"

const ProductDisplay = ({ product }) => {
  console.log(product);
  return (
    <div>{product.name}</div>
  )
}

export default ProductDisplay