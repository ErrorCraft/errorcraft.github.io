import * as Pages from './pages.js';

async function loadMain() {
	await Pages.loadNavigationBar();
}

window.addEventListener('load', loadMain);
