const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const Category = require('../models/Category')

/// router DESC: create author

router.post('/', verifyToken, async (req, res) => {
  const { name, description } = req.body
  if (!name || !description )
    return res.status(400).json({ success: false, message: "Lack Of Infomation" })
  try {
    const newCategory = new Category({
      name: name,
      description: description 
    })
    await newCategory.save()
    res.status(200).json({ success: true, message: "Create Category Successful!!!", category: newCategory })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

/// router DESC: get all authors

router.get('/getAllCategory', verifyToken, async (req, res) => {
  try {
    const categorys = await Category.find().populate()
    res.json({ success: true, categorys })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
})

/// router DESC: update author

router.put('/:id', verifyToken, async (req, res) => {

  const { name, description } = req.body
  if (!name || !description)
    return res.status(400).json({ success: false, message: "Lack Of Infomation" })

  try {
    let updateCategory = {
      name: name,
      description: description
    }
    const categoryUpdateCondition = { _id: req.params.id, user: req.userId }
    updateCategory = await Category.findByIdAndUpdate(
      categoryUpdateCondition,
      updateCategory,
      { new: true }
    )
    if (!updateCategory)
      return res
        .status(401)
        .json({
          success: false,
          message: "Category not found of User Not Authorized"
        })

    res.json({ success: true, message: 'Update Successful!', category: updateCategory})

  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Internal Server Error" })
  }
})

/// router DESC: delete author

router.delete('/:id', verifyToken, async(req, res) => {
  try {
    const categoryDeleteCondition = { _id: req.params.id, user: req.userId }
    const deletedCategory = await Category.findOneAndDelete(categoryDeleteCondition)

    if (!deletedCategory)
      return res.status(401).json({
        success: false,
        message: 'Autho Found Or User Not Authorised'
      })

      res.json({success: true, message: "Delete Author Succesful!!!", _id: req.params.id})
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })

  }
})

module.exports = router