import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";

const persistConfig = {
  key: 'root',
  storage
}

const persisttedReducer = per

export default configureStore({
  reducer: {
    auth: authSlice
  }
})