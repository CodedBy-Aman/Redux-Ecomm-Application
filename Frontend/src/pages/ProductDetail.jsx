import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import SingleProductDetail from '../components/SingleProductDetail';

const ProductDetail = () => {
const {id} = useParams();
const products = useSelector((state) => state.products?.products|| false);

const selectedProduct = products?.find((product) => product.id === id);
console.log(selectedProduct);


  return (
    <div className="p-4">
    <SingleProductDetail product={selectedProduct}/>
    </div>
  )
}

export default ProductDetail