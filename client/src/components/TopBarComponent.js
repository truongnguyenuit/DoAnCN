import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Modal, Select } from "antd"
import { pathName } from '../router/pathName';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { updateAuthorCurrent } from "../redux/bookSlice";
import { updateCategoryCurrent } from "../redux/bookSlice";
import { updateBookNameCurrent } from "../redux/bookSlice";
import { updateBooksFilter } from "../redux/bookSlice";

import { useFormik } from "formik";

const TopBarComponent = () => {
  const authors = useSelector((state) => state.author.authors)
  const categories = useSelector((state) => state.category.categories)
  const books = useSelector((state) => state.book.books)
  const booksFilter = useSelector((state) => state.book.booksFilter)

  // const bookNameCurrent = useSelector((state) => state.book.bookNameCurrent)

  const formik = useFormik({
    initialValues: {
      bookName: '',
    },
    onSubmit: async (values) => {
      try {
        dispatch(updateBookNameCurrent(values.bookName))
        dispatch(updateBooksFilter())
      }
      catch (error) {
        console.log(error)
      }
    }
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateCategoryCurrent(''))
    dispatch(updateAuthorCurrent(''))
    dispatch(updateBookNameCurrent(''))
  }, [])

  return (

    <div className="bg-[#E8F1FF] border-b border-slate-300">
      <Row>

        <Col span={5}>
          <div className="flex justify-start items-center text-[20px] gap-2 h-20 ml-[20px]">
            {/* <span className="text-[15px]">Follow us</span> */}
            <i className="fa-brands fa-facebook-square cursor-pointer"></i>
            <i className="fa-brands fa-twitter-square cursor-pointer"></i>
            <i className="fa-brands fa-instagram-square cursor-pointer"></i>
            <i className="fa-brands fa-pinterest-square cursor-pointer"></i>
          </div>
        </Col>

        <Col span={14}>
          <div className="flex justify-center items-center text-[20px] h-20 w-full">

            <Select
              defaultValue="Tác giả"
              style={{
                width: '20%',
              }}
              onChange={(value) =>
                dispatch(updateAuthorCurrent(value))

              }
              options={authors.map((value, index) => ({
                key: index,
                label: value.fullName,
                value: value._id,
              }))}
            />


            <Select
              defaultValue="Thể loại"
              style={{
                width: '23%',
              }}
              onChange={(value) => dispatch(updateCategoryCurrent(value))}
              options={categories.map((value, index) => ({
                key: index,
                label: value.name,
                value: value._id,
              }))}
            />
            <form onSubmit={formik.handleSubmit} className='flex flex-row justify-center items-center w-4/5'>
              <Input
                type="text"
                placeholder="Tên sách bạn cần tìm"
                style={{
                  height: 32,
                  borderRadius: 2,
                  width: '100%'
                }}

                id="bookName"
                name="bookName"
                value={formik.values.bookName}
                onChange={formik.handleChange}
              />
              <button
                type="submit"
                className="bg-blue-500 w-2/5 h-[31px] text-white rounded-[2px] flex justify-center items-center"
              >
                <span className="text-sm ">Tìm sách</span>
              </button>
            </form>

          </div>
        </Col>

        <Col span={5}>
          <div className="flex justify-end items-center text-[15px] gap-2 h-20 mr-[20px]">
            <Link to={pathName.login}>
              Đăng nhập
            </Link>
            <span className="text-[#1890ff]">/</span>
            <Link to={pathName.register}>
              Đăng ký
            </Link>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default TopBarComponent