const ANCHOR = document.getElementById("anchor");
const BR = document.createElement("br");
const URL = "https://library.josh8.com/";

function populate()
{
	for(category in LIBRARY)
	{
		let category_div = document.createElement("div");
		category_div.className = "category";

		let category_title = document.createElement("span");
		category_title.className = "category-title";
		category_title.textContent = category.substring(1);

		let dropcap_img = document.createElement("img");
		dropcap_img.className = "category-img";
		dropcap_img.src = "images/" + category[0] + ".png";

		category_title.prepend(dropcap_img);
		category_div.appendChild(category_title);
		ANCHOR.appendChild(category_div);

		populateWithBooks(category, category_div);
	}
}

function populateWithBooks(category, category_div)
{
	let books_div = document.createElement("div");
	books_div.className = "books";

	let books = LIBRARY[category];
	for(let i = 0; i < books.length; ++i)
	{
		let a = document.createElement("a");
		a.href = URL + category + "/" + books[i];
		a.textContent = books[i].replaceAll("%20", " ").replaceAll("_", " ");
		a.className = "book-link";
		let img = document.createElement("img");
		img.src = "images/223.ico";
		img.className = "book-icon";
		books_div.appendChild(img);
		books_div.appendChild(a);
		books_div.appendChild(document.createElement("br"));
	}
	ANCHOR.appendChild(books_div);
	ANCHOR.appendChild(document.createElement("br"));

	category_div.onclick = function() {
		if(books_div.dataset.expanded == "true")
		{
			books_div.style.display = "none";
			books_div.dataset.expanded = "false";
		}
		else
		{
			books_div.style.display = "block";
			books_div.dataset.expanded = "true";
		}
	}
}

function enableButtons()
{
	let expand_btns = document.getElementsByClassName("expand");
	let collapse_btns = document.getElementsByClassName("collapse");

	[...expand_btns].forEach(btn => {
		btn.onclick = function() {
			let books_div = document.getElementsByClassName("books");
			[...books_div].forEach(div => {
				div.style.display = "block";
			});
		}
	});

	[...collapse_btns].forEach(btn => {
		btn.onclick = function() {
			let books_div = document.getElementsByClassName("books");
			[...books_div].forEach(div => {
				div.style.display = "none";
			});
		}
	});

	let search_btn = document.getElementById("search-btn");
	let search_bar = document.getElementById("search-bar");
	
	search_btn.onclick = function()
	{
		search(search_bar.value);
	}

	search_bar.onkeypress = function(e)
	{
    	if(!e) e = window.event;
    	let keyCode = e.code || e.key;
		if(keyCode == 'Enter')
		{
			search(search_bar.value);
		}
		return true;
	}
}

function search(target)
{
	/* unhighlight previous search result */
	let prevresult = document.getElementById("search-result");
	if(prevresult) prevresult.id = "";

	let targetFound = false;
	for(category in LIBRARY)
	{
		if(LIBRARY[category].includes(target))
			targetFound = true;
	}

	if(targetFound)
	{
		/* expand all and scroll to the link */
		let book_links = document.getElementsByClassName("book-link");
		[...book_links].forEach(e => {
			if(e.textContent == target)
			{
				let books_div = document.getElementsByClassName("books");
				[...books_div].forEach(div => {
					div.style.display = "block";
				});

				e.scrollIntoView(true);
				e.id = "search-result";
				return;
			}
		});
	}

	/* todo: 'contains' rather than exact match */
	/* todo: fuzzy search, maybe */
}


populate();
enableButtons();