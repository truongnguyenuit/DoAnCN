import React from 'react'

const CommentComponent = (props) => {
  return (
    <div className="border-t-[1px]">
      <div className='flex flex-row my-[10px] items-center'>
        <div className=" ">
          <img
            className="w-[70px] h-[70px] object-cover rounded-[10px]"
            src={props.data.userImage}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-around h-[80px] mx-[20px]">
          <div className="">
            <span className="font-bold">Đọc giả: </span>
            <span className="">{props.data.account}</span>
          </div>
          <div className="">
            <span className="font-bold">Thời gian: </span>
            <span className="">{props.data.createAt}</span>
          </div>

        </div>
        <div className='flex flex-col justify-around h-[80px]'>
          <span className="font-bold">Bình luận:</span>
          <span className="">{props.data.content}</span>
        </div>

      </div>
    </div>

  )
}

export default CommentComponent