const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  books: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Book'
      }
    ],
    default: []
  },
})

module.exports = mongoose.model('Genre', CategorySchema)
