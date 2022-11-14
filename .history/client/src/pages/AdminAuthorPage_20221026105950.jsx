import React, { useState, useEffect,createContext } from 'react'
import { Row, Col, Input, Button } from 'antd'
import { useFormik } from "formik"

import { createAuthorAPI } from '../redux/authorAPI.js'
import { getAllAuthorsAPI } from '../redux/authorAPI.js'
import { updateAuthorAPI } from '../redux/authorAPI.js'
import { deleteAuthorAPI } from '../redux/authorAPI.js'

import { useSelector, useDispatch } from 'react-redux'
import { Radio, Space, Table, Tag, Modal } from 'antd';
import setAuthToken from '../untils/setAuthToken.js'


const AdminAuthorPage = () => {
  

  const columns = [
    {
      title: 'Avatar',
      key: 'avatarUrl',
      render: (_, record) => (
        <Space size="middle">
          <img
            className="w-[80px] h-[80px] object-cover rounded-[10px]"
            src={record.avatarUrl}
            alt=""
          />
        </Space>
      ),
    },
    {
      title: 'Tên tác giả',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },

    {
      title: 'Năm sinh',
      dataIndex: 'birthDate',
      key: 'birthDate',

    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        
        <Space size="middle">
          <a onClick={()=>showUpdateModal(record._id)}>Edit {record._id}</a>
          <a onClick={()=>showDeleteModal}>Delete</a>

          <Modal title="Alert " visible={isDeleteModalVisible} onOk={() => DeleteAuthor(record._id)} onCancel={handleDeleteCancel}>
            <p className='text-red-600'>Are you want to delete this blog?</p>
            <p>{record._id}</p>
          </Modal>

          <Modal title="Update" visible={isUpdateModalVisible} onOk={() => UpdateAuthor(record._id)} onCancel={handleUpdateCancel}>
            <form className='flex flex-col gap-2'>
              <Input
                type="text"
                placeholder="fullName"

                id="fullName"
                name='fullName'
                value={modalFormik.values.fullName}
                onChange={modalFormik.handleChange}
                required
                style={{
                  height: 45,
                  borderRadius: 5
                }}
              />
              <Input
                type="text"
                placeholder="address"

                id="address"
                name='address'
                value={modalFormik.values.address}
                onChange={modalFormik.handleChange}
                required
                style={{
                  height: 45,
                  borderRadius: 5
                }}
              />
              <Input
                type="text"
                placeholder="avatarUrl"

                id="avatarUrl"
                name='avatarUrl'
                value={modalFormik.values.avatarUrl}
                onChange={modalFormik.handleChange}
                required
                style={{
                  height: 45,
                  borderRadius: 5
                }}
              />
              <Input
                type="text"
                placeholder="birthDate"

                id="birthDate"
                name='birthDate'
                value={modalFormik.values.birthDate}
                onChange={modalFormik.handleChange}
                required
                style={{
                  height: 45,
                  borderRadius: 5
                }}
              />
              <img className="w-full h-[280px] object-cover" src={modalFormik.values.avatarUrl} alt="" />
              <p>{modalFormik.values._id}</p>
            </form>
          </Modal>
        </Space>
      ),
    },
  ];

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };
  const handleDeleteOk = () => {
    setIsDeleteModalVisible(false);
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };

  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const showUpdateModal = (_id) => {
    
    modalFormik.values._id = _id
    setIsUpdateModalVisible(true);
    
  };
  const handleUpdateOk = () => {
    setIsUpdateModalVisible(false);
    modalFormik.values = ""
  };
  const handleUpdateCancel = () => {
    setIsUpdateModalVisible(false);
    modalFormik.values = ""
  };

  const accessToken = useSelector((state) => state.auth.accessToken)
  const data = useSelector((state) => state.author.authors)

  const dispatch = useDispatch()

  const modalFormik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      avatarUrl: "",
      birthDate: "",
      _id: "asdas"
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

  const UpdateAuthor = async (authorId) => {
    try {
      console.log("in update author", authorId)
      // const response = await updateAuthorAPI(modalFormik.values, authorId, dispatch)
      // alert(response)
      modalFormik.resetForm()
    } catch (error) {
      console.log(error)
    }
    handleUpdateOk()
  }

  const DeleteAuthor = async (authorId) => {
    try {
      console.log("in delete author", authorId)
      const response = await deleteAuthorAPI(authorId, dispatch)
      alert(response.message)
    } catch (error) {
      console.log(error)
    }
    handleDeleteOk()
  }

  useEffect(() => {
    setAuthToken(accessToken)
    getAllAuthorsAPI(dispatch)
  }, [])

  let AvataUrl
  if (formik.values.avatarUrl === "") {
    AvataUrl = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
  } else
    AvataUrl = formik.values.avatarUrl

  return (
    <div className='bg-[#ecf0f1] w-[1430px] h-[5000px] ml-[256px] p-[40px] flex flex-col items-center'>

      <div className="font-bold text-xl">
        QUẢN LÝ TÁC GIẢ
      </div>

      <div className="bg-white w-full p-[50px] drop-shadow-lg rounded-md">
        <div className="text-lg font-bold">
          Thêm tác giả
        </div>
        <form onSubmit={formik.handleSubmit} className=''>
          <Row>
            <Col span={12}>
              <div className="flex flex-col items-center">
                <div className="font-bold">Ảnh tác giả</div>
                <div className="bg-white rounded-[100px]">
                  <img
                    className="w-[400px] h-[400px] object-cover rounded-[5px]"
                    src={AvataUrl}
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="flex flex-col gap-2">
                <div className="font-bold">Tên tác giả:</div>
                <Input
                  type="text"
                  placeholder="Tên tác giả"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="fullName"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                />
                <div className="font-bold">Địa chỉ:</div>
                <Input
                  type="text"
                  placeholder="Địa chỉ"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
                <div className="font-bold">Link hình ảnh:</div>
                <Input
                  type="text"
                  placeholder="Đường dẫn hình ảnh"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="avatarUrl"
                  name="avatarUrl"
                  value={formik.values.avatarUrl}
                  onChange={formik.handleChange}
                />
                <div className="font-bold">Năm sinh:</div>
                <Input
                  type="text"
                  placeholder="Năm sinh"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="birthDate"
                  name="birthDate"
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                />
                <div className="font-bold text-red-500">* 4 thông tin trên đều bắt buộc phải có đủ</div>
                <button
                  type="submit"
                  className="bg-blue-500 w-full h-[45px] text-white rounded-[10px] mt-3"
                >
                  Thêm tác giả
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </div>

      <div className='bg-white w-full p-[50px] drop-shadow-lg rounded-md mt-[20px]'>

        <div className="text-lg font-bold">
          Tất cả tác giả
        </div>

        <div className="border border-zinc-300 w-full rounded-t-md p-[10px] text-base mt-[45px]">
          <Table
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>

    </div>
  )
}

export default AdminAuthorPage