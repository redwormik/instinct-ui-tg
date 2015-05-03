[@EXTEND
Derive syntaxVal isa root where elementType = 'syntax' and root = '$val';
Derive syntaxIndex isa root where elementType = 'syntax' and root = '$index';
Derive syntaxFor isa root where elementType = 'syntax' and root = '$for';
Derive forId isa root where (forValue <> '' or forElement <> '') and doValue = '';
Derive syntaxIf isa root where elementType = 'syntax' and root = '$if';
Derive syntaxMerge isa root where elementType = 'syntax' and root = '$merge';
@
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define(\["exports", "react"\], factory);
	} else if (typeof exports === "object") {
		// CommonJS
		factory(exports, require("react"));
	} else {
		// Browser globals
		global.InstinctUI = global.InstinctUI || {};
		factory(global.InstinctUI, global.React);
	}
}(this, function (exports, React) {
[$~elementIndex$
	function __element$elementIndex$(values, components, key) {
[$?elementType not in ('tag', 'component', 'syntax', 'object', 'array')$
		return null;]
[		var props = {[$~propertyName$[
			"$propertyName$": Number("$propertyValue$")$?propertyType in ('number')$][
			"$propertyName$": true$?propertyType in ('boolean')$$?propertyValue not in ('false', '')$][
			"$propertyName$": false$?propertyType in ('boolean')$$?propertyValue = 'false'$][
			"$propertyName$": "$propertyValue$"$?propertyType not in ('number', 'boolean')$][
			"$propertyName$": __element$propertyElement$(values, components, "$propertyName$")$?propertyValue = ''$][
			"$propertyName$": ""$?propertyValue = ''$$?propertyElement = ''$]^,]
		};$?elementType in ('tag', 'component', 'object')$]
[		props\["key"\] = key;$?elementType in ('tag', 'component')$]
[		var children = \[[$~childIndex$[
			"$childValue$"][
			__element$childElement$(values, components, "$childIndex$")$?childValue = ''$][
			""$?childValue = ''$$?childElement = ''$]^,]
		\];$?elementType in ('tag', 'component', 'array')$]
[$?elementType = 'tag'$
		return React.createElement("$root$", props, children);]
[$?elementType = 'component'$
		return React.createElement(components\["$root$"\], props, children);]
[$?elementType = 'object'$
		return props;]
[$?elementType = 'array'$
		return children;]
[$~syntaxVal$

		return values\[![["$valValue$"][__element$valElement$(values, components, key)$?valValue = ''$]]\];]
[$~syntaxIndex$
		var index = ![["$indexValue$"][__element$indexElement$(values, components, key)$?indexValue = ''$]];
		var inVal = __element$inElement$(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal\[index\] : null;]
[$~syntaxFor$
		var inVal = __element$inElement$(values, components, key);
		if (inVal === null || typeof inVal !== "object") {
			return null;
		}
[$~forId$
		var forVal = ["$forValue$"][__element$forElement$(values, components, key)$?forValue = ''$];
		var oldValues = values;
		var values = {};
		Object.keys(oldValues).forEach(function (key) {
			values\[key\] = oldValues\[key\];
		});]
		var result = Array.isArray(inVal) ? \[\] : {};
		Object.keys(inVal).forEach(function (key) {
[			values\[forVal\] = key;$~forId$]
[			result\[key\] = Number("$doValue$");$?doType = 'number'$]
[			result\[key\] = true;$?doType = 'boolean'$$?doValue not in ('false', '')$]
[			result\[key\] = false;$?doType = 'boolean'$$?doValue = 'false'$]
[			result\[key\] = "$doValue$";$?doType not in ('number', 'boolean')$]
[			result\[key\] = __element$doElement$(values, components, key);$?doValue = ''$]
[			result\[key\] = "";$?doValue = ''$$?doElement = ''$]
		});

		return result;]
[$~syntaxIf$
[		var ifVal = Number("$ifValue$");$?ifType = 'number'$]
[		var ifVal = true;$?ifType = 'boolean'$$?ifValue not in ('false', '')$]
[		var ifVal = false;$?ifType = 'boolean'$$?ifValue = 'false'$]
[		var ifVal = "$ifValue$";$?ifType not in ('number', 'boolean')$]
[		var ifVal = __element$ifElement$(values, components, key);$?ifValue = ''$]
[		var ifVal = "";$?ifValue = ''$$?ifElement = ''$]
		if (ifVal) {
[			return Number("$thenValue$");$?thenType = 'number'$]
[			return true;$?thenType = 'boolean'$$?thenValue not in ('false', '')$]
[			return false;$?thenType = 'boolean'$$?thenValue = 'false'$]
[			return "$thenValue$";$?thenType not in ('number', 'boolean')$]
[			return __element$thenElement$(values, components, key);$?thenValue = ''$]
[			return "";$?thenValue = ''$$?thenElement = ''$]
		}
		else {
[			return Number("$elseValue$");$?elseType = 'number'$]
[			return true;$?elseType = 'boolean'$$?elseValue not in ('false', '')$]
[			return false;$?elseType = 'boolean'$$?elseValue = 'false'$]
[			return "$elseValue$";$?elseType not in ('number', 'boolean')$]
[			return __element$elseElement$(values, components, key);$?elseValue = ''$]
[			return "";$?thenValue = ''$$?thenElement = ''$]
		}]
[$~syntaxMerge$
		var merge = __element$mergeElement$(values, components, key);
		if (!Array.isArray(merge)) {
			return merge;
		}
		var result = {};
		merge.forEach(function (source) {
			if (source === null || typeof source !== "object") {
				return;
			}
			var stack = \[{ target: result, source: source }\];
			while (stack.length > 0) {
				var current = stack.pop();
				Object.keys(current.source).forEach(function (key) {
					var from = current.source\[key\];
					if (from === null || typeof from !== "object") {
						current.target\[key\] = from;
					}
					else {
						var to = current.target\[key\];
						if (to === null || typeof to !== "object") {
							to = current.target\[key\] = {};
						}
						stack.push({ target: to, source: from });
					}
				});
			}
		});

		return result;]
	}^\n\n]
[
	var components = exports.components = exports.components || {};

	exports.addComponents = function (newComponents) {
		Object.keys(newComponents).forEach(function (key) {
			components\[key\] = newComponents\[key\];
		});
	}
![$~elementIndex$$~componentRoot$
	components\["$componentName$"\] = React.createClass({
		render: function () {
			return __element$elementIndex$(this.props, components);
		}
	});^\n]]
[$~elementIndex$$~componentRoot$$~componentRender$
	exports\["$root$"\] = function (components) {
		return __element$elementIndex$({}, components);
	}^\n]
}));
]
