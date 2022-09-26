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

export const loginUser = async (userForm, dispatch, navigate) => {
  try {

    const response = await axios.post(`http://localhost:5000/api/auth/login`, userForm)
    console.log(response.data.success)
    if (response.data.success)
      console.log(response.success)
    return response.data

  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}