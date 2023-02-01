
import { Row, Col, Input, Select, Space, Table, Button } from 'antd'
import React, { useEffect } from 'react'
import { useFormik } from "formik"
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../redux/authAPI'
import { changePassword } from '../redux/authAPI'
import { logOutUser } from '../redux/authAPI'
import setAuthToken from '../untils/setAuthToken'
import { useNavigate } from 'react-router-dom'
const settingPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const accessToken = useSelector((state) => state.auth.accessToken)
  const user = useSelector((state) => state.auth.user)

  const formik = useFormik({
    initialValues: {
      realname: user.realname,
      username: user.username,
      email: user.email,
      img: user.img,
      telephoneNumber: user.telephoneNumber,
      address: user.address
    },
    onSubmit: async (values) => {
      console.log(values)
      const response = await updateUser(values, dispatch);
      alert(response)
    }
  })

  const passwordFormik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    onSubmit: async (values) => {
      const response = await changePassword(values)
      alert(response.message)
    }
  })

  useEffect(() => {
    setAuthToken(accessToken)
  }, [])


  return (
    <div className='h-[920px] bg-[#ecf0f1] mt-[80px] ml-[300px]'>

      <div className="pl-[200px] pt-[50px]">
        <Row>
          <div className="flex flex-col">
            <span className="font-bold text-lg">Hồ sơ của tôi</span>
            <span className="text-sm">Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
          </div>
        </Row>

        <form onSubmit={formik.handleSubmit}>
          <Row className='pl-[50px] pt-[50px] pb-[50px]'>
            <Col span={12} >
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center">
                  <span className='w-[100px] text-sm'>Tên bạn:</span>
                  <Input
                    type="text"
                    placeholder="Tên của bạn"
                    style={{
                      height: 45,
                      borderRadius: 5
                    }}

                    id="realname"
                    name="realname"
                    value={formik.values.realname}
                    onChange={formik.handleChange}></Input>
                </div>
                <div className="flex flex-row items-center">
                  <span className="w-[100px] text-sm">Tài khoản:</span>
                  <Input
                    type="text"
                    placeholder="Tài khoản của bạn"
                    style={{
                      height: 45,
                      borderRadius: 5
                    }}

                    id="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}></Input>

                </div>
                <div className="flex flex-row items-center">
                  <span className="w-[100px] text-sm">Email:</span>
                  <Input
                    type="text"
                    placeholder="Email của bạn"
                    style={{
                      height: 45,
                      borderRadius: 5
                    }}

                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}></Input>
                </div>
                <div className="flex flex-row items-center">
                  <span className="w-[100px] text-sm">Link ảnh:</span>
                  <Input
                    type="text"
                    placeholder="Url hình ảnh"
                    style={{
                      height: 45,
                      borderRadius: 5
                    }}

                    id="img"
                    name="img"
                    value={formik.values.img}
                    onChange={formik.handleChange}></Input>
                </div>
                <div className="flex flex-row items-center">
                  <span className="w-[100px] text-sm">Số điện thoại:</span>
                  <Input
                    type="text"
                    placeholder="Số điện thoại của bạn"
                    style={{
                      height: 45,
                      borderRadius: 5
                    }}

                    id="telephoneNumber"
                    name="telephoneNumber"
                    value={formik.values.telephoneNumber}
                    onChange={formik.handleChange}></Input>
                </div>
                <div className="flex flex-row items-center">
                  <span className="w-[100px] text-sm">Địa chỉ:</span>
                  <Input
                    type="text"
                    placeholder="Địa chỉ của bạn"
                    style={{
                      height: 45,
                      borderRadius: 5
                    }}

                    id="address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}></Input>
                </div>
                <div className="flex flex-row items-center justify-center gap-[50px]">
                  <button type="submit" className='bg-blue-500 w-[200px] h-[45px] text-white rounded-[5px] mt-3'>Đổi thông tin</button>
                </div>
              </div>
            </Col>
            <Col span={5}>
              <div className="pl-[20px] rounded-[100px]">
                <img
                  className="w-[150px] h-[150px] object-cover rounded-[5px]"
                  src={formik.values.img ? formik.values.img : 'https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-12.jpg'}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </form>

        <Row>
          <Col>
            <div className="flex flex-col">
              <span className='font-bold text-lg'>Quản lý mật khẩu</span>
              <span className='text-sm'>Đổi mật khẩu</span>
            </div>
          </Col>
        </Row>

        <form onSubmit={passwordFormik.handleSubmit}>
          <Row className='pl-[50px] pt-[50px] pb-[50px]'>
            <Col span={15} >
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center">
                  <span className='w-[200px] text-sm'>Mật khẩu hiện tại:</span>
                  <Input
                    type="text"
                    placeholder="Mật khẩu hiện tại của bạn"
                    style={{
                      height: 45,
                      borderRadius: 5
                    }}

                    id="oldPassword"
                    name="oldPassword"
                    value={passwordFormik.values.oldPassword}
                    onChange={passwordFormik.handleChange}></Input>
                </div>
                <div className="flex flex-row items-center">
                  <span className="w-[200px] text-sm">Mật khẩu mới:</span>
                  <Input
                    type="text"
                    placeholder="Mật khẩu mới"
                    style={{
                      height: 45,
                      borderRadius: 5
                    }}

                    id="newPassword"
                    name="newPassword"
                    value={passwordFormik.values.newPassword}
                    onChange={passwordFormik.handleChange}></Input>
                </div>
                <div className="flex flex-row items-center">
                  <span className="w-[200px] text-sm">Nhập lại mật khẩu mới:</span>
                  <Input
                    type="text"
                    placeholder="Nhập lại mật khẩu mới"
                    style={{
                      height: 45,
                      borderRadius: 5
                    }}

                    id="confirmPassword"
                    name="confirmPassword"
                    value={passwordFormik.values.confirmPassword}
                    onChange={passwordFormik.handleChange}></Input>
                </div>
                <div className="flex flex-row items-center justify-center gap-[50px]">
                  <button type="submit" className='bg-blue-500 w-[200px] h-[45px] text-white rounded-[5px] mt-3'>Đổi thông tin</button>
                  <button
                    className='bg-blue-500 w-[200px] h-[45px] text-white rounded-[5px] mt-3'
                    onClick={() => {
                      logOutUser(dispatch, navigate)
                    }}
                  >Đăng xuất</button>
                </div>
              </div>
            </Col>
            <Col span={5}>

            </Col>
          </Row>
        </form>

      </div>

    </div>
  )
}

export default settingPage