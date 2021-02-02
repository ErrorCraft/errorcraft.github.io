import * as Utilities from './utilities.js';

function onLoad() {
	var navigationBar = await Utilities.getHtmlContents("/shared/html/navigation-bar");
	document.body.prepend(navigationBar);
}
