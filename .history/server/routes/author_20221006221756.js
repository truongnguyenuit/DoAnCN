const express = require('express')
const verifyToken = require('../middleware/auth')
const Author = require('../models/Author')

const router = express.Router()

router.post('/', verifyToken, async (req, res) => {
  const { fullame, address, avataUrl, birthDate } = req.body
  try {
    const newAuthor = new Author({
      fullname: fullname,
      address: address,
      avataUrl: avataUrl,
      birthDate: birthDate
    })
    await newAuthor.save()
    res.json({ success: true, message: "Create Author Successful!!!"})
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error'})
  }
})

module.exports = router