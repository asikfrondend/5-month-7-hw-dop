import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  username: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload.username;
    },
    register: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload.username;
    }
  }
});

export const { login, register } = authSlice.actions;

export default authSlice.reducer;
