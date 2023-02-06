import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Space, Table, Tag } from 'antd';
import { deleteItemFromCart } from '../../redux/authAPI';
import { useEffect } from 'react';
import setAuthToken from '../../untils/setAuthToken';
import { Button, Input, Modal } from "antd";
import { createOrderAPI } from '../../redux/orderAPI';
import { getAllUserOdersAPI } from '../../redux/orderAPI';
import { useState } from 'react';

const { TextArea } = Input

const CartPage = () => {

  const dispatch = useDispatch()

  const accessToken = useSelector((state) => state.auth.accessToken)
  const user = useSelector((state) => state.auth.user)
  const cart = useSelector((state) => state.auth.user.cart)
  const books = useSelector((state) => state.book.books)

  const dataSource = cart.map((value) => value);

  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <div className='h-[1120px] bg-[#E8F1FF] mt-[70px] ml-[300px] flex flex-col gap-4 p-[10px]'>

      <div className="pl-[50px] pr-[50px] pt-[20px] pb-[20px] mt-[15px] bg-white rounded-[5px] drop-shadow-md">
        <span className="font-bold text-base"> Địa chỉ nhận hàng:</span>
        <br />
        <span className="text-base font-bold">{user.realname} - </span>
        <span className="text-base font-bold">{user.telephoneNumber} - </span>
        <span className="text-base">{user.address}</span>
      </div>

      <div className="pl-[50px] py-[20px] pr-[50px] bg-white rounded-[5px] drop-shadow-md">
        <div className="border-2 border-[#91d5ff] p-[5px] rounded-[5px] bg-[#e6f7ff]">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>

      <div className="pl-[50px] pt-[20px] pr-[50px] pb-[20px] bg-white flex flex-row justify-between h-[60px] items-center rounded-[5px] drop-shadow-md">
        <span className="font-bold">Mã giảm giá:</span>
        <Input
          style={{
            height: 35,
            width: '80%',
          }}></Input>
        <Button>Áp dụng</Button>
      </div>

      <div className="pl-[50px] pt-[20px] pr-[50px] pb-[20px] bg-white flex flex-row justify-between h-[150px] rounded-[5px] drop-shadow-md">

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
            <span className="text-sm">Tạm tính:</span>
            <span className="text-sm">Phí vận chuyển:</span>
            <span className="text-sm">Giảm giá:</span>
            <span className="text-sm">Tổng số tiền:</span>
          </div>
          <div className="flex flex-col items-end justify-between ">
            <span className="text-sm">
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
              }).format(sum)}
            </span>
            <span className="text-sm">
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
              }).format(50000)}
            </span>
            <span className="text-sm">.</span>
            <span className="text-lg text-[#FF4D4F]">
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
              }).format(sum + 50000)}
            </span>
          </div>
        </div>
      </div>

      <div className="pl-[50px] pt-[20px] pr-[50px] pb-[20px] bg-white flex justify-end items-center rounded-[5px] drop-shadow-md">
        <button className="bg-[#FF4D4F] text-white py-[5px] px-[10px] rounded-[5px] drop-shadow-md" onClick={() => showModal()}>Đặt hàng</button>
        <Modal title="Xác nhận đơn hàng" visible={isModalOpen} onOk={() => handleSubmit()} onCancel={handleCancel}>
          <p>Bạn xác nhận đặt hàng?</p>
        </Modal>
      </div>



    </div>
  )
}

export default CartPage