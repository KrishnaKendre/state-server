"use strict";

function pointInState(point, state) {
    var isInside = false;
    var minX = state[0][0], maxX = state[0][0];
    var minY = state[0][1], maxY = state[0][1];

    for (var n = 1; n < state.length; n++) {
        var q = state[n];
        minX = Math.min(q[0], minX);
        maxX = Math.max(q[0], maxX);
        minY = Math.min(q[1], minY);
        maxY = Math.max(q[1], maxY);
    }

    if (point.longitude < minX || point.longitude > maxX || point.latitude < minY || point.latitude > maxY) {
        return false;
    } else {
        var i = 0; 
        var j = state.length - 1;
        
        for (i, j; i < state.length; j = i++) {
            if ( (state[i][1] > point.latitude) != (state[j][1] > point.latitude) && point.longitude < (state[j][0] - state[i][0]) * (point.latitude - state[i][1]) / (state[j][1] - state[i][1]) + state[i][0]) {
                isInside = true;
            }
        }
    }
    return isInside;
}

exports.pointInState = pointInState; 