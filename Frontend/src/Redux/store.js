// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice.js";
import CartSlice from "./CartSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: CartSlice,
  },
});

export default store;
