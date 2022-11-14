import { createSlice } from "@reduxjs/toolkit";

const authorSlice = createSlice({
  name: "author",

  initialState: {
    authors: []
  },

  reducers: {
    getAllAuthors: (state, action) => {
      
      // state.authors = action.payload
    },
    createAuthor: (state, action) => {
      console.log("trong dispatch")
      // let newAuthorsData = [...state.authors, action.payload]
      // state.authors = newAuthorsData
      // console.log("complete dispach")
    },
    updateAuthor: (state, action) => {

    },
    deleteAuthor: (state, action) => {
      let newAuthorData = state.authors
    }
  }
})

export const {
  getAllAuthors,
  createAuthor
} = authorSlice.actions

export default authorSlice.reducer