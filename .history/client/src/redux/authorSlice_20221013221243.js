import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "author",

  initialState: {
    authors: []
  },

  reducers: {
    getAllAuthors: (state, action) => {
      state.authors = action.payload
      console.log(state.authors)
    },
    createAuthor: (state, action) => {
      let newAuthorsData = [...state.authors, action.payload]
      state.authors = newAuthorsData
    },
    updateAuthor: (state, action) => {

    },
    deleteAuthor: (state, action) => {
      let newAuthorsData = state.authors.filter(author => author._id !== action.payload._id)
      state.authors = newAuthorsData
    }
  }
})

export const {
  getAllAuthors,
  createAuthor
} = authorSlice.actions

export default authorSlice.reducer