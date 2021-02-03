import * as Utilities from './utilities.js';

function loadMain() {
	var navigationBar = await Utilities.getHtmlContents("/shared/html/navigation-bar");
	document.body.prepend(navigationBar);
}

document.body.addEventListener('load', loadMain);
