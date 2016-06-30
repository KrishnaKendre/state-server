var _ = require('lodash');
var json = require('./public/states.json');


module.exports = {
    read_states : function () {
        var states = []

        states = _.map(json, 'state');

        return states;
    }
}