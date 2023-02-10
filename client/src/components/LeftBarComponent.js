import React from 'react'
import logo from '../logo.jpg'
import newLogo from '../image/newlogo.png'
import { pathName } from '../router/pathName';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  SettingOutlined,
  ShoppingCartOutlined,
  FilterOutlined,
  HomeOutlined,
  ShopOutlined
} from '@ant-design/icons'
import bookPicture from "../book.svg"

const LeftBarComponent = () => {
  const handleClick = e => {

  }
  return (
    <div className='bg-gradient-to-tr from-purple-300 to-pink-200 h-[1000px]'>
      <div className=" w-[300px] flex items-center justify-center mb-5">
        <img className='w-[150px] h-[230px] object-cover' src={newLogo}></img>
      </div>
      <div className="drop-shadow-md">
        <Menu
          onClick={handleClick}
          style={{ width: 300 }}
          mode="inline"
          theme="light"

        >
          <Menu.Item icon={<HomeOutlined />} key="dashboard">
            <Link to={pathName.dashboard}>Trang chủ</Link>
          </Menu.Item>
          <Menu.Item icon={<FilterOutlined />} key="category">
            <Link to={pathName.search}>Trang tìm kiếm</Link>
          </Menu.Item>
          <Menu.Item icon={<ShoppingCartOutlined />} key="cart">
            <Link to={pathName.cart}>Giỏ hàng</Link>
          </Menu.Item>
          <Menu.Item icon={<ShopOutlined />} key="order">
            <Link to={pathName.order}>Đơn hàng của bạn</Link>
          </Menu.Item>
          <Menu.Item icon={<SettingOutlined />} key="setting">
            <Link to={pathName.setting}>Thông tin cá nhân</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="mt-[20px]">
        <img src={bookPicture} alt="" />
      </div>

    </div>
  )
}

export default LeftBarComponent