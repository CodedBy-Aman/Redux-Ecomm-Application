import React from 'react'

const SingleProductDetail = ({product}) => {
 if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return (
    <div className="max-w-[50vw]   mx-auto mt-5 p-3 bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="w-full h-[400px] overflow-hidden rounded-md">
  <img
    src={product.imageUrl}
    alt={product.title}
    className="object-cover"
  />
</div>
      <div>
        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
        <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>

        <p className="text-2xl font-bold text-blue-600 mb-6">₹{product.price}</p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProductDetail