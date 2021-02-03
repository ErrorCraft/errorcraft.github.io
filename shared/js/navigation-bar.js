function loadNavigationBar() {
	var child = document.getElementById("navigationBar");
	var clonedChild = child.content.cloneNode(true);
	document.body.prepend(clonedChild);
}
