import axios from 'axios'
import { login, logout, update, updateAllUsers } from './authSlice'

export const registerUser = async (userForm, navigate) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/register`, userForm)
    if (response.data.success)
      navigate("/login")
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
      console.log(response.data)
      dispatch(login(response.data))
      if (response.data.user.role === "user")
        navigate("/")
      else
        navigate("/admin/bookcontrol")
    }

    return response.data

  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}

export const updateUser = async (userForm, dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/auth/update`, userForm)
    if (response.data.success) {
      console.log(response.data)
      dispatch(update(response.data))
    }
    return response.data.message

  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}

export const changePassword = async (userForm) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/auth/changePassword`, userForm)
    console.log("response", response.data)
    return response.data

  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}

export const logOutUser = async (dispatch, navigate) => {
  localStorage.removeItem('LocalStorageTokenName')
  dispatch(logout())

  alert('Logout Successful!')
  navigate("/")
}


export const addItemToCart = async (cartNewItem, dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/cart/addToCart`, cartNewItem)
    console.log("response", response.data.user)
    if (response.data.success) {
      dispatch(update(response.data))
    }
    return response.data

  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}

export const deleteItemFromCart = async (ItemId, dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/cart/deleteFromCart`, ItemId)
    console.log("response", response.data)
    if (response.data.success) {
      dispatch(update(response.data))
    }
    return response.data

  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}

export const getAllUsers = async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/auth/getAllUser`)
    console.log("response", response.data)
    if (response.data.success) {
      dispatch(updateAllUsers(response.data.users))
    }

  } catch (error) {
    if (error.response.data) return error.response.data
    else return { success: false, message: error.message }
  }
}

