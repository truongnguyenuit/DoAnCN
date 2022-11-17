import React, { useState, useEffect, createContext } from 'react'
import { Row, Col, Input, Button, Select } from 'antd'
import { useFormik } from "formik"

import { createAuthorAPI } from '../redux/authorAPI.js'
import { getAllAuthorsAPI } from '../redux/authorAPI.js'
import { updateAuthorAPI } from '../redux/authorAPI.js'
import { deleteAuthorAPI } from '../redux/authorAPI.js'

import { getAllBooksAPI } from '../redux/bookAPI.js'
import { createBookAPI } from '../redux/bookAPI.js'
import { updateBookAPI } from '../redux/bookAPI.js'
import { deleteBookAPI } from '../redux/bookAPI.js'

import { useSelector, useDispatch } from 'react-redux'
import { Space, Table, Modal } from 'antd';
import setAuthToken from '../untils/setAuthToken.js'

const AdminBookControlPage = () => {

  const accessToken = useSelector((state) => state.auth.accessToken)
  const data = useSelector((state) => state.book.books)

  const categories = useSelector((state) => state.category.categories)
  const authors = useSelector((state) => state.author.authors)

  const dispatch = useDispatch()

  const columns = [
    {
      title: 'Ảnh bìa',
      key: 'coverUrl',
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
      title: 'Tên sách',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },

    {
      title: 'Số trang',
      dataIndex: 'pages',
      key: 'pages',

    },
    {
      title: 'Xuất bản bởi',
      dataIndex: 'publishedBy',
      key: 'publish',

    },
    {
      title: 'Giá',
      dataIndex: 'birthDate',
      key: 'birthDate',

    },
    {
      title: 'Ngày xuất bản',
      dataIndex: 'birthDate',
      key: 'birthDate',

    },
    {
      title: 'Thể loại',
      dataIndex: 'birthDate',
      key: 'birthDate',

    },
    {
      title: 'Tác giả',
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
      name: "",
      coverUrl: "",
      description: "",
      pages: "",
      publishedBy: "",
      price: "",
      publishedDate: "",
      category: "",
      author: ""
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
        const response = await createBookAPI(values, dispatch)
        alert(response.message)
        console.log(response)
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
    getAllBooksAPI(dispatch)
    console.log(data)
  }, [])

  let AvataUrl
  if (formik.values.coverUrl === "") {
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
                  placeholder="Tên sách"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <div className="font-bold">Link ảnh bìa</div>
                <Input
                  type="text"
                  placeholder="Link ảnh bìa"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="coverUrl"
                  name="coverUrl"
                  value={formik.values.coverUrl}
                  onChange={formik.handleChange}
                />
                <div className="font-bold">Mô tả</div>
                <Input
                  type="text"
                  placeholder="Mô tả sơ qua"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
                <div className="font-bold">Số trang</div>
                <Input
                  type="text"
                  placeholder="Số trang"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="pages"
                  name="pages"
                  value={formik.values.pages}
                  onChange={formik.handleChange}
                />
                <div className="font-bold">Nhà xuất bản</div>
                <Input
                  type="text"
                  placeholder="Nhà xuất bản"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="publishedBy"
                  name="publishedBy"
                  value={formik.values.publishedBy}
                  onChange={formik.handleChange}
                />
              </div>
            </Col>
            <Col span={7}>
              <div className="flex flex-col gap-2 p-[10px]">
                <div className="font-bold">Giá tiền</div>
                <Input
                  type="text"
                  placeholder="Giá tiền"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="price"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                />
                <div className="font-bold">Ngày phát hành</div>
                <Input
                  type="text"
                  placeholder="Ngày phát hành"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="publishedDate"
                  name="publishedDate"
                  value={formik.values.publishedDate}
                  onChange={formik.handleChange}
                />
                <div className="font-bold">Thể loại</div>
                <Select
                  defaultValue="Thể loại sách"
                  style={{
                    width: 300,
                    height: 45,
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  id="category"
                  name="category"
                  onChange={(value) => formik.setFieldValue("category", value)}
                  options={categories.map((value, index) => ({
                    key: index,
                    label: value.name,
                    value: value._id,
                  }))}
                />
                <div className="font-bold">Tác giả</div>
                <Select
                  defaultValue="Tác giả sách"
                  style={{
                    width: 300,
                    height: 45,
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  id="author"
                  name="author"
                  onChange={(value) => formik.setFieldValue("author", value)}
                  options={authors.map((value, index) => ({
                    key: index,
                    label: value.fullName,
                    value: value._id,
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
           
          />
        </div>
      </div>

    </div>
  )
}

export default AdminBookControlPage