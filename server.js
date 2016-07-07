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
  var point = request.query;
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
    console.log('[' + JSON.stringify(statePoller.pollStates()[stateIndex]) + ']');
  }else {
    console.log("You are in nowhere land.");
  } 

  //response.send("longitude: " + point.longitude + ' ' + "latitude: " + point.latitude);
});

// start the server
app.listen(port); 
