import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null
};

const userSlice = createSlice({
  initialState,
  name: 'user-slice',
  reducers: {
    updateUser(user: any) {
      state.user = user;
    }
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
export default userSlice;
