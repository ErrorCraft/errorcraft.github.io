console.log("a");

const navigationToggleButton = document.getElementsByClassName("nav-toggle")[0];
const navigationContents = document.getElementsByClassName("nav-contents")[0];

console.log("b");
console.log(navigationToggleButton);
console.log(navigationContents);

navigationToggleButton.addEventListener('click', function() {
	console.log("d");
	navigationContents.toggleAttribute('data-active');
	//navigationContents.classList.toggle('active');
});

console.log("c");
