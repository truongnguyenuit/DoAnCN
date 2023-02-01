import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Space, Table, Tag } from 'antd';
import { deleteItemFromCart } from '../../redux/authAPI';
import { useEffect } from 'react';
import setAuthToken from '../../untils/setAuthToken';
import { Button, Input, Modal } from "antd";
import { createOrderAPI } from '../../redux/orderAPI';
import { useState } from 'react';

const { TextArea } = Input

const CartPage = () => {

  const dispatch = useDispatch()

  const accessToken = useSelector((state) => state.auth.accessToken)
  const user = useSelector((state) => state.auth.user)
  const cart = useSelector((state) => state.auth.user.cart)
  const books = useSelector((state) => state.book.books)

  const dataSource = cart.map((value) => value);

  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const columns = [
    {
      title: 'Sản Phẩm',
      render: (_, record) => (
        <>
          {books.map((value) => {
            if (value._id === record._id) {
              return (
                <div className='flex flex-row items-center'>
                  <img
                    className="w-[80px] h-[80px] object-cover rounded-[10px] mr-[20px]"
                    src={value.coverUrl}
                    alt=""
                  />
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
      title: 'Đơn Giá',
      render: (_, record) => (
        <>
          {books.map((value) => {
            if (value._id === record._id) {
              return (
                <span>{value.price} ₫</span>
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
      title: 'Thành Tiền',
      render: (_, record) => (
        <>
          {books.map((value) => {
            if (value._id === record._id) {
              return (
                <span>{value.price * record.amount} ₫</span>
              )
            }
          })}
        </>
      ),
      key: '_id',
    },
    {
      title: 'Xóa',
      render: (_, record) => (
        <>
          <span
            className="cursor-pointer text-[#0EA5E9]"
            onClick={async () => {
              try {
                let request = {
                  cartDeleteItem: _._id
                }
                const response = await deleteItemFromCart(request, dispatch)
                console.log(response)
                alert(response.message)

              } catch (error) {
                console.log(error)
              }
            }}
          >
            Xóa
          </span>
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
    handleOk()
    try {
      let values = {
        user: user._id,
        books: cart,
        message: message,
        amount: sum + 50000
      }
      const response = await createOrderAPI(values, dispatch)
      alert(response.message)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const [message, setMessenger] = useState('')

  return (
    <div className='h-[1120px] bg-[#ecf0f1] mt-[80px] ml-[300px] flex flex-col gap-4'>

      <div className="pl-[50px] pr-[50px] pt-[20px] pb-[20px] mt-[15px] bg-white">
        <span className="font-bold text-lg"> Địa chỉ nhận hàng:</span>
        <br />
        <span className="text-base font-bold">{user.realname} - </span>
        <span className="text-base font-bold">{user.telephoneNumber} - </span>
        <span className="text-base">{user.address}</span>
      </div>

      <div className="pl-[50px] pt-[20px] pr-[50px] bg-white">
        <Table dataSource={dataSource} columns={columns} />
      </div>
      <div className="pl-[50px] pt-[20px] pr-[50px] pb-[20px] bg-white flex flex-row justify-between h-[60px] items-center">
        <span className="font-bold">Mã giảm giá:</span>
        <Input
          style={{
            height: 35,
            width: '80%',
          }}></Input>
        <Button>Áp dụng</Button>
      </div>

      <div className="pl-[50px] pt-[20px] pr-[50px] pb-[20px] bg-white flex flex-row justify-between h-[150px]">

        <div className="flex flex-row items-center gap-3">
          <div className="border-[1px] border-[#FF4D4F] h-fit p-[3px]">
            <span className="text-[#FF4D4F]">Thanh toán khi nhận hàng</span>
          </div>
          <div className="border-[1px] h-fit p-[3px]">
            <span className="">Thanh toán thông qua Momo</span>
          </div>
        </div>

        <div className=" w-[300px] flex justify-center items-center">
          <TextArea
            value={message}
            onChange={(e) => setMessenger(e.target.value)}
            row={5}
            placeholder="Bạn có thể gửi lời nhắn đến shipper ở đây"
            autoSize={{
              minRows: 4,
              maxRows: 5,
            }} />
        </div>

        <div className="flex flex-row gap-20">
          <div className="flex flex-col items-end justify-between">
            <span className="text-xs">Tạm tính:</span>
            <span className="text-xs">Phí vận chuyển:</span>
            <span className="text-xs">Giảm giá:</span>
            <span className="text-xs">Tổng số tiền:</span>
          </div>
          <div className="flex flex-col items-end justify-between ">
            <span className="text-xs">{sum} ₫</span>
            <span className="text-xs">50000 ₫</span>
            <span className="text-xs">.</span>
            <span className="text-base text-[#FF4D4F]">{sum + 50000} ₫</span>
          </div>
        </div>
      </div>

      <div className="pl-[50px] pt-[20px] pr-[50px] pb-[20px] bg-white flex justify-end items-center">
        <button className="bg-[#FF4D4F] text-white p-[5px]" onClick={() => showModal()}>Đặt hàng</button>
        <Modal title="Basic Modal" open={isModalOpen} onOk={() => handleSubmit()} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>



    </div>
  )
}

export default CartPage