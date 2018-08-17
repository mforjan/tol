const express = require('express');
const bodyParser = require('body-parser');

const Absence = require('../models/Absence');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const postAbsence = app.post('/absences', (req, res) => {
  const absence = new Absence({
    startDate: new Date(req.body.startDate),
    endDate: new Date(req.body.endDate),
    absenceReason: req.body.absenceReason,
    travelReason: req.body.travelReason,
  });

  absence.save({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

const getAbsence = app.get('/absences', (req, res) => {
  Absence.find({}, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.send(results)
    }
  })
})

const deleteAbsence = app.delete('/absences/:id', (req, res) => {
  Absence.findByIdAndRemove({_id: req.params.id}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

module.exports = {
  postAbsence,
  getAbsence,
  deleteAbsence
}