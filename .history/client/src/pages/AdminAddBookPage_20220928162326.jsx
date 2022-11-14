import React from 'react'

const AdminAddBookPage = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className=" w-full flex justify-center px-4 pt-4  border-b-[1px] border-solid border-gray-300">
          <p className="px-4 text-3xl font-medium ">Thêm sách</p>
        </div>
        <div className="flex pt-[100px]">
          <div className="flex justify-center w-[350px]  h-[450px] rounded-lg shadow-xl bg-gray-50 border-dashed border-2">
            <div className="">
              <label className="inline-block mb-2 text-gray-500">
                Tải ảnh lên
              </label>
              <div className="flex items-center justify-center w-full">
                {imageBook && (
                  <img src={URL.createObjectURL(imageBook)} alt="" />
                )}
                {!imageBook && (
                  <label className="flex flex-col w-full h-[350px] border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Attach a file
                      </p>
                    </div>
                    <input
                      type="file"
                      className="opacity-0"
                      onChange={changeImageBook}
                    />
                  </label>
                )}
              </div>
              <Button onClick={() => setImageBook('')}>Xóa ảnh</Button>
            </div>
          </div>
          <div className="w-[800px]">
            <Form
              form={form}
              name="updateBook"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{
                name: '',
                genre: '',
                author: '',
                description: '',
                pages: 0,
                publishedBy: '',
                publishedDate: moment(),
                price: 0
              }}
              onFinish={createNewBookHandler}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ width: '100%' }}
            >
              <Row>
                <Col span={12}>
                  <Row>
                    <Col span={24}>
                      <Form.Item
                        label="Tên Sách"
                        name="name"
                        rules={[
                          { required: true, message: 'Vui lòng nhập tên sách!' }
                        ]}
                      >
                        <Input
                          style={{ width: '100%' }}
                          size="large"
                          placeholder="Nhập tên sách"
                        />
                      </Form.Item>
                    </Col>

                    <Col span={24}>
                      <Form.Item
                        label="Nhà xuất bản"
                        name="publishedBy"
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập nhà xuất bản!'
                          }
                        ]}
                      >
                        <Input
                          style={{ width: '100%' }}
                          size="large"
                          placeholder="Nhập nhà xuất bản"
                        />
                      </Form.Item>
                    </Col>

                    <Col span={24}>
                      <Form.Item
                        label="Ngày xuất bản"
                        name="publishedDate"
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập Ngày xuất bản!'
                          }
                        ]}
                      >
                        <DatePicker
                          style={{ width: '100%' }}
                          size="large"
                          placeholder="Nhập ngày xuất bản"
                        />
                      </Form.Item>
                    </Col>

                    <Col span={24}>
                      <Form.Item
                        label="Tác giả"
                        name="author"
                        rules={[
                          { required: true, message: 'Vui lòng nhập tác giả!' }
                        ]}
                      >
                        {allAuthorsData.length > 0 && (
                          <Select
                            style={{ width: '100%' }}
                            size="large"
                            placeholder="Chọn tác giả"
                          >
                            {allAuthorsData.map((author, key) => {
                              return (
                                <Option key={key} value={author._id}>
                                  {author.fullName}
                                </Option>
                              )
                            })}
                          </Select>
                        )}
                      </Form.Item>
                    </Col>

                    <Col span={24}>
                      <Form.Item
                        label="Thể loại"
                        name="genre"
                        rules={[
                          { required: true, message: 'Vui lòng chọn thể loại!' }
                        ]}
                      >
                        {allGenresData.length > 0 && (
                          <Select
                            style={{ width: '100%' }}
                            size="large"
                            placeholder="Chọn thể loại"
                          >
                            {allGenresData.map((genre, key) => {
                              return (
                                <Option key={key} value={genre._id}>
                                  {genre.name}
                                </Option>
                              )
                            })}
                          </Select>
                        )}
                      </Form.Item>
                    </Col>

                    <Col span={24}>
                      <Form.Item
                        label="Số trang"
                        name="pages"
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập số trang!'
                          },
                          {
                            type: 'number',
                            min: 0,
                            message: 'Số trang phải >= 0'
                          }
                        ]}
                      >
                        <InputNumber
                          style={{ width: '100%' }}
                          size="large"
                          placeholder="Nhập số trang"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row>
                    <Col span={24}>
                      <Form.Item
                        label="Giá"
                        name="price"
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập giá dự kiến của sách!'
                          },
                          {
                            type: 'number',
                            min: 0,
                            message: 'Giá sách phải >= 0'
                          }
                        ]}
                      >
                        <InputNumber
                          style={{ width: '100%' }}
                          // disabled
                          // className="text-black"
                          size="large"
                          placeholder="Nhập giá dự kiến"
                          addonAfter="₫"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="Mô tả"
                        name="description"
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập giá dự kiến của sách!'
                          }
                        ]}
                      >
                        <TextArea
                          showCount
                          maxLength={500}
                          style={{ height: 300, width: '100%' }}
                          placeholder="Nhập mô tả"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
          {/* <div className="w-[400px] h-[450px] ml-[20px] mt-[100px]">
            <div className="flex mb-[20px]">
              <label className="w-[120px]">Tên sách</label>
              <Input
                placeholder="Tên sách"
                onChange={e => setNameBook(e.target.value)}
              />
            </div>
            <div className="flex mb-[20px]">
              <label className="w-[120px]">Nhà xuất bản</label>
              <Input
                placeholder="Nhà xuất bản"
                onChange={e => setPushlishBy(e.target.value)}
              />
            </div>
            <div className="flex mb-[20px]">
              <label className="w-[120px]">Số trang</label>
              <Input
                placeholder="Số trang"
                onChange={e => setPage(e.target.value)}
              />
            </div>
            <div className="flex mb-[20px]">
              <label className="w-[120px]">Số lượng</label>
              <Input
                placeholder="Số lượng"
                onChange={e => setAmount(e.target.value)}
              />
            </div>
            <div className="flex mb-[20px]">
              <label className="w-[100px]">Ngày xuất bản</label>
              <DatePicker
                style={{ width: 320 }}
                defaultValue={moment(`${defaultDate}`, 'YYYY-MM-DD')}
                onChange={(date, id) => setPushlishDate(id)}
                // onChange={(date,id)=>console.log(id)}
              />
            </div>
          </div>
          <div className="w-[400px] h-[450px] ml-[20px] mt-[100px]">
            <div className="flex mb-[20px]">
              <label className="w-[100px]">Tác giả</label>

              {allAuthor.length > 0 && (
                <Select
                  // defaultValue={allAuthor[0]}
                  style={{ width: 320 }}
                  onChange={e => setAuthor(e)}
                >
                  {allAuthor.map((author, key) => {
                    return (
                      <Option key={key} value={author}>
                        {author}
                      </Option>
                    )
                  })}
                </Select>
              )}
            </div>
            <div className="flex mb-[20px]">
              <label className="w-[120px]">Giá</label>
              <Input
                placeholder="Giá"
                onChange={e => setPrice(e.target.value)}
              />
            </div>
            <div className="flex mb-[20px]">
              <label className="w-[100px]">Thể loại</label>
              {allGenres.length > 0 && (
                <Select
                  // defaultValue={allGenres[0]}
                  style={{ width: 320 }}
                  onChange={e => setGenre(e)}
                >
                  {allGenres.map((genre, key) => {
                    return (
                      <Option key={key} value={genre}>
                        {genre}
                      </Option>
                    )
                  })}
                </Select>
              )}
            </div>
            <div className="flex mb-[20px]">
              <label className="w-[100px]">Mô tả</label>
              <TextArea
                showCount
                maxLength={100}
                style={{ height: 120, width: 320 }}
                onChange={e => setDecription(e.target.value)}
              />
            </div>
          </div> */}
        </div>
      </div>
      <div>
        <Button
          onClick={handleSubmit}
          type="primary"
          size="large"
          disabled={loading}
        >
          {loading && <Spin style={{ marginRight: '10px' }} />}
          Thêm sách
        </Button>
      </div>
    </div>
  )
}

export default AdminAddBookPage