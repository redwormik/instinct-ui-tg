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

		return values["children"];
	}

	function __element02(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element01(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element03(values, components, key) {
		var props = {
			"border": "3px solid black"
		};

		return props;
	}

	function __element04(values, components, key) {

		return values["caption"];
	}

	function __element05(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element04(values, components, "1")
		];

		return React.createElement("caption", props, children);
	}

	function __element06(values, components, key) {

		return values["data"];
	}

	function __element07(values, components, key) {

		return values["index"];
	}

	function __element08(values, components, key) {

		return values["data"];
	}

	function __element09(values, components, key) {
		var index = __element07(values, components, key);
		var inVal = __element08(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element10(values, components, key) {
		var props = {
			"data": __element09(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["TableRow"], props, children);
	}

	function __element11(values, components, key) {
		var inVal = __element06(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var forVal = "index";
		var oldValues = values;
		var values = {};
		Object.keys(oldValues).forEach(function (key) {
			values[key] = oldValues[key];
		});
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			values[forVal] = key;
			result[key] = __element10(values, components, key);
		});

		return result;
	}

	function __element12(values, components, key) {
		var props = {
			"style": __element03(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element05(values, components, "1"),
			__element11(values, components, "2")
		];

		return React.createElement("table", props, children);
	}

	function __element13(values, components, key) {
		var props = {
			"background": "#999"
		};

		return props;
	}

	function __element14(values, components, key) {

		return values["data"];
	}

	function __element15(values, components, key) {

		return values["index"];
	}

	function __element16(values, components, key) {

		return values["data"];
	}

	function __element17(values, components, key) {
		var index = __element15(values, components, key);
		var inVal = __element16(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element18(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element17(values, components, "1")
		];

		return React.createElement(components["TableCell"], props, children);
	}

	function __element19(values, components, key) {
		var inVal = __element14(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var forVal = "index";
		var oldValues = values;
		var values = {};
		Object.keys(oldValues).forEach(function (key) {
			values[key] = oldValues[key];
		});
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			values[forVal] = key;
			result[key] = __element18(values, components, key);
		});

		return result;
	}

	function __element20(values, components, key) {
		var props = {
			"style": __element13(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element19(values, components, "1")
		];

		return React.createElement("tr", props, children);
	}

	function __element21(values, components, key) {
		var props = {
			"border": "1px solid black"
		};

		return props;
	}

	function __element22(values, components, key) {

		return values["children"];
	}

	function __element23(values, components, key) {
		var props = {
			"style": __element21(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element22(values, components, "1")
		];

		return React.createElement("td", props, children);
	}

	function __element24(values, components, key) {

		return values["style"];
	}

	function __element25(values, components, key) {
		var props = {
			"border": "3px solid black",
			"float": "left",
			"margin": "5",
			"padding": "5"
		};

		return props;
	}

	function __element26(values, components, key) {
		var children = [
			__element24(values, components, "1"),
			__element25(values, components, "2")
		];

		return children;
	}

	function __element27(values, components, key) {
		var merge = __element26(values, components, key);
		if (!Array.isArray(merge)) {
			return merge;
		}
		var result = {};
		merge.forEach(function (source) {
			if (source === null || typeof source !== "object") {
				return;
			}
			var stack = [{ target: result, source: source }];
			while (stack.length > 0) {
				var current = stack.pop();
				Object.keys(current.source).forEach(function (key) {
					var from = current.source[key];
					if (from === null || typeof from !== "object") {
						current.target[key] = from;
					}
					else {
						var to = current.target[key];
						if (to === null || typeof to !== "object") {
							to = current.target[key] = {};
						}
						stack.push({ target: to, source: from });
					}
				});
			}
		});

		return result;
	}

	function __element28(values, components, key) {

		return values["name"];
	}

	function __element29(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element28(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element30(values, components, key) {

		return values["children"];
	}

	function __element31(values, components, key) {
		var props = {
			"style": __element27(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element29(values, components, "1"),
			__element30(values, components, "2")
		];

		return React.createElement("div", props, children);
	}

	function __element32(values, components, key) {
		var props = {
			"name": "My Inner Inner Box"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element33(values, components, key) {
		var props = {
			"name": "My Inner Box"
		};
		props["key"] = key;
		var children = [
			__element32(values, components, "1")
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element34(values, components, key) {
		var props = {
			"name": "My Second Inner Box"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element35(values, components, key) {
		var props = {
			"name": "My Box"
		};
		props["key"] = key;
		var children = [
			__element33(values, components, "1"),
			__element34(values, components, "2")
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element36(values, components, key) {
		var props = {
			"clear": "both"
		};

		return props;
	}

	function __element37(values, components, key) {
		var props = {
			"style": __element36(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("div", props, children);
	}

	function __element38(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element35(values, components, "1"),
			__element37(values, components, "2")
		];

		return React.createElement("div", props, children);
	}

	function __element39(values, components, key) {

		return values["name"];
	}

	function __element40(values, components, key) {
		var props = {
			"name": __element39(values, components, "name")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element41(values, components, key) {
		var props = {
			"name": "NOT NAME"
		};
		props["key"] = key;
		var children = [
			__element40(values, components, "1")
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element42(values, components, key) {

		return values["title"];
	}

	function __element43(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("br", props, children);
	}

	function __element44(values, components, key) {

		return values["src"];
	}

	function __element45(values, components, key) {

		return values["title"];
	}

	function __element46(values, components, key) {

		return values["title"];
	}

	function __element47(values, components, key) {
		var props = {
			"alt": __element45(values, components, "alt"),
			"src": __element44(values, components, "src"),
			"title": __element46(values, components, "title")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("img", props, children);
	}

	function __element48(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element42(values, components, "1"),
			__element43(values, components, "2"),
			__element47(values, components, "3")
		];

		return React.createElement("div", props, children);
	}

	function __element49(values, components, key) {
		var props = {
			"height": "600",
			"position": "relative",
			"width": "100%"
		};

		return props;
	}

	function __element50(values, components, key) {

		return values["children"];
	}

	function __element51(values, components, key) {
		var props = {
			"style": __element49(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element50(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element52(values, components, key) {

		return values["data"];
	}

	function __element53(values, components, key) {
		var inVal = __element52(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			result[key] = "";
		});

		return result;
	}

	function __element54(values, components, key) {

		return values["data"];
	}

	function __element55(values, components, key) {

		return values["i"];
	}

	function __element56(values, components, key) {

		return values["data"];
	}

	function __element57(values, components, key) {
		var index = __element55(values, components, key);
		var inVal = __element56(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element58(values, components, key) {
		var props = {
			"data": __element57(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["RList"], props, children);
	}

	function __element59(values, components, key) {
		var inVal = __element54(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var forVal = "i";
		var oldValues = values;
		var values = {};
		Object.keys(oldValues).forEach(function (key) {
			values[key] = oldValues[key];
		});
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			values[forVal] = key;
			result[key] = __element58(values, components, key);
		});

		return result;
	}

	function __element60(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element59(values, components, "1")
		];

		return React.createElement("ul", props, children);
	}

	function __element61(values, components, key) {

		return values["data"];
	}

	function __element62(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element61(values, components, "1")
		];

		return React.createElement("li", props, children);
	}

	function __element63(values, components, key) {

		var ifVal = __element53(values, components, key);
		if (ifVal) {
			return __element60(values, components, key);
		}
		else {
			return __element62(values, components, key);
		}
	}

	var components = exports.components = exports.components || {};

	exports.addComponents = function (newComponents) {
		Object.keys(newComponents).forEach(function (key) {
			components[key] = newComponents[key];
		});
	}

	components["Everything"] = React.createClass({
		render: function () {
			return __element02(this.props, components);
		}
	});

	components["Table"] = React.createClass({
		render: function () {
			return __element12(this.props, components);
		}
	});

	components["TableRow"] = React.createClass({
		render: function () {
			return __element20(this.props, components);
		}
	});

	components["TableCell"] = React.createClass({
		render: function () {
			return __element23(this.props, components);
		}
	});

	components["Box"] = React.createClass({
		render: function () {
			return __element31(this.props, components);
		}
	});

	components["Boxes"] = React.createClass({
		render: function () {
			return __element38(this.props, components);
		}
	});

	components["Boxes2"] = React.createClass({
		render: function () {
			return __element41(this.props, components);
		}
	});

	components["Figure"] = React.createClass({
		render: function () {
			return __element48(this.props, components);
		}
	});

	components["Container"] = React.createClass({
		render: function () {
			return __element51(this.props, components);
		}
	});

	components["RList"] = React.createClass({
		render: function () {
			return __element63(this.props, components);
		}
	});
}));


