import theme from './theme.js';

window.onload = async function() {
	theme.loadTheme();
	
	let pageLayout = document.getElementById("page-layout");
	pageLayout.innerHTML = await getContents("/shared/html/layout");
}

async function getContents(url) {
	return await fetch(url).then(a => a.text());
}
