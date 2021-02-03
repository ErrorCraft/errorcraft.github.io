import * as Utilities from './utilities.js';

async function loadMain() {
	var navigationBar = await Utilities.getHtmlContents("/shared/html/navigation-bar");
	document.body.prepend(navigationBar);
}

window.addEventListener('load', loadMain);
