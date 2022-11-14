const express = require('express')
const verifyToken = require('../middleware/auth')
const Author = require('../models/Author')

const router = express.Router()

router.post('/', verifyToken, async (req, res) => {
  const { fullname, address, avataUrl, birthDate } = req.body

  try {
    const newAuthor = new Author({
      fullname: fullname,
      address: address,
      avataUrl: avataUrl,
      birthDate: birthDate
    })
  }
})

module.exports = router