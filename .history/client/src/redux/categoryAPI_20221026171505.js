import axios from "axios";

import { getAllCategories } from "./categorySlice";
import { createCategory } from "./categorySlice";
import { updateCategory } from "./categorySlice";
import { deleteCategory } from "./categorySlice";

export const getAllCategoriesAPI = async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/category/getAllCategories`)
    dispatch(getAllAuthors(response.data.authors))
  } catch (error) {
    console.log(error)
  }
}

export const createCategoryAPI = async (categoryForm, dispatch) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/category`, categoryForm)
    dispatch(createCategory(response.data.category))
    return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}

export const updateCategoryAPI = async (categoryForm, categoryId, dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/category/${authorId}`, authorForm)
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

export const deleteCategoryAPI = async (authorId, dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/category/${authorId}`)
    dispatch(deleteAuthor(response.data._id))
    return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}