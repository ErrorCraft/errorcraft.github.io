import * as Utilities from './utilities.js';

function onLoad() {
	var navigationBar = await getHtml("/shared/html/navigation-bar");
	document.body.prepend(navigationBar);
}
