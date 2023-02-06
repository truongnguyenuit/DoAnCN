import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    authLoading: true,
    isAuthenticated: false,
    user: null,
    accessToken: null,
    allUsers: []
  },

  reducers: {
    login: (state, action) => {
      state.authLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    update: (state, action) => {
      state.user = action.payload.user
    },
    updateAllUsers: (state, action) => {
      state.allUsers = action.payload
    }
  }
})

export const {
  login,
  logout,
  update,
  updateAllUsers
} = authSlice.actions

export default authSlice.reducer