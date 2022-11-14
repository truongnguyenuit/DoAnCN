import axios from 'axios'

export const loginUser = async (authorForm) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/login`, userForm)
    if (response.data.success) {
      console.log(response.data)
      dispatch(login(response.data))
      if (response.data.user.role === "user")
        navigate("/")
      else
        navigate("/admin")
    }
      
    return response.data

  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}