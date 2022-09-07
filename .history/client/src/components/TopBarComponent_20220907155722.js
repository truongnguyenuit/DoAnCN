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
        
      </Row>
    </div>
  )
}

export default TopBarComponent