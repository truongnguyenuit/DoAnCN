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
          <span>truong</span>
        </div>
      </Link>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        <Menu.Item icon={<AreaChartOutlined />} key="dashboard">
          <Link to="/admin/dashboard">Trang chủ</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<SettingOutlined />} title="Quản lý sách">
          <Menu.Item icon={<AppstoreAddOutlined />} key="add_book">
            <Link to="/admin/add_book">Thêm sách</Link>
          </Menu.Item>
          <Menu.Item icon={<EyeOutlined />} key="book">
            <Link to="/admin/all_book">Xem sách</Link>
          </Menu.Item>
          <Menu.Item icon={<DownloadOutlined />} key="goodsReceived">
            <Link to="/admin/goodsReceived">Nhập sách</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item icon={<BarChartOutlined />} key="genre">
          <Link to="/admin/genre">Thể loại</Link>
        </Menu.Item>
        <Menu.Item icon={<LineChartOutlined />} key="author">
          <Link to="/admin/author">Tác giả</Link>
        </Menu.Item>
        <Menu.Item icon={<CheckOutlined />} key="confirm">
          <Link to="/admin/confirm"> Phê duyệt</Link>
        </Menu.Item>
        <Menu.Item icon={<CheckOutlined />} key="anonymous">
          <Link to="/admin/anonymous"> Khách vãng lai</Link>
        </Menu.Item>
        <Menu.Item icon={<AppstoreOutlined />} key="voucher">
          <Link to="/admin/voucher"> Khuyến mãi</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default LeftBarAdminComponent