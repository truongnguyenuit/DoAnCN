import React from 'react'
import logo from '../logo.jpg'
import { pathName } from '../router/pathName';
import { Menu } from 'antd';

const NavigateRouter = [
  {
    path: pathName.cart,
    name: "Trang chủ",
  },
  {
    path: pathName.home,
    name: "Trang tìm kiếm",
  },
  {
    path: pathName.infomation,
    name: "Giỏ hàng",
  },
  {
    path: pathName.oder,
    name: "Đơn hàng của bạn",
  },
  {
    path: pathName.search,
    name: "Thông tin cá nhân",
  },

];
const LeftBarComponent = () => {
  return (
    <div className='bg-blue-100'>
      <div className="bg-red-300 w-[300px] flex items-center justify-start">
        <img className='w-[300px] object-cover' src={logo}></img>
      </div>
      <Menu
        onClick={handleClick}
        style={{ width: 300 }}
        mode="inline"
        theme="light"
      ><
    </div>
  )
}

export default LeftBarComponent