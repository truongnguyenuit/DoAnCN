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
    path: pathName.home,
    name: "Thời sự",
  },
  {
    path: pathName.myBlog,
    name: "Góc nhìn",
  },
  {
    path: pathName.search,
    name: "Thế giới"
  },
  {
    path: pathName.setting,
    name: "Video",
  },
  {
    path: pathName.createPost,
    name: "Podcasts",
  },
  {
    path: pathName.logout,
    name: "Kinh doanh",
  },
  {
    path: pathName.logout,
    name: "Khoa học",
  },
  {
    path: pathName.logout,
    name: "Giải trí",
  },
  {
    path: pathName.logout,
    name: "Thể thao",
  },
  {
    path: pathName.logout,
    name: "Pháp luật",
  },
  {
    path: pathName.logout,
    name: "Giáo dục",
  },
  {
    path: pathName.logout,
    name: "Sức khỏe",
  },
  {
    path: pathName.logout,
    name: "Đời sống",
  },
  {
    path: pathName.logout,
    name: "Du lịch",
  },
  {
    path: pathName.logout,
    name: "Số hóa",
  },
  {
    path: pathName.logout,
    name: "Xe",
  },
  {
    path: pathName.logout,
    name: "Ý kiến",
  },
  {
    path: pathName.logout,
    name: "Tâm sự",
  },
  {
    path: pathName.logout,
    name: "Hài",
  },
];

const NavbarComponent = () => {
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  const showLoginModal = () => {
    setLoginModalVisible(true);
  };
  const handleLoginOk = () => {
    setLoginModalVisible(false);
  };
  const handleLoginCancel = () => {
    setLoginModalVisible(false);
  };
  const { loginUser } = useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      password: Yup.string().required("Required").min(4, "Must be 4 character or more"),
    }),
    onSubmit: async (values) => {
      try {
        const loginData = await loginUser(values)
        console.log(loginData)
        alert(loginData.message)

      } catch (error) {
        console.log(error)
      }
    }
  })
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
              onClick={showLoginModal}
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
      <Modal title="Đăng nhập cho Admin" visible={isLoginModalVisible} onOk={handleLoginOk} onCancel={handleLoginCancel}>
        <div className='flex justify-center items-center gap-[20px] mb-[30px]'>
          <img
            src="https://s1.vnecdn.net/vnexpress/restruct/i/v630/v2_2019/pc/graphics/logo.svg"
            alt=""
          />
        </div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 w-full">
          <Row>
            <div className="w-full h-full flex rounded-[8px] overflow-hidden">
              <Col span={4}>
                <div className="w-full h-full bg-stone-100 flex items-center justify-center">
                  <i className="fa-solid fa-user-large text-[20px] text-stone-500"></i>
                </div>
              </Col>
              <Col span={20}>

                <Input
                  type="text"
                  placeholder="Username"
                  style={{
                    height: 45,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}

                  id="username"
                  name='username'
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />

              </Col>
            </div>
          </Row>

          <Row>
            <div className="w-full h-full flex rounded-[8px] overflow-hidden">
              <Col span={4}>
                <div className="w-full h-full bg-stone-100 flex items-center justify-center">
                  <i className="fa-solid fa-lock text-[20px] text-stone-500"></i>
                </div>
              </Col>
              <Col span={20}>

                <Input.Password
                  placeholder="Password"
                  visibilityToggle={true}
                  style={{
                    height: 45,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}

                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Col>

            </div>
          </Row>

          <Row>
            <Col span={24}>
              <button
                type="submit"
                className="bg-blue-500 w-full h-[45px] text-white rounded-[10px]"
              >
                Login
              </button>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div className="w-full flex justify-between">
                <Link to={''}>Forgot Password?</Link>
                <Link to={pathName.register}>Create Account</Link>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div className="w-full h-[1px] p-0 bg-gray-200 relative">
                <p className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] px-2 bg-white">
                  Login by
                </p>
              </div>
            </Col>
          </Row>
          <div className="w-full h-[5px]" />
          <Row>
            <Col span={8}>
              <Button style={{ width: "90%" }}>
                <i className="fa-brands fa-facebook-f text-blue-500"></i>
                <span className="px-2">Facebook</span>
              </Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "90%" }}>
                <i className="fa-brands fa-google text-red-500"></i>
                <span className="px-2">Google</span>
              </Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "90%" }}>
                <i className="fa-brands fa-github"></i>
                <span className="px-2">Github</span>
              </Button>
            </Col>
          </Row>

        </form>
      </Modal>
    </div>
  )
}

export default NavbarComponent