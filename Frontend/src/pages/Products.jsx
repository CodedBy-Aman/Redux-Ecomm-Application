import React from 'react'
import { useSelector } from 'react-redux';

const Products = () => {

     const products = useSelector((state) => state.products?.products|| false);
     
  return (
       <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="h-50  object-cover rounded-md mb-3 mx-auto"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-700 text-sm line-clamp-2">{product.description}</p>
              <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>
              <p className="text-xs text-gray-500 mt-1">{product.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products