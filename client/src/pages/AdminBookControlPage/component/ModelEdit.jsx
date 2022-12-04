import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

//api
import { deleteBookAPI, updateBookAPI } from '../../../redux/bookAPI'

//antd core
import { Row, Col, Input, Select, Space, Modal } from 'antd'


export default function ModelEdit({ record, modalFormik, categories, authors }) {
  // console.log("recode", record)
  const dispatch = useDispatch()

  //useState
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  //funtion
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
  //delete, update
  const DeleteAuthor = async (authorId) => {
    try {
      console.log("in delete author", authorId)
      const response = await deleteBookAPI(authorId, dispatch)
      alert(response.message)
    } catch (error) {
      console.log(error)
    }
    handleDeleteOk()
  }
  const UpdateAuthor = async (authorId) => {
    try {
      console.log("in update author", authorId)
      const response = await updateBookAPI(modalFormik.values, authorId, dispatch)
      alert(response)
      modalFormik.resetForm()
    } catch (error) {
      console.log(error)
    }
    handleUpdateOk()
  }
  return (
    <Space size="middle">
      <a onClick={() => showUpdateModal(record._id)}>Edit</a>
      <a onClick={() => showDeleteModal(record._id)}>Delete</a>

      <Modal title="Confirm delete book" visible={isDeleteModalVisible} onOk={() => DeleteAuthor(modalFormik.values._id)} onCancel={handleDeleteCancel}>
        <p className='text-red-600'>Are you want to delete this book?</p>
      </Modal>

      <Modal title="Update book modal" visible={isUpdateModalVisible} onOk={() => UpdateAuthor(modalFormik.values._id)} onCancel={handleUpdateCancel} width={1100}>
        <form onSubmit={modalFormik.handleSubmit} className=''>
          <Row>
            <Col span={10}>
              <div className="flex flex-col items-center">
                <div className="font-bold">Bìa sách</div>
                <div className="bg-white rounded-[100px]">
                  <img
                    className="w-[400px] h-[400px] object-cover rounded-[5px]"
                    src={modalFormik.values.coverUrl ? modalFormik.values.coverUrl : "https://i.pinimg.com/736x/9f/d2/8f/9fd28f44bd39b185c23be01a820cbb2d.jpg"}
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
                  value={modalFormik.values.name}
                  onChange={modalFormik.handleChange}
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
                  value={modalFormik.values.coverUrl}
                  onChange={modalFormik.handleChange}
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
                  value={modalFormik.values.description}
                  onChange={modalFormik.handleChange}
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
                  value={modalFormik.values.pages}
                  onChange={modalFormik.handleChange}
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
                  value={modalFormik.values.publishedBy}
                  onChange={modalFormik.handleChange}
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
                  value={modalFormik.values.price}
                  onChange={modalFormik.handleChange}
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
                  value={modalFormik.values.publishedDate}
                  onChange={modalFormik.handleChange}
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
                  onChange={(value) => modalFormik.setFieldValue("category", value)}
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
                  onChange={(value) => modalFormik.setFieldValue("author", value)}
                  options={authors.map((value, index) => ({
                    key: index,
                    label: value.fullName,
                    value: value._id,
                  }))}
                />
                <div className="font-bold text-red-500">*Tất cả thông tin trên đều bắt buộc phải có</div>
              </div>
            </Col>
          </Row>
        </form>


      </Modal>
    </Space>
  )
}
