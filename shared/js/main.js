import * as Utilities from './utilities.js';

async function loadMain() {
	console.log("a");
	var navigationBar = await Utilities.getHtmlContents("/shared/html/navigation-bar");
	document.body.prepend(navigationBar);
}

console.log("1");
window.addEventListener('load', loadMain);
console.log("2");
