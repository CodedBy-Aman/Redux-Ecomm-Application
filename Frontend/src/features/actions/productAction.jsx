import axios from "../../utils/AxiosConfig";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { loadProduct } from "../slices/productSlice";

export const asyncCreateProduct = (product) => async (dispatch) => {
  try {
   await axios.post("/products", product); 
   dispatch(asyncLoadProduct());
    toast.success("Product created !");
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
  }
};
export const asyncLoadProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/products"); 
    
    dispatch(loadProduct(data))
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
  }
};
export const asyncUpdateProduct = (product) => async (dispatch) => {
  try {
  await axios.patch(`/products/${product.id}`, product);
  dispatch(asyncLoadProduct());
    toast.success("Product updated !");
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
  }
};