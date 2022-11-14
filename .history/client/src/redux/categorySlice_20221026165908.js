import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",

  initialState: {
    categories: []
  },

  reducers: {
    getAllcategories: (state, action) => {
      state.authors = action.payload
    },
    createCategory: (state, action) => {
      let newAuthorsData = [...state.authors, action.payload]
      state.authors = newAuthorsData
    },
    updateCategory: (state, action) => {
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