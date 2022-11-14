import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "book",

  initialState: {
    books: []
  },

  reducers: {
    getAllBooks: (state, action) => {
      state.books = action.payload
    },
    createBook: (state, action) => {
      let newBooksData = [...state.books, action.payload]
      state.books = newBooksData
    },
    updateBook: (state, action) => {
      let updatedIndex = state.authors.findIndex(author => author._id === action.payload._id)
      let newAuthorsData = [...state.authors]
      newAuthorsData.splice(updatedIndex, 1, action.payload)
      state.authors = newAuthorsData
    },
    deleteAuthor: (state, action) => { 
      let newAuthorsData = state.authors.filter(author => author._id !== action.payload)     
      state.authors = newAuthorsData
    }
  }
})

export const {
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = authorSlice.actions

export default authorSlice.reducer