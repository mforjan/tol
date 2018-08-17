const express = require('express');
const bodyParser = require('body-parser');

const Time = require('../models/Time');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const chargeNumbers = {
  G0MGC7000000000000000: 'NEW HIRE ORIENTATION',
  G0S000000002000000000: 'SIG Jr-Mid Hiring Dig Anly&Str',
  F00000000000000000000: 'Holiday',
};

const getTime = app.get('/time', (req, res) => {
  Time.find({}, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.send(results)
    }
  });
});

const postTime = app.post('/time', (req, res) => {
  const time = new Time({
    chargeNumber: req.body.chargeNumber,
    chargeNumberDescription: chargeNumbers[req.body.chargeNumber] || '',
    location: req.body.location,
    telework: req.body.telework,
    hours: {
      day0: 0,
      day1: 0,
      day2: 0,
      day3: 0,
      day4: 0,
      day5: 0,
      day6: 0,
      day7: 0,
      day8: 0,
      day9: 0,
      day10: 0,
      day11: 0,
      day12: 0,
      day13: 0,
    }
  });

  time.save({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

const updateTime = app.put('/time/:id', (req, res) => {
  Time.findByIdAndUpdate({_id: req.params.id}, req.body, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
})

const deleteTime = app.delete('/time/:id', (req, res) => {
  Time.findByIdAndRemove({_id: req.params.id}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

module.exports = {
  getTime,
  postTime,
  updateTime,
  deleteTime
}