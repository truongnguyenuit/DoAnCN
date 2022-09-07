import React from 'react'
import logo from '../logo.jpg'
import { pathName } from '../router/pathName';

const NavigateRouter = [
  {
    path: 'asdasdasd',
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