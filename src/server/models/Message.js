const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date(null)
  },
  text: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('Message', MessageSchema);