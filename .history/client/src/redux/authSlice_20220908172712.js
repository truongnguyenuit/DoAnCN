import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  },

  reducers: {
    setAuth: (state, action) => {
      state.authLoading = false;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  }
})

export default user