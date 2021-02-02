import * as Utilities from './utilities';

function onLoad() {
	var navigationBar = await getHtml("/_shared/html/navigation-bar");
	document.body.prepend(navigationBar);
}
