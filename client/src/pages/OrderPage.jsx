import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Space, Table, Tag } from 'antd';
import { deleteItemFromCart } from '../redux/authAPI';
import { useEffect, useState } from 'react';
import setAuthToken from '../untils/setAuthToken';
import { Button, Input, Modal } from "antd";
import { createOrderAPI } from '../redux/orderAPI';
import { getAllUserOdersAPI } from '../redux/orderAPI';
const { TextArea } = Input

const OrderPage = () => {

  const dispatch = useDispatch()

  const accessToken = useSelector((state) => state.auth.accessToken)
  const cart = useSelector((state) => state.auth.user.cart)
  const books = useSelector((state) => state.book.books)
  const orders = useSelector((state) => state.order.orders)

  const columns = [
    {
      title: 'Sản Phẩm',
      render: (_, record) => (
        <>
          {books.map((value) => {
            if (value._id === record._id) {
              return (
                <div className='flex flex-row items-center'>
                  <span> {value.name}</span>
                </div>

              )
            }
          })}
        </>
      ),
      key: '_id',
    },
    {
      title: 'Số Lượng',
      dataIndex: 'amount',
      key: '_id',
    },
    {
      title: 'Giá tiền',
      render: (_, record) => (
        <>
          {books.map((value) => {
            if (value._id === record._id) {
              return (
                <span>
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                  }).format(value.price)}
                </span>
              )
            }
          })}
        </>
      ),
      key: '_id',
    },
    {
      title: 'Thành Tiền',
      render: (_, record) => (
        <>
          {books.map((value) => {
            if (value._id === record._id) {
              return (
                <span>
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                  }).format(value.price * record.amount)}
                </span>
              )
            }
          })}
        </>
      ),
      key: '_id',
    },

  ];

  useEffect(() => {
    setAuthToken(accessToken)
  }, [])

  let sum = 0;

  cart.map((value) => {
    books.map((book) => {
      if (book._id === value._id) {
        sum = sum + value.amount * book.price
      }
    })
  })

  const handleSubmit = async () => {
    try {
      const response = await getAllUserOdersAPI(dispatch)
      alert(response.message)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const [message, setMessenger] = useState('')

  useEffect(() => {
    setAuthToken(accessToken)
    getAllUserOdersAPI(dispatch)
  }, [])

  let confirmStatus

  return (
    <div className='h-[1120px] mt-[80px] ml-[300px] flex flex-col gap-4'>

      <div className="pl-[50px] pt-[20px] pr-[50px] bg-gradient-to-r from-cyan-200 to-pink-200 flex flex-col">
        {orders.map((value, index) => {
          return (
            <div className="bg-white p-[10px] m-[20px] rounded-[5px] drop-shadow-md gap-[10px] flex-col flex">
              <div className="flex justify-between">
                <span className=" font-bold text-base">Mã đơn hàng: {value._id}</span>

                {(value.status === "Đã xác nhận") ?
                  <div className="bg-[#f6ffed] border-2 rounded-[5px] py-[5px] px-[10px] border-[#b7eb8f]">
                    <span className="text-[#389e0d] text-base">{value.status}</span>
                  </div> : (value.status === "Chờ xác nhận") ?
                    <div className="bg-[#e6f7ff] border-2 rounded-[5px] py-[5px] px-[10px] border-[-[#91d5ff]">
                      <span className="text-[#096dd9] text-base">{value.status}</span>
                    </div> : (value.status === "Từ chối") ?
                      <div className="bg-[#fff2e8] border-2 rounded-[5px] py-[5px] px-[10px] border-[#ffbb96]">
                        <span className="text-[#d4380d] text-base">{value.status}</span>
                      </div> : <div className=""></div>
                }
              </div>
              <div className="border-2 border-[#91d5ff] p-[5px] rounded-[5px] bg-[#e6f7ff]">
                <Table dataSource={value.books} columns={columns} />
              </div>
              <div className="flex justify-end items-center">
                <div className="w-[240px] flex justify-between items-center m-[10px]">
                  <span className="text-base">Tổng thanh toán: </span>
                  <span className="text-xl font-bold text-[#d43b0d]">
                    {new Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                    }).format(value.total)}
                  </span>
                </div>
              </div>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default OrderPage