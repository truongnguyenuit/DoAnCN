import axios from 'axios'

export const registerUser = async userForm => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/register`, userForm)
    return response.data
  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}