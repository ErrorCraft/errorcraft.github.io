import * as Utilities from './utilities.js';

export async function loadNavigationBar() {
	document.head.append(Utilities.getStylesheetElement("/shared/css/navigation-bar.css"));
	document.body.prepend(await Utilities.getHtmlContents("/shared/html/navigation-bar"));
}
