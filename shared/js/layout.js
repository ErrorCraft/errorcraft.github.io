window.onload = async function() {
	let pageLayout = document.getElementById("page-layout");
	let layout = await getContents("/shared/html/layout");
	pageLayout.innerHTML = layout;
	
	loadTheme();
}

async function getContents(url) {
	return await fetch(url).then(a => a.text());
}