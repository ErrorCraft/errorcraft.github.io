const navigationToggleButton = document.getElementsByClassName("nav-toggle")[0];
const navigationContents = document.getElementsByClassName("nav-contents")[0];

navigationToggleButton.addEventListener('click', function() {
	navigationContents.toggleAttribute('data-active');
});
