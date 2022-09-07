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

    <div className="bg-[#ecf0f1]">
      <Row>
        <Col span={6}>
          <div className="flex justify-center items-center text-[20px] gap-2 h-14">
            <i className="fa-brands fa-facebook-square cursor-pointer"></i>
            <i className="fa-brands fa-twitter-square cursor-pointer"></i>
            <i className="fa-brands fa-instagram-square cursor-pointer"></i>
            <i className="fa-brands fa-pinterest-square cursor-pointer"></i>
          </div>
        </Col>
        <Col span={12}>
          <Input placeholder="input search text" onSearch={''} enterButton />
        </Col>
        <Col span={6}>

        </Col>
      </Row>
    </div>
  )
}

export default TopBarComponent