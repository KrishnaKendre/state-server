var express = require('express');
var states = require('./state_importer')

var app = express();
var port = process.env.PORT || 8080;

// routes will go here
app.get('/', function(req, res) {
  var query = req.query;  
  console.log(query);
  console.log(states.read_states());
  res.send("longitude: " + query.longitude + ' ' + "latitude: " + query.latitude);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);