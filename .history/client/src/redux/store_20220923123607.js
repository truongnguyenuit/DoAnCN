import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

import authSlice from "./authSlice";

const reducer = combineReducers({
  auth: auth
})

const persistConfig = {
  key: 'root',
  storage
}

const persisttedReducer = persistReducer(persistConfig)

export default configureStore({
  reducer: {
    auth: authSlice
  }
})