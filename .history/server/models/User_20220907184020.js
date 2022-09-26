const mongoose = require('mongoose')
const schema = mongoose.Schema

const UserSchema = new schema({
  realname: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('users', UserSchema)