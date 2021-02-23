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

function hammingDistance(target, actual)
{
	let max = (target.length > actual.length) ? target.length : actual.length;
	let min = (target.length > actual.length) ? actual.length : target.length;
	let distance = max - min;

	for(let i = 0; i < target.length; ++i)
		if(target[i] != actual[i])
			distance++;

	return distance;
}

function fuzzySearch(target, table)
{
	const THRESHOLD = 5; /* lenience of fuzzy search */
	for(let item in table)
	{
		if(hammingDistance(target, item) <= THRESHOLD)
			return [true, key];
	}
	return [false, ""];
}

function displayFuzzySearch()
{
	const PAGES = ["cybernetic98", "papers", "whom", "eng2ru", "professors",
		"library", "sitemap", "art", "games", "meme", "software", "blog", "home",
		"paint", "tunes", "terminal"];

	let url = window.location.href;
	let searchTerm = url.substring(url.lastIndexOf("/") + 1);
	if(searchTerm == "404.html") return;

	let [found, correction] = fuzzySearch(searchTerm, PAGES);
	if(found)
	{
		let msg = document.getElementById("msg");
		msg.innerHTML = "Did you mean to go to <a href=\"josh8.com/"
			+ correction + "\">/"
			+ correction + "</a>?";

		console.log("correction: " + correction);
	}
	else console.log("correction for " + searchTerm + " not found");
}