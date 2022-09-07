import { Link } from "react-router-dom";
import { Row, Col, Button, Input, Modal } from "antd"
import { pathName } from '../router/pathName';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

import { useFormik } from 'formik';
import * as Yup from "yup";

const { Search } = Input

const NavigateRouter = [
  {
    path: 'asdasdasd',
    name: "Thời sự",
  },
  
];

const NavbarComponent = () => {
  
  return (

    <div className="bg-white">
      <Row>

        <Col span={12}>
          <div className='flex justify-center items-center gap-[20px] m-[12px]'>
            <img
              src="https://s1.vnecdn.net/vnexpress/restruct/i/v630/v2_2019/pc/graphics/logo.svg"
              alt=""
            />
            <span className='border-l-2 pl-[18px]'>Thứ năm, 4/8/2022</span>
          </div>
        </Col>

        <Col span={12}>
          <div className="flex justify-start items-center gap-[15px] m-[12px] ">
            <Button>
              <i class="fa-solid fa-clock-rotate-left mr-1 text-stone-400"></i>
              Mới nhất
            </Button>
            <Button>
              International
            </Button>

            <Search
              placeholder="Tìm kiếm"
              onSearch={''}
              style={{
                width: 200,
                borderRadius: 5
              }}
            />

            <i className="fa-solid fa-user-large text-[20px] text-stone-400"></i>
            <span
              className='hover:text-blue-500 cursor-pointer'
             } onClick={showLoginModal
            >
              Đăng nhập
            </span>
            <Button>
              <Link to={pathName.admin} className="text-stone-500 hover:text-stone-400">
                Admin
              </Link>
            </Button>
          </div>
        </Col>

      </Row>

      <Row className='border border-slate-200'>

        <Col span={2}>
          <div className='flex justify-end items-center text-[14px] font-semibold gap-4 h-14'>
          <Link to={pathName.home}>                 
                    
            <div className='bg-slate-300 w-[25px] h-[24px] flex justify-center items-center rounded-full hover:bg-red-500'>
              <i className="fa-solid fa-house text-slate-600 hover:text-white"></i>
            </div>
            </Link>
          </div>
        </Col>

        <Col span={20} className="h-14">
          <nav>
            <ul className="flex justify-center items-center text-[14px] font-semibold gap-3 h-14 ">
              {NavigateRouter.map((item, index) => {
                return (
                  <li key={index} className=" ">
                    <Link to={item.path} className="text-black hover:text-red-500 w-full">
                      {item.name}
                    </Link>
                  </li>
                );

              })}
            </ul>
          </nav>
        </Col>

        <Col span={2}>
          <div className='flex justify-start items-center text-[14px] font-semibold gap-2 h-14 text-slate-400 hover:text-red-500'>
            <Link to={''} className='text-slate-400 hover:text-red-500'>
              <p className='m-0 '>Tất cả</p>
            </Link>
            <i className="fa-solid fa-sliders"></i>
          </div>
        </Col>

      </Row>
      
    </div>
  )
}

export default NavbarComponent