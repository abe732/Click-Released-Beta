var express = require('express');
var bodyParser = require('body-parser');
var watson = require('watson-developer-cloud');
var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('bfa7f6b236ba90e1b2cadd86f5b6f8203f6123c9');
//https://www.npmjs.com/package/alchemy-api

var app = express();

var port = 3458;

app.use(express.static(__dirname + '/client'));
app.use('/scripts', express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', function(req, res) {
	var url = req.body.url;
	console.log('server post');

	alchemy.sentiment(url, {}, function(err, response) {
	  if (err) throw err;
	  var sentiment = response.docSentiment;
	  console.log(sentiment);
	  res.send(sentiment);
	});

	//**future functionality to add:
	// res.send(url);
	// alchemy.author(url, {}, function(err, response) {
	//   if (err) throw err;
	//   var author = response.author;
	//   console.log(author);
	//   res.send(author);
	// });

	// alchemy.entities(url, {}, function(err, response) {
	//   if (err) throw err;
	//   var entities = response.entities;
	//   console.log(response);
	//   //pull response.data[0].text;
	//   //pull response.data[1].text;
	//   res.send(entities); // boolean true / false
	// });

	// alchemy.entities(url, {}, function(err, response) {
	//   if (err) throw err;
	//   var entities = response.entities;
	//   console.log(response);
	//   //do stuff on the response
	//   res.send(entities); // boolean true / false
	// });
	// res.end();
});


app.get('/', function(req, res, next) {
	var typedURL = req.body.params;
	alchemy.entities(typedURL, {}, function(err, response) {
	  if (err) throw err;
	  var entities = response.entities;
	  console.log(response);
	  //ultimately throw it back into the search.js
	  //(or maybe to the services file)

	  //res.send back over to the client
	});

});

app.listen(port, function() {
  console.log('listening on port 3458');
});