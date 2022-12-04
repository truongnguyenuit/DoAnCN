import React from 'react'
import { Space, Modal, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { updateAuthorAPI } from '../../../redux/authorAPI';
import { deleteAuthorAPI } from '../../../redux/authorAPI';

const ModelEdit = ({ record, modalFormik}) => {

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
  return (
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
            value={modalFormik?.values?.fullName}
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
            value={modalFormik.values?.address}
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
            value={modalFormik.values?.avatarUrl}
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
            value={modalFormik.values?.birthDate}
            onChange={modalFormik.handleChange}
            required
            style={{
              height: 45,
              borderRadius: 5
            }}
          />
          <img className="w-full h-[280px] object-cover" src={modalFormik.values?.avatarUrl} alt="" />
        </form>
      </Modal>
    </Space>
  )
}

export default ModelEdit