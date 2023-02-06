import { createSlice, current } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",

  initialState: {
    books: [],
    bookCurrent: '',
    comments: [],

    booksFilter: [],
    bookNameCurrent: '',
    categoryCurrent: '',
    authorCurrent: '',
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
      let updatedIndex = state.books.findIndex(book => book._id === action.payload._id)
      let newBooksData = [...state.books]
      newBooksData.splice(updatedIndex, 1, action.payload)
      state.books = newBooksData
    },
    deleteBook: (state, action) => {
      let newBooksData = state.books.filter(book => book._id !== action.payload)
      state.books = newBooksData
    },
    updateBookCurrent: (state, action) => {
      state.bookCurrent = action.payload
    },
    createComment: (state, action) => {
      let newComments = [...state.comments, action.payload]
      state.comments = newComments
    },
    getAllComments: (state, action) => {
      state.comments = action.payload
    },
    updateAuthorCurrent: (state, action) => {
      state.authorCurrent = action.payload
      console.log("author", state.authorCurrent)
    },
    updateCategoryCurrent: (state, action) => {
      state.categoryCurrent = action.payload
      console.log("category", state.categoryCurrent)
    },
    updateBookNameCurrent: (state, action) => {
      console.log('bookname current', action.payload)
      state.bookNameCurrent = action.payload
    },
    text: (state, action) => {
      console.log("test", state.books)
    },
    updateBooksFilter: (state, action) => {
      // Author && category filter Done
      console.log("in update function", state.bookNameCurrent)
      if (state.bookNameCurrent) {
        console.log("book name filter", state.bookNameCurrent)
        let BooksList = state.books.filter((value) =>
          (value.name === state.bookNameCurrent)
        )
        console.log("co name book", BooksList)
        state.booksFilter = BooksList
      } else {
        console.log('bay xuong ')
        if (state.authorCurrent && state.categoryCurrent) {

          let BooksList = state.books.filter((value) =>
            (value.author[0] === state.authorCurrent) && (value.category[0] === state.categoryCurrent)
          )
          console.log("co ca author va category", BooksList)
          state.booksFilter = BooksList

        } else {

          if (state.authorCurrent) {
            let BooksList = state.books.filter((value) =>
              value.author[0] === state.authorCurrent
            )
            console.log("co author", BooksList)
            state.booksFilter = BooksList
          } else {

            if (state.categoryCurrent) {
              let BooksList = state.books.filter((value) =>
                value.category[0] === state.categoryCurrent
              )
              console.log("co cate", BooksList)
              state.booksFilter = BooksList
            } else {
              console.log("khong co gi het")
            }

          }
        }
      }



    }
  }
})

export const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  updateBookCurrent,
  createComment,
  getAllComments,

  updateAuthorCurrent,
  updateCategoryCurrent,
  updateBookNameCurrent,
  updateBooksFilter,
  text
} = bookSlice.actions

export default bookSlice.reducer