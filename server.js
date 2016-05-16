var express = require('express');
var partials = require('express-partials');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/content', function(req, res) {
  res.render('content');
});

app.listen(3458, function() {
  console.log('listening on port 3458');
});