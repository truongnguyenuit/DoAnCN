import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

import authSlice from "./authSlice";

const reducer = combineReducers({
  auth: authSlice
})

const persistConfig = {
  key: 'root',
  storage
}

const persisttedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
  reducer : per
})