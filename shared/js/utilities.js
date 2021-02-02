export async function getHtml(url) {
	var s = await getContents(url);
	return new DOMParser().parseFromString(s, "text/xml").firstChild;
}

export async function getContents(url) {
	return await (await fetch(url)).text();
}
