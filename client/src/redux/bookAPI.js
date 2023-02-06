import axios from 'axios'

import { getAllBooks } from './bookSlice'
import { createBook } from './bookSlice'
import { updateBook } from './bookSlice'
import { deleteBook } from './bookSlice'
import { updateBookCurrent } from './bookSlice'
import { createComment } from './bookSlice'
import { getAllComments } from './bookSlice'

export const getAllBooksAPI = async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/book/getAllBooks`)
    dispatch(getAllBooks(response.data.books))
  } catch (error) {
    console.log(error)
  }
}

export const createBookAPI = async (bookForm, dispatch) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/book`, bookForm)
    dispatch(createBook(response.data.book))
    return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}

export const updateBookAPI = async (bookForm, bookId, dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/book/${bookId}`, bookForm)
    console.log(response.data.book)
    dispatch(updateBook(response.data.book))
    return response.data.message
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}

export const deleteBookAPI = async (bookId, dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/book/${bookId}`)
    dispatch(deleteBook(response.data._id))
    return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}

// export const updateBookCurrentAPI = async (bookId) => {
//   try {
//     const response = await axios.delete(`http://localhost:5000/api/book/${bookId}`)
//     console.log(response)
//     // dispatch(updateBookCurrent(response.data._id))
//     return response.data
//   } catch (error) {
//     if (error.response.data)
//       return error.response.data
//     else
//       return { success: false, message: error.message }
//   }
// }

export const createCommentAPI = async (comment, dispatch) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/comment`, comment)
    dispatch(createComment(response.data.newComment))
    return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}

export const getAllCommentsAPI = async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/comment/getAllContents`)
    dispatch(getAllComments(response.data.comment))
    return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}