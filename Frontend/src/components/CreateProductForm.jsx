import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncCreateProduct } from "../features/actions/productAction";
import { useNavigate } from "react-router-dom";

const CreateProductForm = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProductHandler = (product) => {
    product.id = nanoid();
    console.log(product);
    dispatch(asyncCreateProduct(product));
    navigate("/products");
    reset();
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">Create Product</h2>

      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Product Title
        </label>
        <input
          {...register("title", { required: true })}
          type="text"
          name="title"
          id="title"
          placeholder="Enter product title"
          className="w-full border border-gray-300 p-2 rounded-lg"
        />
      </div>

      {/* Price */}
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Price
        </label>
        <input
          {...register("price", { required: true })}
          type="number"
          name="price"
          id="price"
          placeholder="Enter price"
          className="w-full border border-gray-300 p-2 rounded-lg"
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          {...register("description", { required: true })}
          name="description"
          id="description"
          placeholder="Write a brief description"
          className="w-full border border-gray-300 p-2 rounded-lg resize-none"
          rows="4"
        />
      </div>

      {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Category
        </label>
        <select
          {...register("category", { required: true })}
          name="category"
          id="category"
          className="w-full border border-gray-300 p-2 rounded-lg"
        >
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="others">Others</option>
        </select>
      </div>

      {/* Image URL */}
      <div>
        <label
          htmlFor="imageUrl"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Image URL
        </label>
        <input
          {...register("imageUrl", { required: true })}
          type="url"
          name="imageUrl"
          id="imageUrl"
          placeholder="https://example.com/image.jpg"
          className="w-full border border-gray-300 p-2 rounded-lg"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit(createProductHandler)}
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateProductForm;
