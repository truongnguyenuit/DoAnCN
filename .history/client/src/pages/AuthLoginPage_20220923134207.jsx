import React from 'react'
import { Button, Input, Row, Col } from "antd";
import { pathName } from "../router/pathName";
import { Link } from "react-router-dom";
import { loginUser } from '../redux/authAPI';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from "yup";

const AuthLoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required").min(4, "Must be 4 character or more"),
      password: Yup.string().required("Password is required").min(4, "Must be 4 character or more"),
    }),
    onSubmit: async (values) => {
      try {
        const loginData = await loginUser(values, dispatch, navigate)
        console.log(loginData)
        alert(loginData.message)

      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div className='mt-[80px] flex justify-center bg-[#ecf0f1] h-[1000px]'>
      <div className="bg-white w-[450px] flex flex-col items-center drop-shadow-lg p-8 mt-10 ml-72 h-fit rounded-md">

        <span className="text-[40px] font-thin">
          LOGIN
        </span>

        <span className="text-[17px] font-thin">
        Bring books to your house
        </span>

        <div className="w-full h-[15px]" />

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
            {formik.errors.username && (
            <p className='text-red-600 m-0 p-0'>{formik.errors.username}</p>
          )}
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
            {formik.errors.password && (
            <p className='text-red-600 m-0'>{formik.errors.password}</p>
          )}
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
      </div>

    </div>
  )
}

export default AuthLoginPage