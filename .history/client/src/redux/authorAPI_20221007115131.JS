import axios from 'axios'

export const createAuthor = async (authorForm) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/author`, authorForm)
    if (response.data.success) {
      console.log(response.data)
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