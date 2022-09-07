import React from 'react'
import { pathName } from '../router/pathName';
import { Link } from 'react-router-dom';

import { Button, Input, Row, Col } from "antd";

import { useFormik } from "formik"
import * as Yup from "yup"

const AuthRegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      password: Yup.string().required("Required").min(4, "Must be 4 character or more"),
      confirmPassword: Yup.string().required("Required").min(4, "Must be 4 character or more")
    }),
    onSubmit: async (values) => {
      // if (values.password !== values.confirmPassword) {
      //   alert("Confirm password don't match password!")
      //   return
      // }
      // try {
      //   const registerData = await registerUser(values)
      //   alert(registerData.message)

      // } catch (error) {
      //   console.log(error)
      // }
    }
  })
  return (
    <div className='  mt-[80px] flex justify-center bg-[#ecf0f1] h-[1000px]'>

      <div className="bg-white w-[475px] flex flex-col items-center gap-0.5 drop-shadow-lg p-8 mt-10 ml-72 h-[500px] rounded-md">

        <span className="text-[50px] font-semibold">
          BLOG
        </span>
        <span className="text-[20px] font-medium">
          Register for Blog
        </span>
        <span className="text-[13px] font-thin">
          Welcome to BLOG, please create account to write blog and use easily!
        </span>
        <div className="w-full h-[5px]" />

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-1 w-full">

          <Row>
            <div className="w-full h-full flex rounded-[5px] overflow-hidden">
              <Col span={24}>
                <Input
                  type="text"
                  placeholder="Username"
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="username"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
              </Col>
            </div>
          </Row>
          {formik.errors.username && (
            <p className='text-red-600 m-0'>{formik.errors.username}</p>
          )}

          <Row>
            <div className="w-full h-full flex rounded-[5px] overflow-hidden">
              <Col span={24}>
                <Input.Password
                  placeholder="Password"
                  visibilityToggle={true}
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Col>
            </div>
          </Row>
          {formik.errors.password && (
            <p className='text-red-600 m-0'>{formik.errors.password}</p>
          )}

          <Row>
            <div className="w-full h-full flex rounded-[5px] overflow-hidden">
              <Col span={24}>
                <Input.Password
                  placeholder="Confirm Password"
                  visibilityToggle={true}
                  style={{
                    height: 45,
                    borderRadius: 5
                  }}

                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
              </Col>
            </div>
          </Row>
          {formik.errors.confirmPassword && (
            <p className='text-red-600 m-0'>{formik.errors.confirmPassword}</p>
          )}

          <Row>
            <Col span={24}>
              <button
                type="submit"
                className="bg-blue-500 w-full h-[45px] text-white rounded-[10px]"
              >
                Register
              </button>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div className="w-full flex justify-between">
                <Link to={''}>Forgot Password?</Link>
                <Link to={pathName.login}>Login</Link>
              </div>
            </Col>
          </Row>

          <div className="w-full h-[5px]" />

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

export default AuthRegisterPage