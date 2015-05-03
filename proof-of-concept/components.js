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

		return values["items"];
	}

	function __element002(values, components, key) {

		return values["total"];
	}

	function __element003(values, components, key) {

		return values["categories"];
	}

	function __element004(values, components, key) {

		return values["products"];
	}

	function __element005(values, components, key) {
		var props = {
			"products": __element004(values, components, "products")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["ProductList"], props, children);
	}

	function __element006(values, components, key) {
		var props = {
			"categories": __element003(values, components, "categories"),
			"items": __element001(values, components, "items"),
			"total": __element002(values, components, "total")
		};
		props["key"] = key;
		var children = [
			__element005(values, components, "1")
		];

		return React.createElement(components["Layout"], props, children);
	}

	function __element007(values, components, key) {

		return values["items"];
	}

	function __element008(values, components, key) {

		return values["total"];
	}

	function __element009(values, components, key) {

		return values["categories"];
	}

	function __element010(values, components, key) {

		return values["product"];
	}

	function __element011(values, components, key) {
		var props = {
			"product": __element010(values, components, "product")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["ProductDetail"], props, children);
	}

	function __element012(values, components, key) {
		var props = {
			"categories": __element009(values, components, "categories"),
			"items": __element007(values, components, "items"),
			"total": __element008(values, components, "total")
		};
		props["key"] = key;
		var children = [
			__element011(values, components, "1")
		];

		return React.createElement(components["Layout"], props, children);
	}

	function __element013(values, components, key) {

		return values["items"];
	}

	function __element014(values, components, key) {

		return values["total"];
	}

	function __element015(values, components, key) {

		return values["categories"];
	}

	function __element016(values, components, key) {

		return values["cartData"];
	}

	function __element017(values, components, key) {

		return values["items"];
	}

	function __element018(values, components, key) {

		return values["total"];
	}

	function __element019(values, components, key) {
		var props = {
			"data": __element016(values, components, "data"),
			"items": __element017(values, components, "items"),
			"total": __element018(values, components, "total")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["CartDetail"], props, children);
	}

	function __element020(values, components, key) {
		var props = {
			"categories": __element015(values, components, "categories"),
			"items": __element013(values, components, "items"),
			"total": __element014(values, components, "total")
		};
		props["key"] = key;
		var children = [
			__element019(values, components, "1")
		];

		return React.createElement(components["Layout"], props, children);
	}

	function __element021(values, components, key) {
		var props = {
			"background": "#eef",
			"fontFamily": "sans-serif",
			"height": "100vh",
			"margin": Number("-8")
		};

		return props;
	}

	function __element022(values, components, key) {
		var props = {
			"float": "right",
			"width": Number("200")
		};

		return props;
	}

	function __element023(values, components, key) {

		return values["items"];
	}

	function __element024(values, components, key) {

		return values["total"];
	}

	function __element025(values, components, key) {
		var props = {
			"items": __element023(values, components, "items"),
			"total": __element024(values, components, "total")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["CartInfo"], props, children);
	}

	function __element026(values, components, key) {
		var props = {
			"style": __element022(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element025(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element027(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["Header"], props, children);
	}

	function __element028(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element026(values, components, "1"),
			__element027(values, components, "2")
		];

		return React.createElement("div", props, children);
	}

	function __element029(values, components, key) {
		var props = {
			"background": "red",
			"borderBottom": "1px solid black",
			"clear": "both"
		};

		return props;
	}

	function __element030(values, components, key) {
		var props = {
			"style": __element029(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("div", props, children);
	}

	function __element031(values, components, key) {
		var props = {
			"borderRight": "1px solid black",
			"float": "left",
			"height": "calc(100% - 82px)",
			"marginRight": Number("8"),
			"width": Number("200")
		};

		return props;
	}

	function __element032(values, components, key) {

		return values["categories"];
	}

	function __element033(values, components, key) {
		var props = {
			"data": __element032(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["CategoryList"], props, children);
	}

	function __element034(values, components, key) {
		var props = {
			"style": __element031(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element033(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element035(values, components, key) {
		var props = {
			"height": "calc(100% - 98px)",
			"margin": "8px",
			"overflow": "auto"
		};

		return props;
	}

	function __element036(values, components, key) {

		return values["children"];
	}

	function __element037(values, components, key) {
		var props = {
			"style": __element035(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element036(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element038(values, components, key) {
		var props = {
			"clear": "both"
		};

		return props;
	}

	function __element039(values, components, key) {
		var props = {
			"style": __element038(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("div", props, children);
	}

	function __element040(values, components, key) {
		var props = {
			"style": __element021(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element028(values, components, "1"),
			__element030(values, components, "2"),
			__element034(values, components, "3"),
			__element037(values, components, "4"),
			__element039(values, components, "5")
		];

		return React.createElement("div", props, children);
	}

	function __element041(values, components, key) {
		var props = {
			"background": "#ffe",
			"padding": Number("8")
		};

		return props;
	}

	function __element042(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"Instinct e-shop"
		];

		return React.createElement("h1", props, children);
	}

	function __element043(values, components, key) {
		var props = {
			"style": __element041(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element042(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element044(values, components, key) {
		var props = {
		};

		return props;
	}

	function __element045(values, components, key) {
		var props = {
			"margin": Number("0")
		};

		return props;
	}

	function __element046(values, components, key) {
		var props = {
			"href": "/cart"
		};
		props["key"] = key;
		var children = [
			"Shopping cart"
		];

		return React.createElement("a", props, children);
	}

	function __element047(values, components, key) {
		var props = {
			"style": __element045(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element046(values, components, "1")
		];

		return React.createElement("h3", props, children);
	}

	function __element048(values, components, key) {
		var props = {
			"textAlign": "right"
		};

		return props;
	}

	function __element049(values, components, key) {

		return values["items"];
	}

	function __element050(values, components, key) {
		var props = {
			"style": __element048(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element049(values, components, "1")
		];

		return React.createElement("td", props, children);
	}

	function __element051(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"items"
		];

		return React.createElement("td", props, children);
	}

	function __element052(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element050(values, components, "1"),
			__element051(values, components, "2")
		];

		return React.createElement("tr", props, children);
	}

	function __element053(values, components, key) {
		var props = {
			"textAlign": "right"
		};

		return props;
	}

	function __element054(values, components, key) {

		return values["total"];
	}

	function __element055(values, components, key) {
		var props = {
			"style": __element053(values, components, "style")
		};
		props["key"] = key;
		var children = [
			"$",
			__element054(values, components, "2")
		];

		return React.createElement("td", props, children);
	}

	function __element056(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"total"
		];

		return React.createElement("td", props, children);
	}

	function __element057(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element055(values, components, "1"),
			__element056(values, components, "2")
		];

		return React.createElement("tr", props, children);
	}

	function __element058(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element052(values, components, "1"),
			__element057(values, components, "2")
		];

		return React.createElement("table", props, children);
	}

	function __element059(values, components, key) {
		var props = {
			"href": "/cart"
		};
		props["key"] = key;
		var children = [
			"Go to the cart"
		];

		return React.createElement("a", props, children);
	}

	function __element060(values, components, key) {
		var props = {
			"style": __element044(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element047(values, components, "1"),
			__element058(values, components, "2"),
			__element059(values, components, "3")
		];

		return React.createElement("div", props, children);
	}

	function __element061(values, components, key) {

		return values["data"];
	}

	function __element062(values, components, key) {

		return values["i"];
	}

	function __element063(values, components, key) {

		return values["data"];
	}

	function __element064(values, components, key) {
		var index = __element062(values, components, key);
		var inVal = __element063(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element065(values, components, key) {
		var props = {
			"item": __element064(values, components, "item")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["CategoryListItem"], props, children);
	}

	function __element066(values, components, key) {
		var inVal = __element061(values, components, key);
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
			result[key] = __element065(values, components, key);
		});

		return result;
	}

	function __element067(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element066(values, components, "1")
		];

		return React.createElement("ul", props, children);
	}

	function __element068(values, components, key) {

		return values["item"];
	}

	function __element069(values, components, key) {
		var index = "link";
		var inVal = __element068(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element070(values, components, key) {

		return values["item"];
	}

	function __element071(values, components, key) {
		var index = "name";
		var inVal = __element070(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element072(values, components, key) {
		var props = {
			"href": __element069(values, components, "href")
		};
		props["key"] = key;
		var children = [
			__element071(values, components, "1")
		];

		return React.createElement("a", props, children);
	}

	function __element073(values, components, key) {

		return values["item"];
	}

	function __element074(values, components, key) {
		var index = "children";
		var inVal = __element073(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element075(values, components, key) {

		return values["item"];
	}

	function __element076(values, components, key) {
		var index = "children";
		var inVal = __element075(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element077(values, components, key) {
		var props = {
			"data": __element076(values, components, "data")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["CategoryList"], props, children);
	}

	function __element078(values, components, key) {

		var ifVal = __element074(values, components, key);
		if (ifVal) {
			return __element077(values, components, key);
		}
		else {
		}
	}

	function __element079(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element072(values, components, "1"),
			__element078(values, components, "2")
		];

		return React.createElement("li", props, children);
	}

	function __element080(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"Category 1"
		];

		return React.createElement("h2", props, children);
	}

	function __element081(values, components, key) {
		var props = {
			"display": "flex",
			"flexWrap": "wrap",
			"justifyContent": "space-around"
		};

		return props;
	}

	function __element082(values, components, key) {

		return values["products"];
	}

	function __element083(values, components, key) {

		return values["i"];
	}

	function __element084(values, components, key) {

		return values["products"];
	}

	function __element085(values, components, key) {
		var index = __element083(values, components, key);
		var inVal = __element084(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element086(values, components, key) {
		var props = {
			"product": __element085(values, components, "product")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["ProductBox"], props, children);
	}

	function __element087(values, components, key) {
		var inVal = __element082(values, components, key);
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
			result[key] = __element086(values, components, key);
		});

		return result;
	}

	function __element088(values, components, key) {
		var props = {
			"style": __element081(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element087(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element089(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element080(values, components, "1"),
			__element088(values, components, "2")
		];

		return React.createElement("div", props, children);
	}

	function __element090(values, components, key) {
		var props = {
			"border": "1px solid black",
			"float": "left",
			"height": Number("250"),
			"margin": Number("5"),
			"padding": Number("5"),
			"textAlign": "center",
			"width": Number("200")
		};

		return props;
	}

	function __element091(values, components, key) {
		var props = {
			"margin": "0 0 10px 0"
		};

		return props;
	}

	function __element092(values, components, key) {

		return values["product"];
	}

	function __element093(values, components, key) {
		var index = "link";
		var inVal = __element092(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element094(values, components, key) {

		return values["product"];
	}

	function __element095(values, components, key) {
		var index = "name";
		var inVal = __element094(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element096(values, components, key) {
		var props = {
			"href": __element093(values, components, "href")
		};
		props["key"] = key;
		var children = [
			__element095(values, components, "1")
		];

		return React.createElement("a", props, children);
	}

	function __element097(values, components, key) {
		var props = {
			"style": __element091(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element096(values, components, "1")
		];

		return React.createElement("h3", props, children);
	}

	function __element098(values, components, key) {

		return values["product"];
	}

	function __element099(values, components, key) {
		var index = "image";
		var inVal = __element098(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element100(values, components, key) {

		return values["product"];
	}

	function __element101(values, components, key) {
		var index = "name";
		var inVal = __element100(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element102(values, components, key) {

		return values["product"];
	}

	function __element103(values, components, key) {
		var index = "name";
		var inVal = __element102(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element104(values, components, key) {
		var props = {
			"alt": __element101(values, components, "alt"),
			"src": __element099(values, components, "src"),
			"title": __element103(values, components, "title")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("img", props, children);
	}

	function __element105(values, components, key) {

		return values["product"];
	}

	function __element106(values, components, key) {
		var index = "link";
		var inVal = __element105(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element107(values, components, key) {
		var props = {
			"href": __element106(values, components, "href")
		};
		props["key"] = key;
		var children = [
			"Product detail"
		];

		return React.createElement("a", props, children);
	}

	function __element108(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element107(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element109(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["AddToCartButton"], props, children);
	}

	function __element110(values, components, key) {
		var props = {
			"style": __element090(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element097(values, components, "1"),
			__element104(values, components, "2"),
			__element108(values, components, "3"),
			__element109(values, components, "4")
		];

		return React.createElement("div", props, children);
	}

	function __element111(values, components, key) {
		var props = {
		};

		return props;
	}

	function __element112(values, components, key) {
		var props = {
			"textAlign": "right"
		};

		return props;
	}

	function __element113(values, components, key) {
		var props = {
			"defaultValue": "1",
			"size": Number("3"),
			"style": __element112(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("input", props, children);
	}

	function __element114(values, components, key) {
		var props = {
			"alt": "Add to cart",
			"src": "http://wormik.net/cart-76-24.png",
			"title": "Add to cart",
			"type": "image"
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("input", props, children);
	}

	function __element115(values, components, key) {
		var props = {
			"style": __element111(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element113(values, components, "1"),
			__element114(values, components, "2")
		];

		return React.createElement("div", props, children);
	}

	function __element116(values, components, key) {
		var props = {
			"float": "right"
		};

		return props;
	}

	function __element117(values, components, key) {

		return values["product"];
	}

	function __element118(values, components, key) {
		var index = "image";
		var inVal = __element117(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element119(values, components, key) {
		var props = {
			"src": __element118(values, components, "src")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("img", props, children);
	}

	function __element120(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["AddToCartButton"], props, children);
	}

	function __element121(values, components, key) {
		var props = {
			"style": __element116(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element119(values, components, "1"),
			__element120(values, components, "2")
		];

		return React.createElement("div", props, children);
	}

	function __element122(values, components, key) {

		return values["product"];
	}

	function __element123(values, components, key) {
		var index = "name";
		var inVal = __element122(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element124(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element123(values, components, "1")
		];

		return React.createElement("h2", props, children);
	}

	function __element125(values, components, key) {

		return values["product"];
	}

	function __element126(values, components, key) {
		var index = "description";
		var inVal = __element125(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element127(values, components, key) {

		return values["i"];
	}

	function __element128(values, components, key) {

		return values["product"];
	}

	function __element129(values, components, key) {
		var index = "description";
		var inVal = __element128(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element130(values, components, key) {
		var index = __element127(values, components, key);
		var inVal = __element129(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element131(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element130(values, components, "1")
		];

		return React.createElement("p", props, children);
	}

	function __element132(values, components, key) {
		var children = [
			__element131(values, components, "1")
		];

		return children;
	}

	function __element133(values, components, key) {
		var inVal = __element126(values, components, key);
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
			result[key] = __element132(values, components, key);
		});

		return result;
	}

	function __element134(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element121(values, components, "1"),
			__element124(values, components, "2"),
			__element133(values, components, "3")
		];

		return React.createElement("div", props, children);
	}

	function __element135(values, components, key) {
		var props = {
		};

		return props;
	}

	function __element136(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"Cart Detail"
		];

		return React.createElement("h2", props, children);
	}

	function __element137(values, components, key) {
		var props = {
			"width": "100%"
		};

		return props;
	}

	function __element138(values, components, key) {

		return values["data"];
	}

	function __element139(values, components, key) {

		return values["i"];
	}

	function __element140(values, components, key) {

		return values["data"];
	}

	function __element141(values, components, key) {
		var index = __element139(values, components, key);
		var inVal = __element140(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element142(values, components, key) {
		var props = {
			"item": __element141(values, components, "item")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement(components["CartRow"], props, children);
	}

	function __element143(values, components, key) {
		var inVal = __element138(values, components, key);
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
			result[key] = __element142(values, components, key);
		});

		return result;
	}

	function __element144(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("td", props, children);
	}

	function __element145(values, components, key) {

		return values["items"];
	}

	function __element146(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element145(values, components, "1"),
			" items"
		];

		return React.createElement("th", props, children);
	}

	function __element147(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("td", props, children);
	}

	function __element148(values, components, key) {

		return values["total"];
	}

	function __element149(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"$",
			__element148(values, components, "2"),
			" total"
		];

		return React.createElement("th", props, children);
	}

	function __element150(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element144(values, components, "1"),
			__element146(values, components, "2"),
			__element147(values, components, "3"),
			__element149(values, components, "4")
		];

		return React.createElement("tr", props, children);
	}

	function __element151(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element143(values, components, "1"),
			__element150(values, components, "2")
		];

		return React.createElement("tbody", props, children);
	}

	function __element152(values, components, key) {
		var props = {
			"style": __element137(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element151(values, components, "1")
		];

		return React.createElement("table", props, children);
	}

	function __element153(values, components, key) {
		var props = {
			"fontWeight": "bold",
			"padding": Number("20"),
			"textAlign": "center"
		};

		return props;
	}

	function __element154(values, components, key) {
		var props = {
			"href": "/order"
		};
		props["key"] = key;
		var children = [
			"Proceed to order"
		];

		return React.createElement("a", props, children);
	}

	function __element155(values, components, key) {
		var props = {
			"style": __element153(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element154(values, components, "1")
		];

		return React.createElement("div", props, children);
	}

	function __element156(values, components, key) {
		var props = {
			"style": __element135(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element136(values, components, "1"),
			__element152(values, components, "2"),
			__element155(values, components, "3")
		];

		return React.createElement("div", props, children);
	}

	function __element157(values, components, key) {
		var props = {
		};

		return props;
	}

	function __element158(values, components, key) {

		return values["item"];
	}

	function __element159(values, components, key) {
		var index = "link";
		var inVal = __element158(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element160(values, components, key) {

		return values["item"];
	}

	function __element161(values, components, key) {
		var index = "name";
		var inVal = __element160(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element162(values, components, key) {
		var props = {
			"href": __element159(values, components, "href")
		};
		props["key"] = key;
		var children = [
			__element161(values, components, "1")
		];

		return React.createElement("a", props, children);
	}

	function __element163(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element162(values, components, "1")
		];

		return React.createElement("td", props, children);
	}

	function __element164(values, components, key) {

		return values["item"];
	}

	function __element165(values, components, key) {
		var index = "qty";
		var inVal = __element164(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element166(values, components, key) {
		var props = {
			"textAlign": "right"
		};

		return props;
	}

	function __element167(values, components, key) {
		var props = {
			"defaultValue": __element165(values, components, "defaultValue"),
			"size": Number("3"),
			"style": __element166(values, components, "style")
		};
		props["key"] = key;
		var children = [
		];

		return React.createElement("input", props, children);
	}

	function __element168(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element167(values, components, "1")
		];

		return React.createElement("td", props, children);
	}

	function __element169(values, components, key) {

		return values["item"];
	}

	function __element170(values, components, key) {
		var index = "cost";
		var inVal = __element169(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element171(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			" × $",
			__element170(values, components, "2")
		];

		return React.createElement("td", props, children);
	}

	function __element172(values, components, key) {

		return values["item"];
	}

	function __element173(values, components, key) {
		var index = "costTotal";
		var inVal = __element172(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element174(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			"= $",
			__element173(values, components, "2")
		];

		return React.createElement("td", props, children);
	}

	function __element175(values, components, key) {

		return values["item"];
	}

	function __element176(values, components, key) {
		var index = "removeLink";
		var inVal = __element175(values, components, key);

		return (inVal !== null && typeof inVal === "object") ? inVal[index] : null;
	}

	function __element177(values, components, key) {
		var props = {
			"href": __element176(values, components, "href")
		};
		props["key"] = key;
		var children = [
			"Remove"
		];

		return React.createElement("a", props, children);
	}

	function __element178(values, components, key) {
		var props = {
		};
		props["key"] = key;
		var children = [
			__element177(values, components, "1")
		];

		return React.createElement("td", props, children);
	}

	function __element179(values, components, key) {
		var props = {
			"style": __element157(values, components, "style")
		};
		props["key"] = key;
		var children = [
			__element163(values, components, "1"),
			__element168(values, components, "2"),
			__element171(values, components, "3"),
			__element174(values, components, "4"),
			__element178(values, components, "5")
		];

		return React.createElement("tr", props, children);
	}

	var components = exports.components = exports.components || {};

	exports.addComponents = function (newComponents) {
		Object.keys(newComponents).forEach(function (key) {
			components[key] = newComponents[key];
		});
	}

	components["Homepage"] = React.createClass({
		render: function () {
			return __element006(this.props, components);
		}
	});

	components["ProductPage"] = React.createClass({
		render: function () {
			return __element012(this.props, components);
		}
	});

	components["CartPage"] = React.createClass({
		render: function () {
			return __element020(this.props, components);
		}
	});

	components["Layout"] = React.createClass({
		render: function () {
			return __element040(this.props, components);
		}
	});

	components["Header"] = React.createClass({
		render: function () {
			return __element043(this.props, components);
		}
	});

	components["CartInfo"] = React.createClass({
		render: function () {
			return __element060(this.props, components);
		}
	});

	components["CategoryList"] = React.createClass({
		render: function () {
			return __element067(this.props, components);
		}
	});

	components["CategoryListItem"] = React.createClass({
		render: function () {
			return __element079(this.props, components);
		}
	});

	components["ProductList"] = React.createClass({
		render: function () {
			return __element089(this.props, components);
		}
	});

	components["ProductBox"] = React.createClass({
		render: function () {
			return __element110(this.props, components);
		}
	});

	components["AddToCartButton"] = React.createClass({
		render: function () {
			return __element115(this.props, components);
		}
	});

	components["ProductDetail"] = React.createClass({
		render: function () {
			return __element134(this.props, components);
		}
	});

	components["CartDetail"] = React.createClass({
		render: function () {
			return __element156(this.props, components);
		}
	});

	components["CartRow"] = React.createClass({
		render: function () {
			return __element179(this.props, components);
		}
	});
}));


