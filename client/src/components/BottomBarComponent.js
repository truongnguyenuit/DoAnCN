import React from 'react'
import { Row, Col } from 'antd'
const BottomBarComponent = () => {
  return (
    <div className='w-full h-full bg-white p-[20px]'>
      <Row>
        <Col span={8}>
          <div className="font-[600] text-base">Hình thức thanh toán:</div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <div className="p-[5px] drop-shadow-sm bg-[#ecf0f1] border">
                <img src="https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo"></img>
              </div>
              <div className="p-[5px] drop-shadow-sm bg-[#ecf0f1] border">
                <img src="https://cf.shopee.vn/file/a0a9062ebe19b45c1ae0506f16af5c16" alt="logo"></img>
              </div>
              <div className="p-[5px] drop-shadow-sm bg-[#ecf0f1] border">
                <img src="https://cf.shopee.vn/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt="logo"></img>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <div className="p-[5px] drop-shadow-sm bg-[#ecf0f1] border">
                <img src="https://cf.shopee.vn/file/bc2a874caeee705449c164be385b796c" alt="logo"></img>
              </div>
              <div className="p-[5px] drop-shadow-sm bg-[#ecf0f1] border">
                <img src="https://cf.shopee.vn/file/2c46b83d84111ddc32cfd3b5995d9281" alt="logo"></img>
              </div>
              <div className="p-[5px] drop-shadow-sm bg-[#ecf0f1] border">
                <img src="https://cf.shopee.vn/file/9263fa8c83628f5deff55e2a90758b06" alt="logo"></img>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="font-[600] text-base">Đơn vị vận chuyển:</div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <div className="p-[5px] drop-shadow-sm bg-[#ecf0f1] border">
                <img src="https://cf.shopee.vn/file/5e7282bd0f7ee0872fdb0bd1d40fbe9e" alt="logo"></img>
              </div>
              <div className="p-[5px] drop-shadow-sm bg-[#ecf0f1] border">
                <img src="https://cf.shopee.vn/file/d10b0ec09f0322f9201a4f3daf378ed2" alt="logo"></img>
              </div>
              <div className="p-[5px] drop-shadow-sm bg-[#ecf0f1] border">
                <img src="https://cf.shopee.vn/file/77bf96a871418fbc21cc63dd39fb5f15" alt="logo"></img>
              </div>
            </div>

            <div className="flex gap-[10px]">
              <div className='p-[5px] drop-shadow-sm bg-[#ecf0f1] border'>
                <img src="https://cf.shopee.vn/file/59270fb2f3fbb7cbc92fca3877edde3f" alt="logo"></img>
              </div>
              <div className="p-[5px] drop-shadow-sm bg-[#ecf0f1] border">
                <img src="https://cf.shopee.vn/file/957f4eec32b963115f952835c779cd2c" alt="logo"></img>
              </div>
              <div className="p-[5px] drop-shadow-sm bg-[#ecf0f1] border">
                <img src="https://cf.shopee.vn/file/0d349e22ca8d4337d11c9b134cf9fe63" alt="logo"></img>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="font-[600] text-base">Tác giả:</div>
          <div className="text-sm">Thiết kết bởi Dũng Nguyễn</div>
          <div className="text-sm">Viết bởi Trường Nguyễn</div>
          <div className="text-sm">Đồ án chuyên ngành</div>
          <div className="text-sm">Hướng dẫn bởi cô Hồng Nghi</div>
        </Col>
      </Row>

    </div>
  )
}

export default BottomBarComponent