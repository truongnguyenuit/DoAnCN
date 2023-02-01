import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
import { addItemToCart } from '../redux/authAPI'

const SummaryBookComponent = (props) => {
  const categories = useSelector((state) => state.category.categories)
  const authors = useSelector((state) => state.author.authors)
  const dispatch = useDispatch()
  const book = props.data

  const submitButton = async () => {
    try {
      let request = {
        cartNewItem : book._id
      }
      const response = await addItemToCart(request, dispatch)
      alert(response.message)

    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className='bg-white w-[271px] h-[250px] flex flex-row rounded-md overflow-hidden drop-shadow-sm'>

      <div className="w-[150px] h-[250px] bg-red-500">

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
        <span className="font-[600] text-[20px]">{book.price} đ</span>
        <Button className='w-full' onClick={()=> submitButton()}>Add to cart</Button>
      </div>


    </div>
  )
}

export default SummaryBookComponent