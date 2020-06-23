import React from "react";
import Master from "../Component/Layouts/Master";
import ProductList from "../Component/product/ProductList";

const ProductContainer = (props) => {
  return (
    <Master>
      <ProductList />
    </Master>
  );
};
export default ProductContainer;
