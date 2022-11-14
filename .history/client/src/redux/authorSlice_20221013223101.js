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
    createAuthor: (state, action) => {
      console.log("indispath1", state.authors)
      let newAuthorsData = [...state.authors, action.payload]
      state.authors = newAuthorsData
    },console.log("indispath12", state.authors)
    updateAuthor: (state, action) => {

    },
    deleteAuthor: (state, action) => {

      console.log("indispath1", state.authors)

      let newAuthorsData = state.authors.filter(author => author._id !== action.payload._id)
      state.authors = newAuthorsData

      console.log("indispath2", state.authors)
    }
  }
})

export const {
  getAllAuthors,
  createAuthor,
  deleteAuthor
} = authorSlice.actions

export default authorSlice.reducer