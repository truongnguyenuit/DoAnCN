import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
import { addItemToCart } from '../redux/authAPI'
import { updateBookCurrent } from '../redux/bookSlice'

const SummaryBookComponent = (props) => {
  const categories = useSelector((state) => state.category.categories)
  const authors = useSelector((state) => state.author.authors)
  const dispatch = useDispatch()
  const book = props.data
  const navigate = props.navigate

  const submitButton = async () => {
    try {
      let request = {
        cartNewItem: book._id
      }
      const response = await addItemToCart(request, dispatch)
      alert(response.message)

    } catch (error) {
      console.log(error)
    }
  }
  
  const GotoDetail = async () => {
    console.log(book)
    dispatch(updateBookCurrent(book))
    navigate("/bookDetail")
  }

  return (
    <div className='bg-white w-[271px] h-[250px] flex flex-row rounded-md overflow-hidden drop-shadow-md'>

      <div className="w-[150px] h-[250px] bg-red-100">

        <img
          className="h-[250px] object-cover overflow-hidden"
          src={book.coverUrl}
          alt=""
        />
      </div>

      <div className='w-[121px] flex flex-col justify-between items-center p-[10px]'>
        <span className='flex items-center justify-center wra'>{book.name}</span>
        <span className="">{authors.map((value, index) => {
          return (
            <div key={index}>
              {book.author[0] === value._id && <span key={index} className="text-xs">{value.fullName}</span>}
            </div>
          )
        })}
        </span>
        <span className="font-[600] text-[20px]">{new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND'
        }).format(book.price)} </span>
        <div className="">
          <Button className='w-full' onClick={() => GotoDetail()}>Chi tiết</Button>
          <Button className='w-full mt-[5px]' onClick={() => submitButton()}>Giỏ Hàng</Button>
        </div>

      </div>


    </div>
  )
}

export default SummaryBookComponent