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

	/* make strings the same length for a more fair comparison */
	target = target.padEnd(max, " ");
	actual = actual.padEnd(max, " ");

	let distance = 0;
	for(let i = 0; i < target.length; ++i)
		if(target[i] != actual[i])
			distance++;

	return distance;
}

function fuzzySearch(target, table)
{
	const THRESHOLD = 3; /* lenience of fuzzy search */

	let min = Number.MAX_VALUE;
	let hit = -1;

	for(let i = 0; i < table.length; ++i)
	{
		let max = Math.max(target.length, table[i].length);
		let diff = hammingDistance(target, table[i]);

		if(diff < min)
		{
			min = diff;
			hit = i;
		}
	}
	if(min <= THRESHOLD)
		return [true, table[hit]];
	else
		return [false, ""];
}

function displayFuzzySearch()
{
	const PAGES = ["cybernetic98", "papers", "who", "eng2ru", "professors",
		"library", "sitemap", "art", "games", "meme", "software", "blog", "home",
		"paint", "tunes", "terminal"];

	let url = window.location.href;
	let searchTerm = url.substring(url.lastIndexOf("/") + 1);
	if(searchTerm == "404.html") return;

	let [found, correction] = fuzzySearch(searchTerm, PAGES);
	if(found)
	{
		let msg = document.getElementById("msg");
		msg.innerHTML = "Did you mean to go to <a href=\"https://josh8.com/"
			+ correction + "\">/"
			+ correction + "</a>?";
	}
}
