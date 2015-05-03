(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define(["exports", "react"], factory);
	} else if (typeof exports === "object") {
		// CommonJS
		factory(exports, require("react"));
	} else {
		// Browser globals
		global.InstinctUI = global.InstinctUI || {};
		factory(global.InstinctUI, global.React);
	}
}(this, function (exports, React) {
	function __element1(values, components, key) {
		var children = [
			"foo",
			"bar"
		];

		return children;
	}

	function __element2(values, components, key) {
		var children = [
			"5"
		];

		return children;
	}

	function __element3(values, components, key) {
		var children = [
			"4",
			__element2(values, components, "2")
		];

		return children;
	}

	function __element4(values, components, key) {
		var children = [
			"3",
			__element3(values, components, "2")
		];

		return children;
	}

	function __element5(values, components, key) {
		var children = [
			"1",
			"2",
			__element1(values, components, "3"),
			__element4(values, components, "4")
		];

		return children;
	}

	function __element6(values, components, key) {
		var props = {
			"data": __element5(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["RList"], props, children);
	}

	exports["RList"] = function (components) {
		return __element6({}, components);
	}
}));


