
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const DashboardPage = () => {
  const images = [
    'https://visme.co/blog/wp-content/uploads/2020/05/Header-38.jpg',
    'http://don16obqbay2c.cloudfront.net/wp-content/uploads/Sell-Ebooks-Online-1579266163.png',
    'https://www.sodapdf.com/blog/wp-content/uploads/2019/06/ereaders.jpg',
  ];
  return (
    <div className="mt-[100px] ml-[300px] flex items-center justify-center">

      <div className="w-11/12">
        <Slide>
          {images.map((image, index) => (
            <div className="" key={index}>
              <div
                style={{ 'backgroundImage': `url(${image})` }}
                className="flex items-center justify-center bg-cover h-[350px]"
              >
              </div>
            </div>
          ))}
        </Slide>
      </div>
      
    </div>
  )
}

export default DashboardPage