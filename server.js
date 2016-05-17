var express = require('express');
var watson = require('watson-developer-cloud');
var alchemyAPI = require('alchemy-api');
// var alchemy = new AlchemyAPI('YOUR_KEY_HERE');
//https://www.npmjs.com/package/alchemy-api

var app = express();

var port = 3458;

app.use(function(req, res) {
  res.sendfile(__dirname + '/client/index.html');
});

app.listen(port, function() {
  console.log('listening on port 3458');
});