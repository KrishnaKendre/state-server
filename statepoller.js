"use strict";

var _ = require('lodash');
var json = require('./public/states.json');


function pollStates() {
    var states = []
    
    states = _.map(json, 'state');
    
    return states;        
};

function pollStateBorders(params) {
    var borders = []

    borders = _.map(json, 'border')

    return borders
}

exports.pollStates = pollStates;
exports.pollStateBorders = pollStateBorders; 