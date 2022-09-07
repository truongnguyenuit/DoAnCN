import React from 'react'
import logo from '../logo.jpg'
import { pathName } from '../router/pathName';

const NavigateRouter = [
  {
    path: pathName.cart,
    name: "Trang chủ",
  },
  {
    path: pathName.home,
    name: "Trang ",
  },
  {
    path: pathName.infomation,
    name: "Thời sự",
  },
  {
    path: pathName.oder,
    name: "Thời sự",
  },
  {
    path: pathName.search,
    name: "Thời sự",
  },

];
const LeftBarComponent = () => {
  return (
    <div className='bg-blue-100'>
      <div className="bg-red-300 w-[300px] flex items-center justify-start">
        <img className='w-[300px] object-cover' src={logo}></img>
      </div>

    </div>
  )
}

export default LeftBarComponent