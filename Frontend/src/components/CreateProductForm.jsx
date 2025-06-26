import React from 'react'

const CreateProductForm = () => {
  return (
     <form
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">Create Product</h2>

      <input
        type="text"
        name="title"
        placeholder="Product Title"
        className="w-full border border-gray-300 p-2 rounded-lg"
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        className="w-full border border-gray-300 p-2 rounded-lg"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        className="w-full border border-gray-300 p-2 rounded-lg resize-none"
        rows="4"
        required
      />

      <select
        name="category"
        className="w-full border border-gray-300 p-2 rounded-lg"
        required
      >
        <option value="">Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
        <option value="others">Others</option>
      </select>

      <input
        type="file"
        name="image"
        accept="image/*"
        className="w-full"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  )
}

export default CreateProductForm