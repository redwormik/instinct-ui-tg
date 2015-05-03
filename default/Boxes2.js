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
		var props = {
			"name": "This is a name"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Boxes2"], props, children);
	}

	exports["Boxes2"] = function (components) {
		return __element1({}, components);
	}
}));


