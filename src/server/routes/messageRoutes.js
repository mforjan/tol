const express = require('express');
const bodyParser = require('body-parser');

const Message = require('../models/Message');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const getMessage = app.get('/messages', (req, res) => {
  Message.find({}, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.send(results)
    }
  });
});

const deleteMessage = app.delete('/messages/:id', (req, res) => {
  Message.findByIdAndRemove({_id: req.params.id}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

module.exports = {
  getMessage,
  deleteMessage
}