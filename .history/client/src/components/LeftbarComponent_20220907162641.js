import React from 'react'
import logo from '../logo.jpg'
const LeftBarComponent = () => {
  return (
    <div className='bg-blue-100'>
      <div className="bg-red-300 w-[300px] flex">
        <img className='w-[250px] object-cover' src={logo}></img>
      </div>

    </div>
  )
}

export default LeftBarComponent