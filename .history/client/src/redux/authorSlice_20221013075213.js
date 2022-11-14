import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "author",

  initialState: {
    authors: []
  },

  reducers: {
    getAllAuthors: (state, action) => {
      state.authors = action.payload
    },
    deleteAuthor: (state, action) => {
      let newAuthorData = state.authors
    }
  }
})

export const {
  getAllAuthors
} = authorSlice.actions

export default authorSlice.reducer