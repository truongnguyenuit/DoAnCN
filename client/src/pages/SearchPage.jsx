import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SummaryBookComponent from '../components/SummaryBookComponent';
import setAuthToken from '../untils/setAuthToken';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooksAPI } from '../redux/bookAPI';
import { getAllCommentsAPI } from '../redux/bookAPI';
import BottomBarComponent from '../components/BottomBarComponent';
import { useNavigate } from 'react-router-dom';
import { text } from '../redux/bookSlice';

const SearchPage = () => {
  const booksFilter = useSelector((state) => state.book.booksFilter)
  const accessToken = useSelector((state) => state.auth.accessToken)
  const allBooks = useSelector((state) => state.book.books)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setAuthToken(accessToken)
    getAllBooksAPI(dispatch)
    getAllCommentsAPI(dispatch)
    console.log("list book filter",booksFilter)
  }, [])

  const images = [
    'https://visme.co/blog/wp-content/uploads/2020/05/Header-38.jpg',
    'http://don16obqbay2c.cloudfront.net/wp-content/uploads/Sell-Ebooks-Online-1579266163.png',
    'https://www.sodapdf.com/blog/wp-content/uploads/2019/06/ereaders.jpg',
  ];
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-pink-200 mt-[80px] ml-[300px] flex items-center justify-center flex-col gap-[20px] h-full pt-[40px]">

      <div className="w-11/12 flex flex-row gap-[10px] 	flex-wrap drop-shadow-md">

        {
          booksFilter?.map((book, index) => {
          return (
            <SummaryBookComponent data={book} navigate={navigate}/>
          )
        })
        }

      </div>
      <div className="w-full h-[200px] drop-shadow-md">
        <BottomBarComponent/>
      </div>


    </div>
  )
}

export default SearchPage