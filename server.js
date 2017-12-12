const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const apiKey = '*****************';
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&apid=${apiKey}'
})

app.listen(3000, function () {
  console.log('Weather App listening on port 3000!')
})