const TOGGLE_BUTTON = document.getElementsByClassName('nav-toggle')[0];
const NAVIGATION_BAR = document.getElementsByClassName('nav-contents')[0];

TOGGLE_BUTTON.addEventListener('click', function() {
	NAVIGATION_BAR.classList.toggle('active');
});