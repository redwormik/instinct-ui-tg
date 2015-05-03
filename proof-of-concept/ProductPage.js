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
		var children = [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada maximus metus non volutpat. Etiam tincidunt auctor sapien, ornare rhoncus nibh. Integer vulputate lectus sed dui feugiat, ut faucibus dui pharetra. Morbi sed venenatis elit, eu vestibulum lorem. Morbi sit amet lorem lorem. Nam laoreet, tortor a feugiat ullamcorper, elit ipsum lobortis est, et malesuada justo mauris non turpis.",
			"Quisque eget lectus auctor, mollis dui eget, porta lorem. Phasellus vel feugiat lacus. In molestie; urna eu auctor commodo, ligula nunc placerat quam, euismod feugiat ipsum lorem non ligula. Duis purus dui, cursus quis magna quis, dignissim eleifend mauris."
		];

		return children;
	}

	function __element02(values, components, key) {
		var props = {
			"description": __element01(values, components, "description"),
			"image": "http://www.placekitten.com/g/200/300",
			"name": "Product name"
		};

		return props;
	}

	function __element03(values, components, key) {
		var props = {
			"link": "/category/2",
			"name": "Category 2"
		};

		return props;
	}

	function __element04(values, components, key) {
		var props = {
			"link": "/category/3",
			"name": "Category 3"
		};

		return props;
	}

	function __element05(values, components, key) {
		var children = [
			__element03(values, components, "1"),
			__element04(values, components, "2")
		];

		return children;
	}

	function __element06(values, components, key) {
		var props = {
			"children": __element05(values, components, "children"),
			"link": "/category/1",
			"name": "Category"
		};

		return props;
	}

	function __element07(values, components, key) {
		var props = {
			"link": "/category/5",
			"name": "Category 5"
		};

		return props;
	}

	function __element08(values, components, key) {
		var props = {
			"link": "/category/6",
			"name": "Category 6"
		};

		return props;
	}

	function __element09(values, components, key) {
		var children = [
			__element07(values, components, "1"),
			__element08(values, components, "2")
		];

		return children;
	}

	function __element10(values, components, key) {
		var props = {
			"children": __element09(values, components, "children"),
			"link": "/category/4",
			"name": "Category 4"
		};

		return props;
	}

	function __element11(values, components, key) {
		var props = {
			"link": "/category/7",
			"name": "Category 7"
		};

		return props;
	}

	function __element12(values, components, key) {
		var props = {
			"link": "/category/8",
			"name": "Category 8"
		};

		return props;
	}

	function __element13(values, components, key) {
		var children = [
			__element06(values, components, "1"),
			__element10(values, components, "2"),
			__element11(values, components, "3"),
			__element12(values, components, "4")
		];

		return children;
	}

	function __element14(values, components, key) {
		var props = {
			"categories": __element13(values, components, "categories"),
			"items": Number("4"),
			"product": __element02(values, components, "product"),
			"total": Number("42.1")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["ProductPage"], props, children);
	}

	exports["ProductPage"] = function (components) {
		return __element14({}, components);
	}
}));


