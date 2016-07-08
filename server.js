"use strict";

var express = require('express');
var bodyParser = require('body-parser');

var statePoller = require('./statepoller');
var stateFinder = require('./stateFinder');

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/', function(request, response) {
  var stateIndex;
  var pointInsideState = false;
  var point = request.body;
  var states = statePoller.pollStates();
  var borders = statePoller.pollStateBorders();

  for (var index = 0; index < borders.length; index++) {
    pointInsideState = stateFinder.pointInState(point, borders[index]);

    if (pointInsideState === true) {
      stateIndex = index;
      break;
    } 
  }

  if (pointInsideState === true){
    response.send('[' + JSON.stringify(statePoller.pollStates()[stateIndex]) + ']');
  }else {
    response.send("You are not located in the United States!");
  } 
});

// start the server
app.listen(port);  
