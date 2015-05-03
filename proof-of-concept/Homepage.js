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
			"image": "http://placekitten.com/g/200/150",
			"link": "/product/1",
			"name": "Product 1"
		};

		return props;
	}

	function __element02(values, components, key) {
		var props = {
			"image": "http://placekitten.com/g/200/150",
			"link": "/product/1",
			"name": "Product 2"
		};

		return props;
	}

	function __element03(values, components, key) {
		var props = {
			"image": "http://placekitten.com/g/200/150",
			"link": "/product/1",
			"name": "Product 3"
		};

		return props;
	}

	function __element04(values, components, key) {
		var props = {
			"image": "http://placekitten.com/g/200/150",
			"link": "/product/1",
			"name": "Product 4"
		};

		return props;
	}

	function __element05(values, components, key) {
		var props = {
			"image": "http://placekitten.com/g/200/150",
			"link": "/product/1",
			"name": "Product 5"
		};

		return props;
	}

	function __element06(values, components, key) {
		var props = {
			"image": "http://placekitten.com/g/200/150",
			"link": "/product/1",
			"name": "Product 6"
		};

		return props;
	}

	function __element07(values, components, key) {
		var children = [
			__element01(values, components, "1"),
			__element02(values, components, "2"),
			__element03(values, components, "3"),
			__element04(values, components, "4"),
			__element05(values, components, "5"),
			__element06(values, components, "6")
		];

		return children;
	}

	function __element08(values, components, key) {
		var props = {
			"link": "/category/2",
			"name": "Category 2"
		};

		return props;
	}

	function __element09(values, components, key) {
		var props = {
			"link": "/category/3",
			"name": "Category 3"
		};

		return props;
	}

	function __element10(values, components, key) {
		var children = [
			__element08(values, components, "1"),
			__element09(values, components, "2")
		];

		return children;
	}

	function __element11(values, components, key) {
		var props = {
			"children": __element10(values, components, "children"),
			"link": "/category/1",
			"name": "Category"
		};

		return props;
	}

	function __element12(values, components, key) {
		var props = {
			"link": "/category/5",
			"name": "Category 5"
		};

		return props;
	}

	function __element13(values, components, key) {
		var props = {
			"link": "/category/6",
			"name": "Category 6"
		};

		return props;
	}

	function __element14(values, components, key) {
		var children = [
			__element12(values, components, "1"),
			__element13(values, components, "2")
		];

		return children;
	}

	function __element15(values, components, key) {
		var props = {
			"children": __element14(values, components, "children"),
			"link": "/category/4",
			"name": "Category 4"
		};

		return props;
	}

	function __element16(values, components, key) {
		var props = {
			"link": "/category/7",
			"name": "Category 7"
		};

		return props;
	}

	function __element17(values, components, key) {
		var props = {
			"link": "/category/8",
			"name": "Category 8"
		};

		return props;
	}

	function __element18(values, components, key) {
		var children = [
			__element11(values, components, "1"),
			__element15(values, components, "2"),
			__element16(values, components, "3"),
			__element17(values, components, "4")
		];

		return children;
	}

	function __element19(values, components, key) {
		var props = {
			"categories": __element18(values, components, "categories"),
			"items": Number("4"),
			"products": __element07(values, components, "products"),
			"total": Number("42.1")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Homepage"], props, children);
	}

	exports["Homepage"] = function (components) {
		return __element19({}, components);
	}
}));


