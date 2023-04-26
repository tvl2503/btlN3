import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "../slices/cart";
import { userReducer } from "../slices/user";

const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default reducer;
