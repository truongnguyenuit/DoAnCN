import axios from 'axios'

import { getAllBooks } from './bookSlice'
import { createBook } from './bookSlice'
import { updateBook } from './bookSlice'
import { deleteBook } from './bookSlice'

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

export const updateAuthorAPI = async (authorForm, authorId, dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/author/${authorId}`, authorForm)
    console.log(response.data.author)
    dispatch(updateAuthor(response.data.author))
    return response.data.message
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}

export const deleteAuthorAPI = async (authorId, dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/author/${authorId}`)
    dispatch(deleteAuthor(response.data._id))
    return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}