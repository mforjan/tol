const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes/routes');

const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const options = {
  'Access-Control-Allow-Origin': true
}
app.use(cors(options));

app.use('/', router)

app.listen(port, () => console.log('Listening on port ' + port));