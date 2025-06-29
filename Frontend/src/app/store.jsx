import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/slices/userSlice";
import productSlice from "../features/slices/productSlice";
import cartSlice from "../features/slices/cartSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    products: productSlice,
    carts: cartSlice,
  },
});

export default store;
