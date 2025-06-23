import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    currentUser : null,
    isLoggedIn : false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers : {
        loadUser : (state, action) =>{
            state.currentUser = action.payload;
            state.isLoggedIn = true
        },
         clearUser: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
    }
});


export default userSlice.reducer;
export const {loadUser, clearUser} = userSlice.actions ;