var test = require("tape");
var _ = require("lodash");

var catchChartMistakes = require("../src/js/util/catch-chart-mistakes");

test("catch common chart mistakes", function(t) {
	t.plan(4);

	var evenTicks = {
		domain: [0, 400],
		tickValues: [0, 100, 200, 300, 400]
	};

	t.ok(catchChartMistakes.axisTicksEven(evenTicks), "scale with even ticks not caught");

	var unevenTicks = {
		domain: [0, 60],
		tickValues: [0, 12, 24, 36, 48, 60]
	};

	t.notOk(catchChartMistakes.axisTicksEven(unevenTicks), "scale with uneven ticks caught");

});
