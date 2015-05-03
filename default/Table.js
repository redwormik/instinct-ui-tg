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
		var children = [
			"not a cell",
			"not second",
			"last"
		];

		return children;
	}

	function __element3(values, components, key) {
		var children = [
			"not a cell",
			"second",
			"not last"
		];

		return children;
	}

	function __element4(values, components, key) {
		var children = [
			__element1(values, components, "1"),
			__element2(values, components, "2"),
			__element3(values, components, "3")
		];

		return children;
	}

	function __element5(values, components, key) {
		var props = {
			"caption": "This is a table",
			"data": __element4(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Table"], props, children);
	}

	exports["Table"] = function (components) {
		return __element5({}, components);
	}
}));


