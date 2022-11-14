import React, { useState, useEffect,createContext } from 'react'
import { Row, Col, Input, Button } from 'antd'
import { useFormik } from "formik"

import { createCategoryAPI } from '../redux/categoryAPI.js'
import { getAllCategoriesAPI } from '../redux/categoryAPI.js'
import { updateCategoryAPI } from '../redux/categoryAPI.js'
import { deleteCategoryAPI } from '../redux/categoryAPI.js'

import { useSelector, useDispatch } from 'react-redux'
import { Radio, Space, Table, Tag, Modal } from 'antd';
import setAuthToken from '../untils/setAuthToken.js'


const AdminCategoryPage = () => {
  
  const columns = [  
    {
      title: 'Thể loại',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        
        <Space size="middle">
          <a onClick={()=>showUpdateModal(record._id)}>Edit</a>
          <a onClick={()=>showDeleteModal(record._id)}>Delete</a>

          <Modal title="Alert " visible={isDeleteModalVisible} onOk={() => DeleteAuthor(modalFormik.values._id)} onCancel={handleDeleteCancel}>
            <p className='text-red-600'>Are you want to delete this category?</p>
          </Modal>

          <Modal title="Update" visible={isUpdateModalVisible} onOk={() => UpdateAuthor(modalFormik.values._id)} onCancel={handleUpdateCancel}>
            <form className='flex flex-col gap-2'>
              <Input
                type="text"
                placeholder="Category"

                id="name"
                name='name'
                value={modalFormik.values.name}
                onChange={modalFormik.handleChange}
                required
                style={{
                  height: 45,
                  borderRadius: 5
                }}
              />
              <Input
                type="text"
                placeholder="Description"

                id="description"
                name='description'
                value={modalFormik.values.description}
                onChange={modalFormik.handleChange}
                required
                style={{
                  height: 45,
                  borderRadius: 5
                }}
              />
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

  const accessToken = useSelector((state) => state.auth.accessToken)
  const data = useSelector((state) => state.category.categories)
  console.log(data)
  const dispatch = useDispatch()

  const modalFormik = useFormik({
    initialValues: {
      name: "",
      description: "",
      _id: ""
    }
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      description: ""
    },
    onSubmit: async (values) => {
      try {
        const response = await createCategoryAPI(values, dispatch)
        alert(response.message)
      } catch (error) {
        console.log(error)
      }
    }
  })

  const UpdateAuthor = async (authorId) => {
    try {
      console.log("in update author", authorId)
      const response = await updateCategoryAPI(modalFormik.values, authorId, dispatch)
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
      const response = await deleteCategoryAPI(authorId, dispatch)
      alert(response.message)
    } catch (error) {
      console.log(error)
    }
    handleDeleteOk()
  }

  useEffect(() => {
    setAuthToken(accessToken)
    getAllCategoriesAPI(dispatch)
  }, [])

  return (
    <div className='bg-[#ecf0f1] w-[1263px] h-[5000px] ml-[256px] p-[40px] flex flex-col items-center'>

      <div className="font-bold text-xl">
        QUẢN LÝ THỂ LOẠI
      </div>

      <div className="bg-white w-full p-[50px] drop-shadow-lg rounded-md">
        <div className="text-lg font-bold">
          Thêm thể loại
        </div>
        <form onSubmit={formik.handleSubmit} className=''>
          <Row>
            
            <Col span={24}>
              <div className="flex flex-col gap-2">
                <div className="font-bold">Thể loại:</div>
                <Input
                  type="text"
                  placeholder="Thể loại"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <div className="font-bold">Mô tả chi tiết:</div>
                <Input
                  type="text"
                  placeholder="Mô tả chi tiết"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
                
                <div className="font-bold text-red-500">* 2 thông tin trên đều bắt buộc phải có đủ</div>
                <button
                  type="submit"
                  className="bg-blue-500 w-full h-[45px] text-white rounded-[10px] mt-3"
                >
                  Thêm thể loại
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </div>

      <div className='bg-white w-full p-[50px] drop-shadow-lg rounded-md mt-[20px]'>

        <div className="text-lg font-bold">
          Tất cả các thể loại hiện có
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

export default AdminCategoryPage