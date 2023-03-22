// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var topSpotsData = require('../server/data.json');
// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));
app.route('/')
  .get((req, res) => res.status(200).send('Hello'));

app.route('/data')
  .get((req, res) => res.status(200).json(topSpotsData));

app.route('*')
  .get((req, res) => res.end('Not Found'));

// finally export the express application
module.exports = app;
