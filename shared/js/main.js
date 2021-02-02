import * as Utilities from './utilities.js';

function onLoad() {
	var navigationBar = await Utilities.getHtml("/shared/html/navigation-bar");
	document.body.prepend(navigationBar);
}
