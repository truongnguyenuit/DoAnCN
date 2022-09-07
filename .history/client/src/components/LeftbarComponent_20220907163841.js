import React from 'react'
import logo from '../logo.jpg'
import { pathName } from '../router/pathName';

const NavigateRouter = [
  {
    path: pathName.cart,
    name: "Thời sự",
  },
  {
    path: pathName.home,
    name: "Thời sự",
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
    path: path,
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