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
    setAuth: (state, action) => {
      state.authLoading = false;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  }
})

export default authSlice.reducer