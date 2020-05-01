let categories = document.getElementsByTagName("div");
for(let i = 0; i < categories.length; ++i)
{
	let h = document.createElement("h2");
	h.innerHTML = (categories[i].className).substring(9);
	categories[i].insertBefore(h, categories[i].firstChild);
}

function search()
{
	let val = document.getElementsByTagName("input")[0].value;
	var elements = document.getElementsByTagName("a");
	
	for (let i = 0, l = elements.length; i < l; i++)
	{
		if(elements[i].innerHTML.toLowerCase().includes(val))
		{
			elements[i].scrollIntoView();
			elements[i].parentNode.style.border = "2px solid red";
			return;
		}
	}
}