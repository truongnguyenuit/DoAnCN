import React from 'react'
import { Row, Col, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import CommentComponent from '../../components/CommentComponent'
import { useState } from 'react'
import { createCommentAPI } from '../../redux/bookAPI'

const { TextArea } = Input;

const BookDetailPage = () => {
  const user = useSelector((state) => state.auth.user)
  const book = useSelector((state) => state.book.bookCurrent)
  const listAuthors = useSelector((state) => state.author.authors)
  const listCategories = useSelector((state) => state.category.categories)
  const listComments = useSelector((state) => state.book.comments)

  const [value, setValue] = useState('');

  const dispatch = useDispatch()

  const handleSubmitComment = async () => {
    console.log(1)
    try {
      let values = {
        book: book,
        account: user.realname,
        userImage: user.img,
        content: value
      }
      const response = await createCommentAPI(values, dispatch)
      alert(response.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='h-[1120px] bg-[#E8F1FF] mt-[80px] ml-[300px] px-[80px] py-[40px]'>
      <div className=" flex flex-col gap-[20px] bg-white rounded-[5px] drop-shadow-md pb-[30px]">
        <div className="border-b-[1px] p-[20px]">
          <span className="font-bold font-base text-lg">Thông tin sách</span>
        </div>
        <Row>
          <Col span={11}>
            <div className="flex flex-col items-center border-r-[1px] drop-shadow-md">
              <div className="">
                <img
                  className="w-[250px] h-[370px] object-cover rounded-[5px] "
                  src={book.coverUrl}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col span={13}>
            <div className="flex flex-col px-[30px] justify-between h-full">
              <span className="font-bold text-2xl">{book.name}</span>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[#096d]">Tác giả: {listAuthors.map((value) => {
                  if (value._id === book.author[0])
                    return (value.fullName)
                })}
                </span>
                <span className="text-[#096d]">Thể loại: {listCategories.map((value) => {
                  if (value._id === book.category[0])
                    return (value.name)
                })}
                </span>
              </div>
              <span className="font-bold text-3xl">{new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND'
              }).format(book.price)}</span>
              <div className="">
                <span className="font-bold">Nhà sản xuất: </span>
                <span className="">{book.publishedBy}</span>
              </div>
              <div className="">
                <span className="font-bold">Ngày Xuất bản: </span>
                <span className="">{book.publishedDate}</span>
              </div>

              <span className="font-bold">Mô tả:</span>
              <span className="text-sm">{book.description}...</span>
              <button
                className='rounded-[5px] drop-shadow-sm text-[#389e0d] bg-[#f6ffed] border-[#b7eb8f] border-2 py-[8px] px-[15px] w-fit '
              >
                <span>Thêm vào giỏ hàng</span>
              </button>
            </div>
          </Col>
        </Row>
      </div>

      <div className="flex flex-col gap-[20px] bg-white rounded-[5px] drop-shadow-md mt-[15px]">
        <div className="px-[20px]  mt-[20px]">
          <span className="font-bold font-base text-lg">Gửi đánh giá đến tác giả:</span>
        </div>

        <Row>
          <Col span={24}>
            <div className="px-[30px] pt-[10px] pb-[20px] flex flex-row gap-[10px] items-center">
              <img
                className="w-[74px] h-[74px] object-cover rounded-[5px]"
                src={user.img}
                alt=""
              />
              <TextArea
                className='rounded-[10px]'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Đánh giá của bạn nè"
                bordered='true'
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
              />
            </div>
            <div className="flex justify-end px-[30px] pb-[20px] rounded-[10px] drop-shadow-md">
              <button
                className='bg-[#fff2e8] border-[#ffbb96] text-[#d4380d] border-[2px] px-[15px] py-[5px] rounded-[5px]'
                onClick={() => handleSubmitComment()}>
                <span className="">Nhận xét</span>
              </button>
            </div>

          </Col>

        </Row>
      </div>

      <div className="flex flex-col gap-[20px] bg-white rounded-[5px] drop-shadow-md mt-[15px]">
        <div className="px-[20px]  mt-[20px]">
          <span className="font-bold font-base text-lg">Tất cả nhận xét</span>
        </div>

        <Row>
          <Col span={24}>
            <div className="px-[30px] pt-[10px] pb-[20px]">
              {listComments.map((value) => {
                if (value.book === book._id) {
                  return (
                    <CommentComponent data={value} />
                  )
                }
              })}
            </div>
          </Col>

        </Row>
      </div>

    </div >
  )
}

export default BookDetailPage