const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Comment = require('../models/Comment')

/// router DESC: create author

router.post('/', verifyToken, async (req, res) => {

  const { book, account, userImage, content } = req.body

  if (!book || !account || !userImage || !content)
    return res.status(400).json({ success: false, message: "Lack Of Infomation" })

  try {
    const newComment = new Comment({
      book: book,
      account: account,
      userImage: userImage,
      content: content
    })
    await newComment.save()
    res.status(200).json({ success: true, message: "Create Content Successful!!!", newComment: newComment })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

/// router DESC: get all authors

router.get('/getAllContents', verifyToken, async (req, res) => {
  try {
    const comment = await Comment.find().populate()
    res.json({ success: true, comment: comment })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

module.exports = router