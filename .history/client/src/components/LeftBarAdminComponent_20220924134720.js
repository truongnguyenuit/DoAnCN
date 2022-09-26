import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu, Spin } from 'antd'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
  EyeOutlined,
  CheckOutlined,
  AreaChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
  DownloadOutlined
} from '@ant-design/icons'
import { pathName } from '../router/pathName'
const { SubMenu } = Menu
const LeftBarAdminComponent = () => {
  // const currentUser = useSelector(state => state.auth.login.currentUser)
  // const [image, setImage] = useState()
  // useEffect(() => {
  //   if (currentUser?.avatar_url) {
  //     setImage(currentUser.avatar_url)
  //   }
  // }, [currentUser])
  // const handleClick = e => {
  //   console.log(e)
  // }
  //currentUser.avatar_url
  return (
    <div className="w-[256px] h-full bg-[#001529] fixed top-0">
      <Link to="/admin/setting">
        <div className="w-[110px] flex justify-between items-center m-auto text-white">
          <img
            className="h-[50px] w-[50px] object-cover cursor-pointer rounded-[50px]"
            src={''}
            alt=""
          />
          <span>Admin</span>
        </div>
      </Link>
      <Menu
        onClick={''}
        style={{ width: 256 }}
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <Menu.Item icon={<AreaChartOutlined />} key="dashboard">
          <Link to={pathName}>Trang chủ</Link>
        </Menu.Item>
        <Menu.Item icon={<BarChartOutlined />} key="genre">
          <Link to="/admin/genre">Quản lý sách</Link>
        </Menu.Item>
        <Menu.Item icon={<LineChartOutlined />} key="author">
          <Link to="/admin/author">Thêm sách</Link>
        </Menu.Item>
        <Menu.Item icon={<CheckOutlined />} key="confirm">
          <Link to="/admin/confirm">Phê duyệt</Link>
        </Menu.Item>
        <Menu.Item icon={<AppstoreOutlined />} key="voucher">
          <Link to="/admin/voucher">Khuyến mãi</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default LeftBarAdminComponent