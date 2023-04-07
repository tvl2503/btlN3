import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../models/user';

export interface UserState {
  token?: string;
  user?: User | null;
}
const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  initialState,
  name: 'user-slice',
  reducers: {
    login(state, action) {
      const { token, user } = action.payload || {};
      if (!token || !user) {
        return;
      }
      state.token = token;
      state.user = user;
    },
    logout(state) {
      state.token = undefined;
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
export default userSlice;
