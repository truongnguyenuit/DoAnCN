import axios from 'axios'

import { createOrder } from './orderSlice'
import { getOrder } from './orderSlice'
import { updateOrder } from './orderSlice'
import { deleteOrder } from './orderSlice'


export const createOrderAPI = async (order, dispatch) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/order`, order)
    // dispatch(createBook(response.data.book))
    console.log(response)
    return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error.message }
  }
}

export const getAllUserOdersAPI = async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/order/getAllUserOrders`)
    // dispatch(getAllBooks(response.data.books))
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}


// export const updateBookAPI = async (bookForm, bookId, dispatch) => {
//   try {
//     const response = await axios.put(`http://localhost:5000/api/book/${bookId}`, bookForm)
//     console.log(response.data.book)
//     dispatch(updateBook(response.data.book))
//     return response.data.message
//   } catch (error) {
//     if (error.response.data)
//       return error.response.data
//     else
//       return { success: false, message: error.message }
//   }
// }

// export const deleteBookAPI = async (bookId, dispatch) => {
//   try {
//     const response = await axios.delete(`http://localhost:5000/api/book/${bookId}`)
//     dispatch(deleteBook(response.data._id))
//     return response.data
//   } catch (error) {
//     if (error.response.data)
//       return error.response.data
//     else
//       return { success: false, message: error.message }
//   }
// }