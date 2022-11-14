import React, { useState, useEffect, createContext } from 'react'
import { Row, Col, Input, Button, Select } from 'antd'
import { useFormik } from "formik"

import { createAuthorAPI } from '../redux/authorAPI.js'
import { getAllAuthorsAPI } from '../redux/authorAPI.js'
import { updateAuthorAPI } from '../redux/authorAPI.js'
import { deleteAuthorAPI } from '../redux/authorAPI.js'

import { useSelector, useDispatch } from 'react-redux'
import { Radio, Space, Table, Tag, Modal } from 'antd';
import setAuthToken from '../untils/setAuthToken.js'
import { render } from 'react-dom'

const AdminBookControlPage = () => {

  const accessToken = useSelector((state) => state.auth.accessToken)
  const data = useSelector((state) => state.author.authors)

  const categories = useSelector((state) => state.category.categories)
  const authors = useSelector((state) => state.author.authors)
  console.log(authors)
  const dispatch = useDispatch()

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

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
          <a onClick={() => showUpdateModal(record._id)}>Edit</a>
          <a onClick={() => showDeleteModal(record._id)}>Delete</a>

          <Modal title="Alert " visible={isDeleteModalVisible} onOk={() => DeleteAuthor(modalFormik.values._id)} onCancel={handleDeleteCancel}>
            <p className='text-red-600'>Are you want to delete this blog?</p>
          </Modal>

          <Modal title="Update" visible={isUpdateModalVisible} onOk={() => UpdateAuthor(modalFormik.values._id)} onCancel={handleUpdateCancel}>
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
            </form>
          </Modal>
        </Space>
      ),
    },
  ];

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showDeleteModal = (_id) => {
    modalFormik.values._id = _id
    setIsDeleteModalVisible(true);
  };
  const handleDeleteOk = () => {
    modalFormik.values._id = ""
    setIsDeleteModalVisible(false);
  };
  const handleDeleteCancel = () => {
    modalFormik.values._id = ""
    setIsDeleteModalVisible(false);
  };

  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const showUpdateModal = (_id) => {
    modalFormik.values._id = _id
    setIsUpdateModalVisible(true);
  };
  const handleUpdateOk = () => {
    modalFormik.values._id = ""
    setIsUpdateModalVisible(false);
  };
  const handleUpdateCancel = () => {
    modalFormik.values._id = ""
    setIsUpdateModalVisible(false);
  };

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
      name: "",
      coverUrl: "",
      description: "",
      pages: "",
      publishedBy: "",
      price: "",
      publishedDate: "",
      category: "",
      author: ""
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
      const response = await updateAuthorAPI(modalFormik.values, authorId, dispatch)
      alert(response)
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
    AvataUrl = "https://i.pinimg.com/736x/9f/d2/8f/9fd28f44bd39b185c23be01a820cbb2d.jpg"
  } else
    AvataUrl = formik.values.avatarUrl

  return (
    <div className='bg-[#ecf0f1] w-[1263px] h-[5000px] ml-[256px] p-[40px] flex flex-col items-center'>

      <div className="font-bold text-xl">
        QUẢN LÝ SÁCH
      </div>

      <div className="bg-white w-full p-[50px] drop-shadow-lg rounded-md">
        <div className="text-lg font-bold">
          Thêm sách
        </div>
        <form onSubmit={formik.handleSubmit} className=''>
          <Row>
            <Col span={10}>
              <div className="flex flex-col items-center">
                <div className="font-bold">Bìa sách</div>
                <div className="bg-white rounded-[100px]">
                  <img
                    className="w-[400px] h-[400px] object-cover rounded-[5px]"
                    src={AvataUrl}
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col span={7}>
              <div className="flex flex-col gap-2 p-[10px]">
                <div className="font-bold">Tên sách:</div>
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
                <div className="font-bold">Link ảnh bìa</div>
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
                <div className="font-bold">Mô tả</div>
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
                <div className="font-bold">Số trang</div>
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
                <div className="font-bold">Nhà xuất bản</div>
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
              </div>
            </Col>
            <Col span={7}>
              <div className="flex flex-col gap-2 p-[10px]">
                <div className="font-bold">Giá tiền</div>
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
                <div className="font-bold">Ngày phát hành</div>
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
                <div className="font-bold">Thể loại</div>
                <Select
                  defaultValue="lucy"
                  style={{
                    width: 150,
                    height: 45,
                  }}
                  onChange={handleChange}
                  options={categories.map((value) => ({
                    label: value.name,
                    value: value.name,
                  }))}
                />
                <div className="font-bold">Tác giả</div>
                <Select
                  defaultValue="lucy"
                  style={{
                    width: 120,
                    height: 45,
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onChange={handleChange}
                  options={authors.map((value) => ({
                    label: value.fullName,
                    value: value.fullName,
                  }))}
                />
                <div className="font-bold text-red-500">*Tất cả thông tin trên đều bắt buộc phải có</div>
                <button
                  type="submit"
                  className="bg-blue-500 w-full h-[45px] text-white rounded-[10px] "
                >
                  Thêm sách
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

export default AdminBookControlPage