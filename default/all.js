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
	function __element001(values, components, key) {

		return values["children"];
	}

	function __element002(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element001(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element003(values, components, key) {
		var props = {
			"border": "3px solid black"
		};

		return props;
	}

	function __element004(values, components, key) {

		return values["caption"];
	}

	function __element005(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element004(values, components, "1")
		];

		return React.createElement("caption", props, children);
	}

	function __element006(values, components, key) {

		return values["data"];
	}

	function __element007(values, components, key) {

		return values["index"];
	}

	function __element008(values, components, key) {

		return values["data"];
	}

	function __element009(values, components, key) {
		var index = __element007(values, components, key);
		var inVal = __element008(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element010(values, components, key) {
		var props = {
			"data": __element009(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["TableRow"], props, children);
	}

	function __element011(values, components, key) {
		var inVal = __element006(values, components, key);
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
			result[key] = __element010(values, components, key);
		});

		return result;
	}

	function __element012(values, components, key) {
		var props = {
			"style": __element003(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element005(values, components, "1"),
			__element011(values, components, "2")
		];

		return React.createElement("table", props, children);
	}

	function __element013(values, components, key) {
		var props = {
			"background": "#999"
		};

		return props;
	}

	function __element014(values, components, key) {

		return values["data"];
	}

	function __element015(values, components, key) {

		return values["index"];
	}

	function __element016(values, components, key) {

		return values["data"];
	}

	function __element017(values, components, key) {
		var index = __element015(values, components, key);
		var inVal = __element016(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element018(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element017(values, components, "1")
		];

		return React.createElement(components["TableCell"], props, children);
	}

	function __element019(values, components, key) {
		var inVal = __element014(values, components, key);
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
			result[key] = __element018(values, components, key);
		});

		return result;
	}

	function __element020(values, components, key) {
		var props = {
			"style": __element013(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element019(values, components, "1")
		];

		return React.createElement("tr", props, children);
	}

	function __element021(values, components, key) {
		var props = {
			"border": "1px solid black"
		};

		return props;
	}

	function __element022(values, components, key) {

		return values["children"];
	}

	function __element023(values, components, key) {
		var props = {
			"style": __element021(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element022(values, components, "1")
		];

		return React.createElement("td", props, children);
	}

	function __element024(values, components, key) {

		return values["style"];
	}

	function __element025(values, components, key) {
		var props = {
			"border": "3px solid black",
			"float": "left",
			"margin": "5",
			"padding": "5"
		};

		return props;
	}

	function __element026(values, components, key) {
		var children = [
			__element024(values, components, "1"),
			__element025(values, components, "2")
		];

		return children;
	}

	function __element027(values, components, key) {
		var merge = __element026(values, components, key);
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

	function __element028(values, components, key) {

		return values["name"];
	}

	function __element029(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element028(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element030(values, components, key) {

		return values["children"];
	}

	function __element031(values, components, key) {
		var props = {
			"style": __element027(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element029(values, components, "1"),
			__element030(values, components, "2")
		];

		return React.createElement("div", props, children);
	}

	function __element032(values, components, key) {
		var props = {
			"name": "My Inner Inner Box"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element033(values, components, key) {
		var props = {
			"name": "My Inner Box"
		};
		props["key"] = key;
		var children = [
			__element032(values, components, "1")
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element034(values, components, key) {
		var props = {
			"name": "My Second Inner Box"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element035(values, components, key) {
		var props = {
			"name": "My Box"
		};
		props["key"] = key;
		var children = [
			__element033(values, components, "1"),
			__element034(values, components, "2")
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element036(values, components, key) {
		var props = {
			"clear": "both"
		};

		return props;
	}

	function __element037(values, components, key) {
		var props = {
			"style": __element036(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("div", props, children);
	}

	function __element038(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element035(values, components, "1"),
			__element037(values, components, "2")
		];

		return React.createElement("div", props, children);
	}

	function __element039(values, components, key) {

		return values["name"];
	}

	function __element040(values, components, key) {
		var props = {
			"name": __element039(values, components, "name")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element041(values, components, key) {
		var props = {
			"name": "NOT NAME"
		};
		props["key"] = key;
		var children = [
			__element040(values, components, "1")
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element042(values, components, key) {

		return values["title"];
	}

	function __element043(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("br", props, children);
	}

	function __element044(values, components, key) {

		return values["src"];
	}

	function __element045(values, components, key) {

		return values["title"];
	}

	function __element046(values, components, key) {

		return values["title"];
	}

	function __element047(values, components, key) {
		var props = {
			"alt": __element045(values, components, "alt"),
			"src": __element044(values, components, "src"),
			"title": __element046(values, components, "title")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("img", props, children);
	}

	function __element048(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element042(values, components, "1"),
			__element043(values, components, "2"),
			__element047(values, components, "3")
		];

		return React.createElement("div", props, children);
	}

	function __element049(values, components, key) {
		var props = {
			"height": "600",
			"position": "relative",
			"width": "100%"
		};

		return props;
	}

	function __element050(values, components, key) {

		return values["children"];
	}

	function __element051(values, components, key) {
		var props = {
			"style": __element049(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element050(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element052(values, components, key) {

		return values["data"];
	}

	function __element053(values, components, key) {
		var inVal = __element052(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
		var result = Array.isArray(inVal) ? [] : {};
		Object.keys(inVal).forEach(function (key) {
			result[key] = "";
		});

		return result;
	}

	function __element054(values, components, key) {

		return values["data"];
	}

	function __element055(values, components, key) {

		return values["i"];
	}

	function __element056(values, components, key) {

		return values["data"];
	}

	function __element057(values, components, key) {
		var index = __element055(values, components, key);
		var inVal = __element056(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element058(values, components, key) {
		var props = {
			"data": __element057(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["RList"], props, children);
	}

	function __element059(values, components, key) {
		var inVal = __element054(values, components, key);
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
			result[key] = __element058(values, components, key);
		});

		return result;
	}

	function __element060(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element059(values, components, "1")
		];

		return React.createElement("ul", props, children);
	}

	function __element061(values, components, key) {

		return values["data"];
	}

	function __element062(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element061(values, components, "1")
		];

		return React.createElement("li", props, children);
	}

	function __element063(values, components, key) {

		var ifVal = __element053(values, components, key);
		if (ifVal) {
			return __element060(values, components, key);
		}
		else {
			return __element062(values, components, key);
		}
	}

	function __element064(values, components, key) {
		var props = {
			"color": "blue"
		};

		return props;
	}

	function __element065(values, components, key) {
		var props = {
			"style": __element064(values, components, "style"),
			"title": "test"
		};
		props["key"] = key;
		var children = [
			"Instinct UI"
		];

		return React.createElement("h1", props, children);
	}

	function __element066(values, components, key) {
		var children = [
			"cell",
			"second",
			"last"
		];

		return children;
	}

	function __element067(values, components, key) {
		var children = [
			"not a cell",
			"not second",
			"last"
		];

		return children;
	}

	function __element068(values, components, key) {
		var children = [
			"not a cell",
			"second",
			"not last"
		];

		return children;
	}

	function __element069(values, components, key) {
		var children = [
			__element066(values, components, "1"),
			__element067(values, components, "2"),
			__element068(values, components, "3")
		];

		return children;
	}

	function __element070(values, components, key) {
		var props = {
			"caption": "This is a table",
			"data": __element069(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Table"], props, children);
	}

	function __element071(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"test"
		];

		return React.createElement("div", props, children);
	}

	function __element072(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("br", props, children);
	}

	function __element073(values, components, key) {
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

	function __element074(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"bar"
		];

		return React.createElement("div", props, children);
	}

	function __element075(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"foo"
		];

		return React.createElement("th", props, children);
	}

	function __element076(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"bar"
		];

		return React.createElement("th", props, children);
	}

	function __element077(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element075(values, components, "1"),
			__element076(values, components, "2")
		];

		return React.createElement("tr", props, children);
	}

	function __element078(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"bar"
		];

		return React.createElement("td", props, children);
	}

	function __element079(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"foo"
		];

		return React.createElement("td", props, children);
	}

	function __element080(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element078(values, components, "1"),
			__element079(values, components, "2")
		];

		return React.createElement("tr", props, children);
	}

	function __element081(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element077(values, components, "1"),
			__element080(values, components, "2")
		];

		return React.createElement("table", props, children);
	}

	function __element082(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Boxes"], props, children);
	}

	function __element083(values, components, key) {
		var props = {
			"src": "https://placekitten.com/g/200/300",
			"title": "THE CAT"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Figure"], props, children);
	}

	function __element084(values, components, key) {
		var children = [
			"foo",
			"bar"
		];

		return children;
	}

	function __element085(values, components, key) {
		var children = [
			"5"
		];

		return children;
	}

	function __element086(values, components, key) {
		var children = [
			"4",
			__element085(values, components, "2")
		];

		return children;
	}

	function __element087(values, components, key) {
		var children = [
			"3",
			__element086(values, components, "2")
		];

		return children;
	}

	function __element088(values, components, key) {
		var children = [
			"1",
			"2",
			__element084(values, components, "3"),
			__element087(values, components, "4")
		];

		return children;
	}

	function __element089(values, components, key) {
		var props = {
			"data": __element088(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["RList"], props, children);
	}

	function __element090(values, components, key) {
		var props = {
			"left": "300",
			"position": "absolute",
			"top": "200"
		};

		return props;
	}

	function __element091(values, components, key) {
		var props = {
			"name": "THIS IS A BOX",
			"style": __element090(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element092(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element091(values, components, "1")
		];

		return React.createElement(components["Container"], props, children);
	}

	function __element093(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element065(values, components, "01"),
			__element070(values, components, "02"),
			__element071(values, components, "03"),
			__element072(values, components, "04"),
			__element073(values, components, "05"),
			__element074(values, components, "06"),
			__element081(values, components, "07"),
			"foo",
			"bar",
			__element082(values, components, "10"),
			__element083(values, components, "11"),
			__element089(values, components, "12"),
			__element092(values, components, "13")
		];

		return React.createElement(components["Everything"], props, children);
	}

	function __element094(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"cell"
		];

		return React.createElement(components["TableCell"], props, children);
	}

	function __element095(values, components, key) {
		var children = [
			"foo",
			"bar"
		];

		return children;
	}

	function __element096(values, components, key) {
		var children = [
			"5"
		];

		return children;
	}

	function __element097(values, components, key) {
		var children = [
			"4",
			__element096(values, components, "2")
		];

		return children;
	}

	function __element098(values, components, key) {
		var children = [
			"3",
			__element097(values, components, "2")
		];

		return children;
	}

	function __element099(values, components, key) {
		var children = [
			"1",
			"2",
			__element095(values, components, "3"),
			__element098(values, components, "4")
		];

		return children;
	}

	function __element100(values, components, key) {
		var props = {
			"data": __element099(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["RList"], props, children);
	}

	function __element101(values, components, key) {
		var children = [
			"cell",
			"second",
			"last"
		];

		return children;
	}

	function __element102(values, components, key) {
		var children = [
			"not a cell",
			"not second",
			"last"
		];

		return children;
	}

	function __element103(values, components, key) {
		var children = [
			"not a cell",
			"second",
			"not last"
		];

		return children;
	}

	function __element104(values, components, key) {
		var children = [
			__element101(values, components, "1"),
			__element102(values, components, "2"),
			__element103(values, components, "3")
		];

		return children;
	}

	function __element105(values, components, key) {
		var props = {
			"caption": "This is a table",
			"data": __element104(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Table"], props, children);
	}

	function __element106(values, components, key) {
		var children = [
			"cell",
			"second",
			"last"
		];

		return children;
	}

	function __element107(values, components, key) {
		var props = {
			"data": __element106(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["TableRow"], props, children);
	}

	function __element108(values, components, key) {
		var props = {
			"name": "My Inner Inner Box"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element109(values, components, key) {
		var props = {
			"name": "My Inner Box"
		};
		props["key"] = key;
		var children = [
			__element108(values, components, "1")
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element110(values, components, key) {
		var props = {
			"name": "My Second Inner Box"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element111(values, components, key) {
		var props = {
			"name": "My Box"
		};
		props["key"] = key;
		var children = [
			__element109(values, components, "1"),
			__element110(values, components, "2")
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element112(values, components, key) {
		var props = {
			"name": "This is a name"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Boxes2"], props, children);
	}

	function __element113(values, components, key) {
		var props = {
			"src": "https://placekitten.com/g/200/300",
			"title": "THE CAT"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Figure"], props, children);
	}

	function __element114(values, components, key) {
		var props = {
			"left": "300",
			"position": "absolute",
			"top": "200"
		};

		return props;
	}

	function __element115(values, components, key) {
		var props = {
			"name": "THIS IS A BOX",
			"style": __element114(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Box"], props, children);
	}

	function __element116(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element115(values, components, "1")
		];

		return React.createElement(components["Container"], props, children);
	}

	function __element117(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Boxes"], props, children);
	}

	var components = exports.components = exports.components || {};

	exports.addComponents = function (newComponents) {
		Object.keys(newComponents).forEach(function (key) {
			components[key] = newComponents[key];
		});
	}

	components["Everything"] = React.createClass({
		render: function () {
			return __element002(this.props, components);
		}
	});

	components["Table"] = React.createClass({
		render: function () {
			return __element012(this.props, components);
		}
	});

	components["TableRow"] = React.createClass({
		render: function () {
			return __element020(this.props, components);
		}
	});

	components["TableCell"] = React.createClass({
		render: function () {
			return __element023(this.props, components);
		}
	});

	components["Box"] = React.createClass({
		render: function () {
			return __element031(this.props, components);
		}
	});

	components["Boxes"] = React.createClass({
		render: function () {
			return __element038(this.props, components);
		}
	});

	components["Boxes2"] = React.createClass({
		render: function () {
			return __element041(this.props, components);
		}
	});

	components["Figure"] = React.createClass({
		render: function () {
			return __element048(this.props, components);
		}
	});

	components["Container"] = React.createClass({
		render: function () {
			return __element051(this.props, components);
		}
	});

	components["RList"] = React.createClass({
		render: function () {
			return __element063(this.props, components);
		}
	});

	exports["Everything"] = function (components) {
		return __element093({}, components);
	}

	exports["TableCell"] = function (components) {
		return __element094({}, components);
	}

	exports["RList"] = function (components) {
		return __element100({}, components);
	}

	exports["Table"] = function (components) {
		return __element105({}, components);
	}

	exports["TableRow"] = function (components) {
		return __element107({}, components);
	}

	exports["Box"] = function (components) {
		return __element111({}, components);
	}

	exports["Boxes2"] = function (components) {
		return __element112({}, components);
	}

	exports["Figure"] = function (components) {
		return __element113({}, components);
	}

	exports["Container"] = function (components) {
		return __element116({}, components);
	}

	exports["Boxes"] = function (components) {
		return __element117({}, components);
	}
}));


