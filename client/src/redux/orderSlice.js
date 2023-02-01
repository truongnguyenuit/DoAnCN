import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",

  initialState: {
    orders: [],
  },

  reducers: {
    createOrder: (state, action) => {
      state.orders = action.payload
    },
    getOrder: (state, action) => {
      state.orders = action.payload
    },
    updateOrder: (state, action) => {
      state.orders = action.payload
    },
    deleteOrder: (state, action) => { 
      let newBooksData = state.books.filter(book => book._id !== action.payload)     
      state.books = newBooksData
    }
  }
})

export const {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder
} = ordersSlice.actions

export default ordersSlice.reducer