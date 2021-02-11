import * as Pages from './pages.js';

async function loadMain() {
	console.log("loading...");
	await Pages.loadLayout();
	console.log("all (should be) done!");
}

window.addEventListener('load', loadMain);
