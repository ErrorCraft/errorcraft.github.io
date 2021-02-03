export async function getHtmlContents(url) {
	var s = await getContents(url);
	return new DOMParser().parseFromString(s, "text/xml").firstChild;
}

async function getContents(url) {
	return await (await fetch(url)).text();
}

export function getStylesheetElement(url) {
	var e = document.createElement('link');
	e.href = url;
	e.rel = "stylesheet";
	return e;
}
