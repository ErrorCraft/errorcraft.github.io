window.onload = async function() {
	let pageLayout = document.getElementById("page-layout");
	let layout = await getContents("/shared/html/layout");
	pageLayout.innerHTML = layout;
	
	import("/shared/js/theme.js").then(module => {
		module.loadTheme();
	});
}

async function getContents(url) {
	return await fetch(url).then(a => a.text());
}