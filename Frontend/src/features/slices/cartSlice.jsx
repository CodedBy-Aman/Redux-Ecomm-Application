import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    carts :[],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers : {
        loadUser : (state, action) =>{
            state.carts = action.payload;
        }
    }
});


export default cartSlice.reducer;
export const {loadUser} = cartSlice.actions ;