import React, { useEffect } from 'react'
import { Row, Col, Input } from 'antd'
import { useFormik } from "formik"

import { createAuthorAPI } from '../../redux/authorAPI.js'
import { getAllAuthorsAPI } from '../../redux/authorAPI.js'

import { useSelector, useDispatch } from 'react-redux'
import { Space, Table } from 'antd';
import setAuthToken from '../../untils/setAuthToken.js'

import ModelEdit from './component/ModelEdit.jsx'

import { getAllUsers } from '../../redux/authAPI.js'
import { getAllUserOdersAPI } from '../../redux/orderAPI.js'

const AdminConfirmPage = () => {

  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: '_id',
      key: '_id',

    },
    {
      title: 'Ngày đặt',
      dataIndex: 'createAt',
      key: 'createAt',

    },
    {
      title: 'Khách hàng',
      render: (_, record) => (
        users.map((value) => {
          if (value._id === _.user) {
            return (
              <span className="">{value.realname}</span>
            )
          }

        })
      ),
      key: 'fullName',
    },
    {
      title: 'Tổng tiền',
      render: (_, record) => (
        <span className="">{new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND'
        }).format(record.total)}</span>


      ),
      key: 'total',

    },
    {
      title: 'Trạng thái',
      render: (_, record) => (
        users.map((value) => {
          if (value._id === _.user) {
            if (_.status === "Chờ xác nhận") return (
              <div className="bg-[#e6f7ff] border-[1px] border-[#91d5ff] w-fit text-[#096dd9] rounded-[5px] drop-shadow-sm py-[4px] px-[8px]">
                <span className="">{_.status}</span>
              </div>
            )
            if (_.status === "Từ chối") return (
              <div className="bg-[#fff2e8] border-[1px] border-[#ffbb96] w-fit text-[#d4380d] rounded-[5px] drop-shadow-sm py-[4px] px-[8px]">
                <span className="">{_.status}</span>
              </div>
            )
            if (_.status === "Đã xác nhận") return (
              <div className="bg-[#f6ffed] border-[1px] border-[#b7eb8f] w-fit text-[#389e0d] rounded-[5px] drop-shadow-sm py-[4px] px-[8px]">
                <span className="">{_.status}</span>
              </div>
            )
 
          }

        })
      ),

      key: 'status',
    },
    {
      title: 'Xác nhận',
      key: 'action',
      render: (_, record) => (
        <ModelEdit
          record={record}
        />
      ),
    },
  ]

  const users = useSelector((state) => state.auth.allUsers)
  const orders = useSelector((state) => state.order.orders)
  const books = useSelector((state) => state.book.books)

  const accessToken = useSelector((state) => state.auth.accessToken)
  const data = useSelector((state) => state.order.orders)

  const dispatch = useDispatch()

  const modalFormik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      avatarUrl: "",
      birthDate: "",
      _id: ""
    }
  })

  const formik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      avatarUrl: "",
      birthDate: ""
    },
    onSubmit: async (values) => {
      try {
        const response = await createAuthorAPI(values, dispatch)
        alert(response.message)
      } catch (error) {
        console.log(error)
      }
    }
  })

  useEffect(() => {
    setAuthToken(accessToken)
    getAllUsers(dispatch)
    getAllUserOdersAPI(dispatch)
    // console.log("asdasd", users)
    // console.log("oderrererer", orders)
    // console.log("book", books)
  }, [])

  let AvataUrl
  if (formik.values.avatarUrl === "") {
    AvataUrl = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
  } else
    AvataUrl = formik.values.avatarUrl

  return (
    <div className='bg-gradient-to-r from-cyan-200 to-pink-200 w-[1263px] h-[5000px] ml-[256px] p-[40px] flex flex-col items-center'>

      <div className="font-bold text-xl">
        QUẢN LÝ ĐƠN HÀNG
      </div>

      <div className='bg-white w-full p-[50px] drop-shadow-lg rounded-md mt-[20px]'>

        <div className="text-lg font-bold">
          Tất cả đơn hàng
        </div>

        <div className="border border-zinc-300 w-full rounded-t-md p-[10px] text-base mt-[45px]">
          <Table
            key="avatarUrl"
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>

    </div>
  )
}

export default AdminConfirmPage