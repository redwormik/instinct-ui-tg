[@EXTEND
Derive renderRoot isa root where componentRoot = '1' and componentRender = '1';
@
<!DOCTYPE html>
<html>
	<head>
		<script src="http://fb.me/react-0.13.1.js"></script>
		<meta charset="utf-8" />
	</head>
	<body>
[$~elementIndex$		<div id="$renderRoot$"></div>^\n]
		<script src="components.js"></script>
		<script src="data.js"></script>
[$~elementIndex$
		<script>
			React.render(InstinctUI\["$renderRoot$"\](InstinctUI.components), document.getElementById("$renderRoot$"));
		</script>^\n]
	</body>
</html>
]
