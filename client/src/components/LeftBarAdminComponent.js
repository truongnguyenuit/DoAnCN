import React, {  } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  CheckOutlined,
  AreaChartOutlined,
  BarChartOutlined,
  LineChartOutlined} from '@ant-design/icons'
import { pathName } from '../router/pathName'
const { SubMenu } = Menu
const LeftBarAdminComponent = () => {

  return (
    <div className="w-[256px] h-full bg-[#001529] fixed top-0">
      <Link to="/setting">
        <div className="w-[110px] flex justify-between items-center m-[20px] text-white">
          <img
            className="h-[50px] w-[50px] object-cover cursor-pointer rounded-[10px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7nFdX1g_CVR4WyP5LgKOGytP0J8PE53_RQ&usqp=CAU"
            alt="hình ảnh không tồn tại"
          />
          <span className='ml-[10px]'>Administrator</span>
        </div>
      </Link>
      <Menu
        // onClick={''}
        style={{ width: 256 }}
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        {/* <Menu.Item icon={<AreaChartOutlined />} key="dashboard">
          <Link to={pathName.adminDashboard}>Trang chủ</Link>
        </Menu.Item> */}
        <Menu.Item icon={<BarChartOutlined />} key="genre">
          <Link to={pathName.adminBookControl}>Quản lý sách</Link>
        </Menu.Item>
        <Menu.Item icon={<LineChartOutlined />} key="category">
          <Link to={pathName.adminCategory}>Quản lý thể loại</Link>
        </Menu.Item>
        <Menu.Item icon={<LineChartOutlined />} key="author">
          <Link to={pathName.adminAuthor}>Quản lý tác giả</Link>
        </Menu.Item>
        <Menu.Item icon={<CheckOutlined />} key="confirm">
          <Link to={pathName.adminConfirm}>Phê duyệt</Link>
        </Menu.Item>
        {/* <Menu.Item icon={<AppstoreOutlined />} key="voucher">
          <Link to={pathName.adminVoucher}>Khuyến mãi</Link>
        </Menu.Item> */}
      </Menu>
    </div>
  )
}

export default LeftBarAdminComponent