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
			"left": "300",
			"position": "absolute",
			"top": "200"
		};

		return props;
	}

	function __element2(values, components, key) {
		var props = {
			"name": "THIS IS A BOX",
			"style": __element1(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element3(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element2(values, components, "1")
		];

		return React.createElement(components["Container"], props, children);
	}

	exports["Container"] = function (components) {
		return __element3({}, components);
	}
}));


