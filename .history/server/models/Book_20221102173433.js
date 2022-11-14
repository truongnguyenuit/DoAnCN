const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  coverUrl: {
    type: String,
    require: true
  },
  category: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'category'
    }
  ],
  authors: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'author'
    }
  ],
  description: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  publishedBy: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  rating: {
    type: Number,
    default: 0
  },
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'comment'
    }
  ],
  amount: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('book', BookSchema)
