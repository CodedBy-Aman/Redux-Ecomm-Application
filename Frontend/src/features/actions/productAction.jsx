import axios from "../../utils/AxiosConfig";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { loadProduct } from "../slices/productSlice";

export const asyncCreateProduct = (product) => async () => {
  try {
   await axios.post("/products", product); 
    toast.success("Product created !");
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
  }
};
export const asyncLoadProduct = () => async (dispatch) => {
  try {
    const { product } = await axios.get("/products"); 
    dispatch(loadProduct(product))
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
  }
};