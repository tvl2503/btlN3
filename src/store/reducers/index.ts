import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../slices/user";

const reducer = combineReducers({
  user: userReducer, 
});

export default reducer;
