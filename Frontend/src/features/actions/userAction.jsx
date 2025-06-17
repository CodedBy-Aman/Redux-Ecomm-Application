import axios from "../../utils/AxiosConfig";
import { toast } from "react-toastify";
import { loadUser } from "../slices/userSlice";

export const asyncGetUsers = (user) => async(dispatch , getState) =>{
try {
    const res = await axios.post("/users", user);
   dispatch(loadUser(res.data)); // <-- update Redux state
    toast.success("User registered successfully!");
    console.log(res);
    
  } catch (error) {
    toast.error(error.message || "There is some error!");
    console.error(error);
}
}