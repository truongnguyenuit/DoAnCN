import React from 'react'
import logo from '../logo.jpg'
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
    <div className='bg-white h-[1000px]'>
      <div className=" w-[300px] flex items-center justify-start mb-5">
        <img className='w-[300px] object-cover' src={logo}></img>
      </div>
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
        <Menu.Item icon={<ShopOutlined />} key="oder">
          <Link to={pathName.oder}>Đơn hàng của bạn</Link>
        </Menu.Item>
        <Menu.Item icon={<SettingOutlined />} key="setting">
          <Link to={pathName.setting}>Thông tin cá nhân</Link>
        </Menu.Item>
      </Menu>
      <div className="mt-[40px]">
        <img src={bookPicture} alt="" />
      </div>

    </div>
  )
}

export default LeftBarComponent