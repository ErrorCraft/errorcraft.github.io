import * as Pages from './pages.js';

async function loadMain() {
	console.log("loading...");
	loadFavIcon();
	await Pages.loadLayout();
	console.log("all (should be) done!");
}

function loadFavIcon() {
	var e = document.createElement('link');
	e.rel = "shortcut icon";
	e.type = "image/x-icon";
	e.href = "favicon.png";
	document.head.append(e);
}

window.addEventListener('load', loadMain);
