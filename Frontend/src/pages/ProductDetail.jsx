import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleProductDetail from "../components/SingleProductDetail";
import SingleProductUpdate from "../components/SingleProductUpdate";

const ProductDetail = () => {
  const isAdmin = useSelector(
    (state) => state.users?.currentUser?.isAdmin || false
  );
  const { id } = useParams();
  const products = useSelector((state) => state.products?.products || false);

  const selectedProduct = products?.find((product) => product.id === id);
  console.log(selectedProduct);

  return (
    <div className="w-screen p-4 flex justify-between gap-5">
      <SingleProductDetail product={selectedProduct} />
      {isAdmin && <SingleProductUpdate product={selectedProduct} />}
    </div>
  );
};

export default ProductDetail;
