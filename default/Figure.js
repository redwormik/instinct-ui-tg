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
			"src": "https://placekitten.com/g/200/300",
			"title": "THE CAT"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Figure"], props, children);
	}

	exports["Figure"] = function (components) {
		return __element1({}, components);
	}
}));


