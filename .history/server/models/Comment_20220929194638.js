const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  book: {
    type: mongoose.Types.ObjectId,
    ref: 'Book'
  },
  account: {
    type: mongoose.Types.ObjectId,
    ref: 'account'
  },
  rating: {
    type: Number
  },
  content: {
    type: String
  }
})

module.exports = mongoose.model('comment', CommentSchema)
