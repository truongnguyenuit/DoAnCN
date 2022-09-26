import axios from 'axios'
import { login } from './authSlice'

export const registerUser = async userForm => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/register`, userForm)
    return response.data

  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}

export const loginUser = async (userForm, dispatch, navigate) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/login`, userForm)
    if (response.data.success) {
      
      dispatch(login())
    }
      
    return response.data

  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}