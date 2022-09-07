import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Modal } from "antd"
import { pathName } from '../router/pathName';
import React, { useState, useContext } from 'react';

import { useFormik } from 'formik';
import * as Yup from "yup";

const { Search } = Input

const NavigateRouter = [
  {
    path: 'asdasdasd',
    name: "Thời sự",
  },

];

const TopBarComponent = () => {

  return (

    <div className="bg-[#ecf0f1] border-b border-slate-300">
      <Row>

        <Col span={8}>
          <div className="flex justify-start items-center text-[20px] gap-2 h-20 ml-[20px]">
          <span className="text-[16px]">Follow us</span>
            <i className="fa-brands fa-facebook-square cursor-pointer"></i>
            <i className="fa-brands fa-twitter-square cursor-pointer"></i>
            <i className="fa-brands fa-instagram-square cursor-pointer"></i>
            <i className="fa-brands fa-pinterest-square cursor-pointer"></i>
          </div>
        </Col>

        <Col span={8}>
          <div className="flex justify-center items-center text-[20px] h-20">
            <Search size="large" placeholder="input search text" onSearch={''} enterButton />
          </div>
        </Col>

        <Col span={8}>
          <div className="flex justify-end items-center text-[15px] gap-2 h-20 mr-[20px]">
            <Link to={pathName.login}>
              Login
            </Link>
            <span className="text-[#1890ff]">/</span>
            <Link to={pathName.register}>
              Register
            </Link>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default TopBarComponent