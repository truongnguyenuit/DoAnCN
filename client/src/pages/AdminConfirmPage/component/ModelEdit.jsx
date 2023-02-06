import React from 'react'
import { Space, Modal, Input, Table, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { updateAuthorAPI } from '../../../redux/authorAPI';
import { deleteAuthorAPI } from '../../../redux/authorAPI';

import { confirmOrderAPI } from '../../../redux/orderAPI';
import { refuseOrderAPI } from '../../../redux/orderAPI';

const ModelEdit = ({ record, modalFormik }) => {
  const columns = [
    {
      title: 'Tên sách',
      render: (_, record) => (

        books.map((value) => {
          if (value._id === _._id) {
            return (
              <span className="">{value.name}</span>
            )
          }

        })
      ),
      key: 'createAt',

    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      key: 'fullName',
    },
    {
      title: 'Đơn giá',
      render: (_, record) => (

        books.map((value) => {
          if (value._id === _._id) {
            return (
              <span className="">{new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
              }).format(value.price)}</span>
            )
          }

        })
      ),
      key: 'total',

    },
    {
      title: 'Thành tiền',
      render: (_, record) => (

        books.map((value) => {
          if (value._id === _._id) {
            return (
              <span className="">{new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
              }).format(value.price * _.amount)}</span>
            )
          }
        })
      ),

      key: 'status',
    },

  ]
  const data = record.books

  const dispatch = useDispatch()

  const users = useSelector((state) => state.auth.allUsers)
  const books = useSelector((state) => state.book.books)


  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const showUpdateModal = (_id) => {
    setIsUpdateModalVisible(true);
  };
  const handleUpdateOk = () => {
    setIsUpdateModalVisible(false);
  };
  const handleUpdateCancel = () => {
    setIsUpdateModalVisible(false);
  };


  const confirmOrderHandle = async (orderId) => {
    try {
      const values = {
        orderConfirm: orderId
      }
      const response = await confirmOrderAPI(values, dispatch)
      alert(response)
      modalFormik.resetForm()
    } catch (error) {
      console.log(error)
    }
    handleUpdateOk()
  }

  const refuseOrderHandle = async (orderId) => {
    try {
      const values = {
        orderRefuse: orderId
      }
      const response = await refuseOrderAPI(values, dispatch)
      alert(response)
      modalFormik.resetForm()
    } catch (error) {
      console.log(error)
    }
    handleUpdateOk()
  }

  return (
    <Space size="middle">

      <a onClick={() => showUpdateModal(record._id)}>Xác nhận</a>

      <Modal
        title="Xác nhận đơn hàng"
        visible={isUpdateModalVisible}
        onCancel={handleUpdateCancel}
        width={800}
        footer={[
          <Button ghost type={'primary'} key="back" onClick={handleUpdateCancel}>
            Quay lại
          </Button>,
          <Button danger type={'primary'} key="submit" onClick={() => refuseOrderHandle(record._id)}>
            Từ chối
          </Button>,
          <Button type={'primary'} key="link" onClick={() => confirmOrderHandle(record._id)}>
            Xác nhận
          </Button>,
        ]}
      >
        <div className="flex flex-col gap-[5px]">
          <div className="flex justify-between">
            <span className="font-semibold"> Mã đơn hàng:</span>
            <span className="font-bold">{record._id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Khách hàng:</span>
            {users.map((value) => {
              if (value._id === record.user)
                return <span className='font-bold'>{value.realname}</span>
            })}
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Liên hệ:</span>
            {users.map((value) => {
              if (value._id === record.user)
                return <span className='font-bold'>{value.telephoneNumber}</span>
            })}
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Địa chỉ giao hàng:</span>
            {users.map((value) => {
              if (value._id === record.user)
                return <span className='font-bold'>{value.address}</span>
            })}
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Tin nhắn: </span>
            <span className="font-bold">{record.message}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Trạng thái: </span>
            <span className="font-bold">{record.status}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Ngày đặt hàng: </span>
            <span className="font-bold">{record.createAt}</span>
          </div>

          <div className="border border-zinc-300 w-full rounded-md p-[10px] text-base my-[10px]">
            <Table
              key="avatarUrl"
              columns={columns}
              dataSource={data}
            />
          </div>

          <div className="flex justify-between">
            <span className="font-bold">Tạm tính:</span>
            <span className="font-bold">{new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                  }).format(record.total - record.shippingCost)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Phí vận chuyển:</span>
            <span className="font-bold">{new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                  }).format(record.shippingCost)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Giảm giá:</span>
            <span className="font-bold"></span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Tổng cộng:</span>
            <span className="font-bold">{new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND'
            }).format(record.total)}</span>
          </div>

        </div>
      </Modal>
    </Space>
  )
}

export default ModelEdit