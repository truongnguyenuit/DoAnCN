const express = require('express')
const verifyToken = require('../middleware/auth')
const Author = require('../models/Author')

const router = express.Router()

router.post('/', verifyToken, async (req, res) => {
  const { fullname, address, avataurl } = res.body
})

module.exports = router