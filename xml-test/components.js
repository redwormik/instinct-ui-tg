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

		return values["style"];
	}

	function __element02(values, components, key) {
		var props = {
			"border": "3px solid black",
			"float": "left",
			"margin": "5",
			"padding": "5"
		};

		return props;
	}

	function __element03(values, components, key) {
		var children = [
			__element01(values, components, "1"),
			__element02(values, components, "2")
		];

		return children;
	}

	function __element04(values, components, key) {
		var merge = __element03(values, components, key);
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

	function __element05(values, components, key) {

		return values["name"];
	}

	function __element06(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element05(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element07(values, components, key) {

		return values["children"];
	}

	function __element08(values, components, key) {
		var props = {
			"style": __element04(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element06(values, components, "1"),
			__element07(values, components, "2")
		];

		return React.createElement("div", props, children);
	}

	function __element09(values, components, key) {
		var props = {
			"color": "red"
		};

		return props;
	}

	function __element10(values, components, key) {
		var children = [
			"foo",
			"bar"
		];

		return children;
	}

	function __element11(values, components, key) {
		var props = {
			"name": "Box"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element12(values, components, key) {

		return values["val"];
	}

	function __element13(values, components, key) {

		return values["val"];
	}

	function __element14(values, components, key) {

		return values[__element13(values, components, key)];
	}

	function __element15(values, components, key) {
		var children = [
			"6",
			"66",
			"666"
		];

		return children;
	}

	function __element16(values, components, key) {
		var index = "2";
		var inVal = __element15(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element17(values, components, key) {
		var props = {
			"x": "y"
		};

		return props;
	}

	function __element18(values, components, key) {
		var index = "x";
		var inVal = __element17(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element19(values, components, key) {
		var children = [
			"0",
			"1",
			"2"
		];

		return children;
	}

	function __element20(values, components, key) {

		return values["val"];
	}

	function __element21(values, components, key) {
		var inVal = __element19(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var forVal = "val";
		var oldValues = values;
		var values = {};
		Object.keys(oldValues).forEach(function (key) {
			values[key] = oldValues[key];
		});
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			values[forVal] = key;
			result[key] = __element20(values, components, key);
		});

		return result;
	}

	function __element22(values, components, key) {

		return values["arr"];
	}

	function __element23(values, components, key) {

		return values["val"];
	}

	function __element24(values, components, key) {

		return values["arr"];
	}

	function __element25(values, components, key) {
		var index = __element23(values, components, key);
		var inVal = __element24(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element26(values, components, key) {
		var inVal = __element22(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var forVal = "val";
		var oldValues = values;
		var values = {};
		Object.keys(oldValues).forEach(function (key) {
			values[key] = oldValues[key];
		});
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			values[forVal] = key;
			result[key] = __element25(values, components, key);
		});

		return result;
	}

	function __element27(values, components, key) {
		var children = [
			"0",
			"0"
		];

		return children;
	}

	function __element28(values, components, key) {
		var inVal = __element27(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			result[key] = "foo";
		});

		return result;
	}

	function __element29(values, components, key) {
		var children = [
			"0",
			"0"
		];

		return children;
	}

	function __element30(values, components, key) {
		var inVal = __element29(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			result[key] = Number("1");
		});

		return result;
	}

	function __element31(values, components, key) {
		var children = [
			"0",
			"0"
		];

		return children;
	}

	function __element32(values, components, key) {
		var inVal = __element31(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			result[key] = true;
		});

		return result;
	}

	function __element33(values, components, key) {
		var children = [
			"0",
			"0"
		];

		return children;
	}

	function __element34(values, components, key) {
		var children = [
			"7",
			"8"
		];

		return children;
	}

	function __element35(values, components, key) {
		var inVal = __element33(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			result[key] = __element34(values, components, key);
		});

		return result;
	}

	function __element36(values, components, key) {

		return values["styles"];
	}

	function __element37(values, components, key) {

		return values["key"];
	}

	function __element38(values, components, key) {

		return values["styles"];
	}

	function __element39(values, components, key) {
		var index = __element37(values, components, key);
		var inVal = __element38(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element40(values, components, key) {
		var inVal = __element36(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var forVal = "key";
		var oldValues = values;
		var values = {};
		Object.keys(oldValues).forEach(function (key) {
			values[key] = oldValues[key];
		});
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			values[forVal] = key;
			result[key] = __element39(values, components, key);
		});

		return result;
	}

	function __element41(values, components, key) {
		var props = {
			"name": "Box",
			"style": __element40(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element42(values, components, key) {

		return values["arr"];
	}

	function __element43(values, components, key) {

		return values["val"];
	}

	function __element44(values, components, key) {

		return values["val"];
	}

	function __element45(values, components, key) {

		return values["arr"];
	}

	function __element46(values, components, key) {
		var index = __element44(values, components, key);
		var inVal = __element45(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element47(values, components, key) {
		var props = {
			"name": __element43(values, components, "name"),
			"value": __element46(values, components, "value")
		};

		return props;
	}

	function __element48(values, components, key) {
		var inVal = __element42(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var forVal = "val";
		var oldValues = values;
		var values = {};
		Object.keys(oldValues).forEach(function (key) {
			values[key] = oldValues[key];
		});
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			values[forVal] = key;
			result[key] = __element47(values, components, key);
		});

		return result;
	}

	function __element49(values, components, key) {
		var props = {
			"data": __element48(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["List"], props, children);
	}

	function __element50(values, components, key) {

		var ifVal = true;
		if (ifVal) {
			return true;
		}
		else {
			return false;
		}
	}

	function __element51(values, components, key) {

		var ifVal = "";
		if (ifVal) {
			return "true";
		}
		else {
			return "false";
		}
	}

	function __element52(values, components, key) {
		var ifVal = Number("42");
		if (ifVal) {
			return Number("1");
		}
		else {
			return Number("0");
		}
	}

	function __element53(values, components, key) {
		var ifVal = Number("0");
		if (ifVal) {
			return Number("1");
		}
		else {
			return Number("0");
		}
	}

	function __element54(values, components, key) {
		var children = [
		];

		return children;
	}

	function __element55(values, components, key) {
		var children = [
			"true"
		];

		return children;
	}

	function __element56(values, components, key) {
		var children = [
			"false"
		];

		return children;
	}

	function __element57(values, components, key) {

		var ifVal = __element54(values, components, key);
		if (ifVal) {
			return __element55(values, components, key);
		}
		else {
			return __element56(values, components, key);
		}
	}

	function __element58(values, components, key) {
		var props = {
		};

		return props;
	}

	function __element59(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"true"
		];

		return React.createElement("div", props, children);
	}

	function __element60(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"false"
		];

		return React.createElement("div", props, children);
	}

	function __element61(values, components, key) {

		var ifVal = __element58(values, components, key);
		if (ifVal) {
			return __element59(values, components, key);
		}
		else {
			return __element60(values, components, key);
		}
	}

	function __element62(values, components, key) {

		return values["val"];
	}

	function __element63(values, components, key) {

		return values["val"];
	}

	function __element64(values, components, key) {

		return values["foo"];
	}

	function __element65(values, components, key) {

		var ifVal = __element62(values, components, key);
		if (ifVal) {
			return __element63(values, components, key);
		}
		else {
			return __element64(values, components, key);
		}
	}

	function __element66(values, components, key) {
		var props = {
			"draggable": true,
			"hidden": false,
			"style": __element09(values, components, "style"),
			"tabIndex": Number("1"),
			"title": "Title"
		};
		props["key"] = key;
		var children = [
			"XMLTest",
			__element10(values, components, "02"),
			__element11(values, components, "03"),
			__element12(values, components, "04"),
			__element14(values, components, "05"),
			__element16(values, components, "06"),
			__element18(values, components, "07"),
			__element21(values, components, "08"),
			__element26(values, components, "09"),
			__element28(values, components, "10"),
			__element30(values, components, "11"),
			__element32(values, components, "12"),
			__element35(values, components, "13"),
			__element41(values, components, "14"),
			__element49(values, components, "15"),
			__element50(values, components, "16"),
			__element51(values, components, "17"),
			__element52(values, components, "18"),
			__element53(values, components, "19"),
			__element57(values, components, "20"),
			__element61(values, components, "21"),
			__element65(values, components, "22")
		];

		return React.createElement("div", props, children);
	}

	function __element67(values, components, key) {

		return values["data"];
	}

	function __element68(values, components, key) {

		return values["i"];
	}

	function __element69(values, components, key) {

		return values["data"];
	}

	function __element70(values, components, key) {
		var index = __element68(values, components, key);
		var inVal = __element69(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element71(values, components, key) {
		var index = "name";
		var inVal = __element70(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element72(values, components, key) {

		return values["i"];
	}

	function __element73(values, components, key) {

		return values["data"];
	}

	function __element74(values, components, key) {
		var index = __element72(values, components, key);
		var inVal = __element73(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element75(values, components, key) {
		var index = "value";
		var inVal = __element74(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element76(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element71(values, components, "1"),
			" =>",
			__element75(values, components, "3")
		];

		return React.createElement("li", props, children);
	}

	function __element77(values, components, key) {
		var inVal = __element67(values, components, key);
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
			result[key] = __element76(values, components, key);
		});

		return result;
	}

	function __element78(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element77(values, components, "1")
		];

		return React.createElement("ul", props, children);
	}

	var components = exports.components = exports.components || {};

	exports.addComponents = function (newComponents) {
		Object.keys(newComponents).forEach(function (key) {
			components[key] = newComponents[key];
		});
	}

	components["Box"] = React.createClass({
		render: function () {
			return __element08(this.props, components);
		}
	});

	components["XMLTest"] = React.createClass({
		render: function () {
			return __element66(this.props, components);
		}
	});

	components["List"] = React.createClass({
		render: function () {
			return __element78(this.props, components);
		}
	});
}));


