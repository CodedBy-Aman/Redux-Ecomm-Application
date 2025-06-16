import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({
    reducer:{
        users:"user",
        products:"product",
        carts:"cart",
    }
})