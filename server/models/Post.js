const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  img: {
    type: String,
    default:''
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = mongoose.model('posts', PostSchema)