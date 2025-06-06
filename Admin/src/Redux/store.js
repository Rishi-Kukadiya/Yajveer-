  // src/redux/store.js
  import { configureStore } from '@reduxjs/toolkit';
  import CartSlice from "./CartSlice.js";
  import ReviewsSlice from "./Review.js";
  import ContactusSlice from "./Contactus.js";
  import UsersSlice from "./User.js";
  import OrderSlice from "./Order.js";

  const store = configureStore({
    reducer: {
      cart: CartSlice,
      reviews: ReviewsSlice,
      contactus : ContactusSlice,
      users : UsersSlice,
      order : OrderSlice,
    },
  });

  export default store;
