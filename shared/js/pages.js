import * as Utilities from './utilities.js';

export async function loadLayout() {
	document.head.append(Utilities.getStylesheetElement("/shared/css/layout.css"));
	await loadNavigationBar();
}

async function loadNavigationBar() {
	//document.head.append(Utilities.getStylesheetElement("/shared/css/navigation-bar.css"));
	document.body.prepend(await Utilities.getHtmlContents("/shared/html/navigation-bar"));
}
