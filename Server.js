var express = require('express');
var app = express();


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.set('view engine', 'ejs');

app.use( express.static( "public" ) );

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/homeish', function (req, res) {
  res.render('home');
})

app.get('/about', function (req, res) {
  res.render('about');
})

app.get('/contact', function (req, res) {
  res.render('contact');
})
