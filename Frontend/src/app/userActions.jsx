
import axios from './../utils/AxiosConfig';
import { loadUser } from '../features/user/userSlice';


export const asyncGetUsers = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('users');
        
        dispatch(loadUser(res.data));
    } catch (error) {
        console.log(error);
        
    }
}