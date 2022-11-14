import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "author",

  initialState: {
    authors: []
  },

  reducers: {
    getAllAuthors: (state, action) => {
      state.authors = action.payload
      console.log(authors)
    },
    createAuthor: (state, action) => {
      let newAuthorsData = [...state.authors, action.payload]
      state.authors = newAuthorsData
    },
    updateAuthor: (state, action) => {

    },
    deleteAuthor: (state, action) => {
      let newAuthorData = state.authors.filter(author => author._id !== action.payload.id)
    }
  }
})

export const {
  getAllAuthors,
  createAuthor
} = authorSlice.actions

export default authorSlice.reducer