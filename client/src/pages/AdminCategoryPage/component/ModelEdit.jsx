import React from 'react'
import { Space, Modal, Input } from 'antd';
import { useState } from 'react';
import { updateCategoryAPI } from '../../../redux/categoryAPI';
import { deleteCategoryAPI } from '../../../redux/categoryAPI';
import { useDispatch } from 'react-redux';

const ModelEdit = ({ record, modalFormik }) => {
  const dispatch = useDispatch()
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
  return (
    <Space size="middle">
      <a onClick={() => showUpdateModal(record._id)}>Edit</a>
      <a onClick={() => showDeleteModal(record._id)}>Delete</a>

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
  )
}

export default ModelEdit