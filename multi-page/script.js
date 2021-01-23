window.onload = async function() {
	let testPage = "/test.html";
	let html = await fetch(testPage).then(r => r.text());
	let e = document.getElementById("output");
	e.innerHTML = html;
}
