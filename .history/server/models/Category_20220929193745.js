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
    deleted: {
      type: Boolean,
      default: false
    }
})

module.exports = mongoose.model('Genre', CategorySchema, 'Genre')
