window.onload = function() {
	var biscuits = document.cookie;
	document.getElementById("biscuit-output").innerHTML = biscuits;
	console.log(biscuits);
}

function setBiscuit(e) {
	var d = new Date();
	d.setTime(d.getTime() + (1000*24*60*60*1000));
	var expires = "expires="+ d.toUTCString() + ";";
	var biscuit = "theBiscuit=" + e.innerHTML.toString() + ";";
	
	var total = biscuit + expires + "path=/;";
	document.cookie = total;
	console.log(total);
}

function noBiscuit() {
	var total = "theBiscuit=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
	document.cookie = total;
}