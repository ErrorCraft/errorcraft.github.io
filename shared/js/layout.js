window.onload = async function() {
	let pageLayout = document.getElementById("page-layout");
	let layout = await getContents("/shared/html/layout");
	pageLayout.innerHTML = layout;
	
	loadScript("/shared/js/theme.js");
	loadTheme();
}

async function getContents(url) {
	return await fetch(url).then(a => a.text());
}

function loadScript(url) {
	var script = document.createElement("script");
	script.src = url;
	document.head.appendChild(script);
}