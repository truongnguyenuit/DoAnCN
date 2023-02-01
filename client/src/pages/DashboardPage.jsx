import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SummaryBookComponent from '../components/SummaryBookComponent';
import setAuthToken from '../untils/setAuthToken';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooksAPI } from '../redux/bookAPI';
import BottomBarComponent from '../components/BottomBarComponent';

const DashboardPage = () => {
  const accessToken = useSelector((state) => state.auth.accessToken)
  const allBooks = useSelector((state) => state.book.books)
  const dispatch = useDispatch()

  useEffect(() => {
    setAuthToken(accessToken)
    getAllBooksAPI(dispatch)
  }, [])

  const images = [
    'https://visme.co/blog/wp-content/uploads/2020/05/Header-38.jpg',
    'http://don16obqbay2c.cloudfront.net/wp-content/uploads/Sell-Ebooks-Online-1579266163.png',
    'https://www.sodapdf.com/blog/wp-content/uploads/2019/06/ereaders.jpg',
  ];
  return (
    <div className="bg-[#ecf0f1] mt-[80px] ml-[300px] flex items-center justify-center flex-col gap-[20px] h-full">

      <div className="w-11/12 overflow-hidden rounded-md drop-shadow-sm">
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
      <div className="w-11/12 flex flex-row gap-[10px] 	flex-wrap">

        {allBooks.map((book, index) => {
          return (
            <SummaryBookComponent data={book} />
          )
        })}

      </div>
      <div className="w-full h-[200px]">
        <BottomBarComponent/>
      </div>


    </div>
  )
}

export default DashboardPage