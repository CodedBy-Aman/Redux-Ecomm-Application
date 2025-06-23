import axios from "../../utils/AxiosConfig";
import { toast } from "react-toastify";
import { loadUser, clearUser } from "../slices/userSlice";
import { useDispatch } from 'react-redux';

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
    console.log(data);
    
    if (data && data.length > 0) {
      dispatch(loadUser(data[0])); // ✅ Correct: load the found user
      localStorage.setItem("userCredential", JSON.stringify(data[0]));
      toast.success("Login successful!");
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
    toast.success("User logged out successfully!");
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
  }
};
export const asyncGetCurrentUser = () => async (dispatch) => {
  try {
    const currentUser = JSON.parse(localStorage.getItem("userCredential"));
    if (currentUser) dispatch(loadUser(currentUser));
    else console.log("user not logged in!");
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
  }
};
