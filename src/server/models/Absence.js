const mongoose = require('mongoose');

const AbsenceSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    default: new Date(null)
  },
  endDate: {
    type: Date,
    default: new Date(null)
  },
  absenceReason: {
    type: String,
    default: ''
  },
  travelReason: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('Absence', AbsenceSchema);