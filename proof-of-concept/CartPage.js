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
			"cost": Number("10.5"),
			"costTotal": Number("42"),
			"link": "/product/1",
			"name": "Product name 1",
			"qty": Number("4"),
			"removeLink": "/cart?remove=1"
		};

		return props;
	}

	function __element02(values, components, key) {
		var props = {
			"cost": Number("5.25"),
			"costTotal": Number("21"),
			"link": "/product/2",
			"name": "Product name 2",
			"qty": Number("4"),
			"removeLink": "/cart?remove=2"
		};

		return props;
	}

	function __element03(values, components, key) {
		var props = {
			"cost": Number("10.5"),
			"costTotal": Number("31.5"),
			"link": "/product/3",
			"name": "Product name 3",
			"qty": Number("3"),
			"removeLink": "/cart?remove=3"
		};

		return props;
	}

	function __element04(values, components, key) {
		var props = {
			"cost": Number("1.05"),
			"costTotal": Number("3.15"),
			"link": "/product/4",
			"name": "Product name 4",
			"qty": Number("3"),
			"removeLink": "/cart?remove=4"
		};

		return props;
	}

	function __element05(values, components, key) {
		var children = [
			__element01(values, components, "1"),
			__element02(values, components, "2"),
			__element03(values, components, "3"),
			__element04(values, components, "4")
		];

		return children;
	}

	function __element06(values, components, key) {
		var props = {
			"link": "/category/2",
			"name": "Category 2"
		};

		return props;
	}

	function __element07(values, components, key) {
		var props = {
			"link": "/category/3",
			"name": "Category 3"
		};

		return props;
	}

	function __element08(values, components, key) {
		var children = [
			__element06(values, components, "1"),
			__element07(values, components, "2")
		];

		return children;
	}

	function __element09(values, components, key) {
		var props = {
			"children": __element08(values, components, "children"),
			"link": "/category/1",
			"name": "Category"
		};

		return props;
	}

	function __element10(values, components, key) {
		var props = {
			"link": "/category/5",
			"name": "Category 5"
		};

		return props;
	}

	function __element11(values, components, key) {
		var props = {
			"link": "/category/6",
			"name": "Category 6"
		};

		return props;
	}

	function __element12(values, components, key) {
		var children = [
			__element10(values, components, "1"),
			__element11(values, components, "2")
		];

		return children;
	}

	function __element13(values, components, key) {
		var props = {
			"children": __element12(values, components, "children"),
			"link": "/category/4",
			"name": "Category 4"
		};

		return props;
	}

	function __element14(values, components, key) {
		var props = {
			"link": "/category/7",
			"name": "Category 7"
		};

		return props;
	}

	function __element15(values, components, key) {
		var props = {
			"link": "/category/8",
			"name": "Category 8"
		};

		return props;
	}

	function __element16(values, components, key) {
		var children = [
			__element09(values, components, "1"),
			__element13(values, components, "2"),
			__element14(values, components, "3"),
			__element15(values, components, "4")
		];

		return children;
	}

	function __element17(values, components, key) {
		var props = {
			"cartData": __element05(values, components, "cartData"),
			"categories": __element16(values, components, "categories"),
			"items": Number("12"),
			"total": Number("97.65")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["CartPage"], props, children);
	}

	exports["CartPage"] = function (components) {
		return __element17({}, components);
	}
}));


