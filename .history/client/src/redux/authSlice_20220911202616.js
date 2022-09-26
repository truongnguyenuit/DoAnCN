import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    register{
    authLoading: true,
    isAuthenticated: false,
    user: null,
    },
    {

    }
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