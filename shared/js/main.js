import * as Pages from './pages.js';

async function loadMain() {
	await Pages.loadLayout();
}

window.addEventListener('load', loadMain);
