import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

import authSlice from "./authSlice";
import authorSlice from "./authorSlice";

const reducer = combineReducers({
  auth: authSlice
  author: authorSlice
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer : persistedReducer
})
 
export const persistor = persistStore(store)

export default store