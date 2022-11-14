const express = require('express')
const verifyToken = require('../middleware/auth')
const Author = require('../models/Author')

const router = express.Router()

/// router DESC: create author

router.post('/', verifyToken, async (req, res) => {
  const { fullName, address, avatarUrl, birthDate } = req.body
  if (!fullName || !address || !avatarUrl || !birthDate)
    return res.status(400).json({ success: false, message: "Lack Of Infomation" })
  try {
    const newAuthor = new Author({
      fullName: fullName,
      address: address,
      avatarUrl: avatarUrl,
      birthDate: birthDate
    })
    await newAuthor.save()
    res.status(200).json({ success: true, message: "Create Author Successful!!!" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

/// router DESC: get all authors

router.get('/getAllAuthors', verifyToken, async (req, res) => {
  try {
    const authors = await Author.find().populate()
    res.json({ success: true, authors })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

/// router DESC: update author

router.put('/:id', verifyToken, async (req, res) => {

  const { fullName, address, avatarUrl, birthDate } = req.body
  if (!fullName || !address || !avatarUrl || !birthDate)
    return res.status(400).json({ success: false, message: "Lack Of Infomation" })

  try {
    let updateAuthor = {
      fullName: fullName,
      address: address,
      avatarUrl: avatarUrl,
      birthDate: birthDate
    }
    const authorUpdateCondition = { _id: req.params.id, user: req.userId }
    updateAuthor = await Author.findByIdAndUpdate(
      authorUpdateCondition,
      updateAuthor,
      { new: true }
    )
    if (!updateAuthor)
      return res
        .status(401)
        .json({
          success: false,
          message: "Author not found of User Not Authorized"
        })

    res.json({ success: true, message: 'Update Successful!', author: updateAuthor})

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Internal Server Error" })
  }
})

/// router DESC: delete author

router.delete('/:id', verifyToken, async(req, res) => {
  try {
    const authorDeleteCondition = { _id: req.params.id, user: req.userId }
    const deletedAuthor = await Author.findOneAndDelete(authorDeleteCondition)

    if (!deletedAuthor)
      return res.status(401).json({
        success: false,
        message: 'Author Found Or User Not Authorised'
      })

      res.json({success: true, message: "Delete Author Succesful!!!", id: req.})
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })

  }
})

module.exports = router