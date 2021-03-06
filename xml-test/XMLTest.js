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
			"3",
			"4",
			"5"
		];

		return children;
	}

	function __element2(values, components, key) {
		var props = {
			"background": "#aaa",
			"color": "white"
		};

		return props;
	}

	function __element3(values, components, key) {
		var props = {
			"arr": __element1(values, components, "arr"),
			"foo": "bar",
			"styles": __element2(values, components, "styles"),
			"val": "foo"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["XMLTest"], props, children);
	}

	exports["XMLTest"] = function (components) {
		return __element3({}, components);
	}
}));


