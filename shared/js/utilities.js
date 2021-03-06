export async function getHtmlContents(url) {
	var s = await getContents(url);
	return new DOMParser().parseFromString(s, "text/html").firstChild.getElementsByTagName("body")[0].childNodes[0];
}

export function getStylesheetElement(url) {
	var e = document.createElement('link');
	e.href = url;
	e.rel = "stylesheet";
	return e;
}

export function getScriptElement(url) {
	var e = document.createElement('script');
	e.src = url;
	return e;
}

async function getContents(url) {
	return await (await fetch(url)).text();
}
