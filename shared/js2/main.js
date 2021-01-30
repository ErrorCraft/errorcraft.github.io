import { PI, addNumbers } from './test.js';


window.onload = function() {
	var total = addNumbers(1, 3);
	
	console.log(total);
	var output = document.getElementById("output");
	output.innerHTML = total;
}
