import * as Utilities from './utilities.js';

const navigationToggleButton = document.getElementsByClassName("nav-toggle")[0];
const navigationContents = document.getElementsByClassName("nav-contents")[0];

navigationToggleButton.addEventListener('click', function() {
	navigationContents.classList.toggle('active');
});

document.head.append(Utilities.getStylesheetElement("/shared/css/navigation-bar-or.css"));