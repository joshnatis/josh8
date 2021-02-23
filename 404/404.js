main();

function main()
{
	randomizeTexture();
	displayFuzzySearch();
}

function randomizeTexture()
{
	const NUM_TEXTURES = 38;
	let n = parseInt(1 + Math.random() * NUM_TEXTURES);
	document.body.style.backgroundImage = "url('404/images/texture" + n + ".png')";
}

function displayFuzzySearch()
{
	const PAGES = ["cybernetic98", "papers", "whom", "eng2ru", "professors",
		"library", "sitemap", "art", "games", "meme", "software", "blog", "home",
		"paint", "tunes", "terminal"];

	let url = window.location.href;
	let searchTerm = url.substring(url.lastIndexOf("/") + 1);
	if(searchTerm == "404.html") return;

	console.log(searchTerm);
	//todo
}