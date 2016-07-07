"use strict";

var express = require('express');
var _ = require('lodash');
var statePoller = require('./statepoller');
var stateFinder = require('./stateFinder');

var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(request, response) {
  var pointInsideState = false;
  var point = request.query;
  var states = statePoller.pollStates();
  var borders = statePoller.pollStateBorders();

  for (var index = 0; index < borders.length; index++) {
    pointInsideState = stateFinder.pointInState(point, borders[index]);

    if (pointInsideState === true) {
      console.log('[' + JSON.stringify(statePoller.pollStates()[index]) + ']');
      break;
    } 
  }

  // response.send("longitude: " + point.longitude + ' ' + "latitude: " + point.latitude);
});

// start the server
app.listen(port);
console.log('[1] 21507');