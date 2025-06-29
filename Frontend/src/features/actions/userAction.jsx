import axios from "../../utils/AxiosConfig";
import { toast } from "react-toastify";
import { loadUser, clearUser } from "../slices/userSlice";
import { Navigate } from "react-router-dom";

export const asyncRegisterUser = (user) => async () => {
  try {
    const { data } = await axios.post("/users", user); 
    toast.success("User registered successfully!");
    console.log(data);
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
  }
};
export const asyncLoginUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/users?username=${user.username}&password=${user.password}`
    );
    
    if (data && data.length > 0) {
      dispatch(loadUser(data[0])); // ✅ Correct: load the found user
      localStorage.setItem("userCredential", JSON.stringify(data[0]));
      return true;
    } else {
      toast.error("Invalid credentials");
      return false;
    }
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
  }
};
export const asyncLogoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("userCredential");
    dispatch(clearUser());
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
  }
};
export const asyncGetCurrentUser = () => async (dispatch) => {
  try {
    const currentUser = JSON.parse(localStorage.getItem("userCredential"));
    if (currentUser) dispatch(loadUser(currentUser));
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
  }
};

export const asyncUpdateUser = (user) => async (dispatch) => {
  try {
  const { data } = await axios.patch(`/users/${user.id}`, user);
  dispatch(asyncLoginUser(data)); 
  } catch (error) {
    toast.error(error.message || "Failed to update user.");
    console.error(error);
  }
};
export const asyncDeleteUser = (id) => async (dispatch) => {
  try {
  await axios.delete(`/users/${id}`);
  dispatch(asyncLogoutUser());
    return true;
  } catch (error) {
    toast.error(error.message || "Failed to delete product.");
    console.error(error);
    return false;
  }
};