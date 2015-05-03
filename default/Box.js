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
			"name": "My Inner Inner Box"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element2(values, components, key) {
		var props = {
			"name": "My Inner Box"
		};
		props["key"] = key;
		var children = [
			__element1(values, components, "1")
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element3(values, components, key) {
		var props = {
			"name": "My Second Inner Box"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element4(values, components, key) {
		var props = {
			"name": "My Box"
		};
		props["key"] = key;
		var children = [
			__element2(values, components, "1"),
			__element3(values, components, "2")
		];

		return React.createElement(components["Box"], props, children);
	}

	exports["Box"] = function (components) {
		return __element4({}, components);
	}
}));


