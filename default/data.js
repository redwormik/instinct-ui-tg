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
	function __element01(values, components, key) {
		var props = {
			"color": "blue"
		};

		return props;
	}

	function __element02(values, components, key) {
		var props = {
			"style": __element01(values, components, "style"),
			"title": "test"
		};
		props["key"] = key;
		var children = [
			"Instinct UI"
		];

		return React.createElement("h1", props, children);
	}

	function __element03(values, components, key) {
		var children = [
			"cell",
			"second",
			"last"
		];

		return children;
	}

	function __element04(values, components, key) {
		var children = [
			"not a cell",
			"not second",
			"last"
		];

		return children;
	}

	function __element05(values, components, key) {
		var children = [
			"not a cell",
			"second",
			"not last"
		];

		return children;
	}

	function __element06(values, components, key) {
		var children = [
			__element03(values, components, "1"),
			__element04(values, components, "2"),
			__element05(values, components, "3")
		];

		return children;
	}

	function __element07(values, components, key) {
		var props = {
			"caption": "This is a table",
			"data": __element06(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Table"], props, children);
	}

	function __element08(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"test"
		];

		return React.createElement("div", props, children);
	}

	function __element09(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("br", props, children);
	}

	function __element10(values, components, key) {
		var props = {
			"href": "http://seznam.cz",
			"target": "_blank"
		};
		props["key"] = key;
		var children = [
			"link"
		];

		return React.createElement("a", props, children);
	}

	function __element11(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"bar"
		];

		return React.createElement("div", props, children);
	}

	function __element12(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"foo"
		];

		return React.createElement("th", props, children);
	}

	function __element13(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"bar"
		];

		return React.createElement("th", props, children);
	}

	function __element14(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element12(values, components, "1"),
			__element13(values, components, "2")
		];

		return React.createElement("tr", props, children);
	}

	function __element15(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"bar"
		];

		return React.createElement("td", props, children);
	}

	function __element16(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"foo"
		];

		return React.createElement("td", props, children);
	}

	function __element17(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element15(values, components, "1"),
			__element16(values, components, "2")
		];

		return React.createElement("tr", props, children);
	}

	function __element18(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element14(values, components, "1"),
			__element17(values, components, "2")
		];

		return React.createElement("table", props, children);
	}

	function __element19(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Boxes"], props, children);
	}

	function __element20(values, components, key) {
		var props = {
			"src": "https://placekitten.com/g/200/300",
			"title": "THE CAT"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Figure"], props, children);
	}

	function __element21(values, components, key) {
		var children = [
			"foo",
			"bar"
		];

		return children;
	}

	function __element22(values, components, key) {
		var children = [
			"5"
		];

		return children;
	}

	function __element23(values, components, key) {
		var children = [
			"4",
			__element22(values, components, "2")
		];

		return children;
	}

	function __element24(values, components, key) {
		var children = [
			"3",
			__element23(values, components, "2")
		];

		return children;
	}

	function __element25(values, components, key) {
		var children = [
			"1",
			"2",
			__element21(values, components, "3"),
			__element24(values, components, "4")
		];

		return children;
	}

	function __element26(values, components, key) {
		var props = {
			"data": __element25(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["RList"], props, children);
	}

	function __element27(values, components, key) {
		var props = {
			"left": "300",
			"position": "absolute",
			"top": "200"
		};

		return props;
	}

	function __element28(values, components, key) {
		var props = {
			"name": "THIS IS A BOX",
			"style": __element27(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element29(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element28(values, components, "1")
		];

		return React.createElement(components["Container"], props, children);
	}

	function __element30(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element02(values, components, "01"),
			__element07(values, components, "02"),
			__element08(values, components, "03"),
			__element09(values, components, "04"),
			__element10(values, components, "05"),
			__element11(values, components, "06"),
			__element18(values, components, "07"),
			"foo",
			"bar",
			__element19(values, components, "10"),
			__element20(values, components, "11"),
			__element26(values, components, "12"),
			__element29(values, components, "13")
		];

		return React.createElement(components["Everything"], props, children);
	}

	function __element31(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"cell"
		];

		return React.createElement(components["TableCell"], props, children);
	}

	function __element32(values, components, key) {
		var children = [
			"foo",
			"bar"
		];

		return children;
	}

	function __element33(values, components, key) {
		var children = [
			"5"
		];

		return children;
	}

	function __element34(values, components, key) {
		var children = [
			"4",
			__element33(values, components, "2")
		];

		return children;
	}

	function __element35(values, components, key) {
		var children = [
			"3",
			__element34(values, components, "2")
		];

		return children;
	}

	function __element36(values, components, key) {
		var children = [
			"1",
			"2",
			__element32(values, components, "3"),
			__element35(values, components, "4")
		];

		return children;
	}

	function __element37(values, components, key) {
		var props = {
			"data": __element36(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["RList"], props, children);
	}

	function __element38(values, components, key) {
		var children = [
			"cell",
			"second",
			"last"
		];

		return children;
	}

	function __element39(values, components, key) {
		var children = [
			"not a cell",
			"not second",
			"last"
		];

		return children;
	}

	function __element40(values, components, key) {
		var children = [
			"not a cell",
			"second",
			"not last"
		];

		return children;
	}

	function __element41(values, components, key) {
		var children = [
			__element38(values, components, "1"),
			__element39(values, components, "2"),
			__element40(values, components, "3")
		];

		return children;
	}

	function __element42(values, components, key) {
		var props = {
			"caption": "This is a table",
			"data": __element41(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Table"], props, children);
	}

	function __element43(values, components, key) {
		var children = [
			"cell",
			"second",
			"last"
		];

		return children;
	}

	function __element44(values, components, key) {
		var props = {
			"data": __element43(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["TableRow"], props, children);
	}

	function __element45(values, components, key) {
		var props = {
			"name": "My Inner Inner Box"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element46(values, components, key) {
		var props = {
			"name": "My Inner Box"
		};
		props["key"] = key;
		var children = [
			__element45(values, components, "1")
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element47(values, components, key) {
		var props = {
			"name": "My Second Inner Box"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element48(values, components, key) {
		var props = {
			"name": "My Box"
		};
		props["key"] = key;
		var children = [
			__element46(values, components, "1"),
			__element47(values, components, "2")
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element49(values, components, key) {
		var props = {
			"name": "This is a name"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Boxes2"], props, children);
	}

	function __element50(values, components, key) {
		var props = {
			"src": "https://placekitten.com/g/200/300",
			"title": "THE CAT"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Figure"], props, children);
	}

	function __element51(values, components, key) {
		var props = {
			"left": "300",
			"position": "absolute",
			"top": "200"
		};

		return props;
	}

	function __element52(values, components, key) {
		var props = {
			"name": "THIS IS A BOX",
			"style": __element51(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element53(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element52(values, components, "1")
		];

		return React.createElement(components["Container"], props, children);
	}

	function __element54(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Boxes"], props, children);
	}

	exports["Everything"] = function (components) {
		return __element30({}, components);
	}

	exports["TableCell"] = function (components) {
		return __element31({}, components);
	}

	exports["RList"] = function (components) {
		return __element37({}, components);
	}

	exports["Table"] = function (components) {
		return __element42({}, components);
	}

	exports["TableRow"] = function (components) {
		return __element44({}, components);
	}

	exports["Box"] = function (components) {
		return __element48({}, components);
	}

	exports["Boxes2"] = function (components) {
		return __element49({}, components);
	}

	exports["Figure"] = function (components) {
		return __element50({}, components);
	}

	exports["Container"] = function (components) {
		return __element53({}, components);
	}

	exports["Boxes"] = function (components) {
		return __element54({}, components);
	}
}));


