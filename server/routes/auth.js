const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth')

const User = require('../models/User')
const { route } = require('./post')

// @route GET api/auth
// @desc Check if user is logged
// @access Public

router.get('/', verifyToken, async (req, res) => {
  try {
    // check existing user
    const user = await User.findById(req.userId)
    if (!user)
      return res.status(400).json({ success: false, message: 'User Not Found' })

    res.json({ success: true, user })


  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

// @route POST api/auth/register
// @desc Register user
// @access Public 

router.post('/register', async (req, res) => {

  const { username, password } = req.body

  if (!username || !password)

    return res.status(400).json({ success: false, message: 'Missing Username Or Password' })

  try {

    // check for existing user
    const user = await User.findOne({ username: username })
    if (user)
      return res.status(400).json({ success: false, message: 'Usernam Already Taken' })

    // all good
    const hashedPassword = await argon2.hash(password)
    const newUser = new User({ username, password: hashedPassword })
    await newUser.save()

    //return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    )

    res.json({ success: true, message: 'User Created Successfully', accessToken })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }

})

// @route POST api/auth/login
// @desc Login user
// @access Public

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  // Simple validation

  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: 'Missing Username Or Password' })

  try {

    // Check for existing user

    const user = await User.findOne({ username: username })
    if (!user)
      return res.status(400).json({ success: false, message: 'Incorrect Username' })

    // Username found

    const passwordValid = await argon2.verify(user.password, password)
    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: 'Incorrect Password' })

    // All good

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    )

    res.json({ success: true, message: 'Login Successfully!!!', accessToken })

  } catch (error) {

    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })

  }
})

// @route PUT api/auth/update
// @desc update user infomation
// @access Private

router.put('/update', verifyToken, async (req, res) => {

  const { realname, username, email, img } = req.body

  // Simple validation

  if (!realname || !username || !email)
    return res
      .status(400)
      .json({ success: false, message: 'Missing infomation' })

  try {
    const user = await User.findById(req.userId)
    if (!user) {
      return res.status(404).json({ message: "Invalid Account" });
    }
    user.realname = realname
    user.username = username
    user.email = email
    user.img = img
    await user.save()

    return res.json({ success: true, message: "User Update Complete!!!", user })

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: error.message })
  }
})

// @route PUT api/auth/changePassword
// @desc update user infomation
// @access Private

router.put('/changePassword', verifyToken, async (req, res) => {

  const { username, email, oldPassword, newPassword, confirmPassword } = req.body

  // Simple validation

  if (!oldPassword || !newPassword || !confirmPassword)
    return res
      .status(400)
      .json({ success: false, message: 'Missing infomation' })
  if (newPassword != confirmPassword)
    return res
      .status(400)
      .json({ success: false, message: "new password and confirm password doesn't match" })

  try {

    // Check for existing user

    const user = await User.findById(req.userId)

    // Username found

    const passwordValid = await argon2.verify(user.password, oldPassword)
    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: 'Incorrect password' })

    // All good
    const hashedPassword = await argon2.hash(newPassword)
    user.password = hashedPassword
    await user.save()

    res.json({ success: true, message: 'Change password succesful' })

  } catch (error) {

    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })

  }
})

// @route GET api/auth/getAllUser
// @desc GET all user infomation
// @access Private 

router.get('/getAllUser', verifyToken, async (req, res) => {

  try {
    const users = await User.find()
    res.json({ success: true, users })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
  
})

module.exports = router