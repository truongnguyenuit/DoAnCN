import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "book",

  initialState: {
    books: []
  },

  reducers: {
    getAllAuthors: (state, action) => {
      state.authors = action.payload
    },
    createAuthor: (state, action) => {
      let newAuthorsData = [...state.authors, action.payload]
      state.authors = newAuthorsData
    },
    updateAuthor: (state, action) => {
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