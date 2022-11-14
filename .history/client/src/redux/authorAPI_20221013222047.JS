import axios from 'axios'

import { getAllAuthors } from './authorSlice'
import { createAuthor } from './authorSlice'
import { deleteAuthor } from './authorSlice'

export const getAllAuthorsAPI = async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/author/getAllAuthors`)
    dispatch(getAllAuthors(response.data.authors))
  } catch (error) {
    console.log(error)
  }
}

export const createAuthorAPI = async (authorForm, dispatch) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/author`, authorForm)
    dispatch(createAuthor(response.data.author))
    return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}

export const updateAuthorAPI = async (authorId, dispatch) => {

}

export const deleteAuthorAPI = async (authorId, dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/author/${authorId}`)
    dispatch(deleteAuthor(response.data._id))
    console.log(response.data._id)
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}