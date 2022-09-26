import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    authLoading: true,
    isAuthenticated: false,
    user: null,
    accessToken: null,
  },

  reducers: {
    login: (state, action) => {
      state.authLoading = false;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken
    },
    logout: (state, action) => {
      state.isAuthenticated = true
    }
  }
})

export const {
  login,
  logout
} = authSlice.actions

export default authSlice.reducer