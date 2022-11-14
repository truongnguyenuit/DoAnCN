const express = require('express')
const verifyToken = require('../middleware/auth')
const Author = require('../models/Author')

const router = express.Router()

router.post('/', verifyToken, async)

module.exports = router