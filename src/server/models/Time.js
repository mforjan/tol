const mongoose = require('mongoose');

const TimeSchema = new mongoose.Schema({
  chargeNumber: {
    type: String,
    default: ''
  },
  chargeNumberDescription: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  telework: {
    type: Boolean,
    default: false
  },
  hours: {
    type: Object,
    default: {}
  }
})

module.exports = mongoose.model('Time', TimeSchema);