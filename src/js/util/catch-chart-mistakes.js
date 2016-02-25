var map = require("lodash/map");
var some = require("lodash/some");

var INTERVAL_BASE_VALS = [1, 2, 2.5, 5, 10, 25]; // used to determine "good" tick intervals

function axis_ticks_even(scale) {
	var range = (scale.domain[1] - scale.domain[0]) * 0.3;
	var magnitude = Math.floor(Math.abs(range)).toString().length;
	var multiplier = Math.pow(10, (magnitude - 1));

	var acceptable_intervals = map(INTERVAL_BASE_VALS, function(d) {
		return d * multiplier;
	});

	console.log(acceptable_intervals)
	var are_ticks_even = some(acceptable_intervals, function(inter) {
		return all_modulo(scale.tickValues, inter);
	});

	return are_ticks_even;
}

// Determine if all tickValues are modulo some interval value
function all_modulo(tickValues, interval) {
	return tickValues.reduce(function(prev, curr) {
		return prev && (curr % interval === 0);
	}, true);
}

module.exports = {
	axisTicksEven: axis_ticks_even
};
