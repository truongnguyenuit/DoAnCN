import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",

  initialState: {
    books: []
  },

  reducers: {
    getAllBooks: (state, action) => {
      console.log('asdasdasd')
      state.books = action.payload
      console.log('asdsad')
    },
    createBook: (state, action) => {
      console.log()
      let newBooksData = [...state.books, action.payload]
      state.books = newBooksData
    },
    updateBook: (state, action) => {
      let updatedIndex = state.books.findIndex(book => book._id === action.payload._id)
      let newBooksData = [...state.books]
      newBooksData.splice(updatedIndex, 1, action.payload)
      state.books = newBooksData
    },
    deleteBook: (state, action) => { 
      let newBooksData = state.books.filter(book => book._id !== action.payload)     
      state.books = newBooksData
    }
  }
})

export const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook
} = bookSlice.actions

export default bookSlice.reducer