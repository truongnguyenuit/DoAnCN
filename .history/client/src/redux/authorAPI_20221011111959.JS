import axios from 'axios'

import { getAllAuthors } from './authorSlice'

export const createAuthor = async (authorForm) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/author`, authorForm)
    return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}

export const getAllAuthors = async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/author/getAllAuthors`)
    dispatch(getAllAuthors(response))
  } catch (error) {
    console.log(error)
  }
}