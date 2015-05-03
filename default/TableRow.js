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
			"cell",
			"second",
			"last"
		];

		return children;
	}

	function __element2(values, components, key) {
		var props = {
			"data": __element1(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["TableRow"], props, children);
	}

	exports["TableRow"] = function (components) {
		return __element2({}, components);
	}
}));


