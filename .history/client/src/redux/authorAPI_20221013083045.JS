import axios from 'axios'

import { getAllAuthors } from './authorSlice'



export const getAuthors = async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/author/getAllAuthors`)
    dispatch(getAllAuthors(response.data.authors))
  } catch (error) {
    console.log(error)
  }
}

export const createAuthor = async (authorForm) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/author`, authorForm)
    console.log(response.data)
    
    return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}

export const updateAuthor = async (authorId, dispatch) => {

}

export const deleteAuthor = async (authorId) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/author/${authorId}`)
    
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}