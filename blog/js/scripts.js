function collapse_all()
{
	const headings = document.querySelectorAll('h2');

	Array.prototype.forEach.call(headings, h => {
		let btn = h.querySelector('button');
		let target = h.nextElementSibling;
    
		if(btn != null)
		{	      
			btn.setAttribute('aria-expanded', false);
			target.hidden = true;

			// h.style.backgroundColor = "rgba(247, 200, 247, 0.3)"
		}
	})
}

function expand_all()
{
	const headings = document.querySelectorAll('h2');

	Array.prototype.forEach.call(headings, h => {
		let btn = h.querySelector('button');
		let target = h.nextElementSibling;
    
		if(btn != null)
		{	      
			btn.setAttribute('aria-expanded', true);
			target.hidden = false;
		}
	})
}

/*
VIA https://inclusive-components.design/collapsible-sections/
THANK YOU, THIS IS AWESOME!
*/

(function() {
	var first = false; //set to true to display first post by default
	const headings = document.querySelectorAll('h2');

	let i = 0;
	Array.prototype.forEach.call(headings, h => {
		let btn = h.querySelector('button');
		let target = h.nextElementSibling;
    
		if(btn != null)
		{
			btn.onclick = () => {
			let expanded = btn.getAttribute('aria-expanded') === 'true';
	      
			btn.setAttribute('aria-expanded', !expanded);
			target.hidden = expanded;

	
				if(!expanded) h.style.backgroundColor = "inherit";
				else h.style.backgroundColor = "rgba(247, 200, 247, 0.3)";
			}

		if(first) { btn.click(); first = false; } //display first post by default
	}});
})()

/*
Thank you to w3schools!
https://www.w3schools.com/howto/howto_html_include.asp
*/

function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = decapitate(this.responseText);
						//fixes syntax highlighting for included html files
						elmnt.querySelectorAll('pre code').forEach((block) => {
	        			hljs.highlightBlock(block);
	    				});
					}
					if (this.status == 404) {elmnt.innerHTML = "<p><i>Oops, I messed up somehow. This is supposed to be a post!</i></p>";}
					/* Remove the attribute, and call this function once more: */
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/* Exit the function: */
			return;
		}
	}
}

//removes all html not within body tag
function decapitate(html_content)
{
	let content = html_content.split("<body>");

	if(content.length >= 2) //in the case that <body> exists
	{
		content = content[1].trim();

		//remove title from post
		if(content.substring(0, 2) === "<h")
			content = content.substring(content.indexOf("\n") + 1);

		content = content.split("</body>");
	}

	return content[0];
}

//called on individual post pages, inserts their contents into a divs with the blog/content classes
function inject_blog_structure()
{
	let body = document.getElementsByTagName("BODY")[0];

	let above = "<div id=\"blog\">\r\n\r\n\t\t<div id=\"header\">\r\n\t\t\t<h1 id=\"tit\">Corduroy\'s Meditations\
	<\/h1>\r\n\t\t\t<p id=\"desc\">A cozy spot to sit and think :-)<\/p>\r\n\t\t<\/div>\r\n\r\n<div id=\"content\">"

	let below = "<!-- FOOTER -->\r\n<p id=\"foot\"><a onclick=\"window.scrollTo(0, 0);\">\u2191 Back up top! \u2191<\/a><\/p>\r\n\r\n<div id=\"footer\">\r\n\t\
	With love, from <a href=\"https:\/\/github.com\/joshnatis\">Josh<\/a> &mdash; <a href=\"mailto:josh&#64;josh8&#46;com\">josh&#64;josh8&#46;com\
	<\/a>\r\n\t<br><br>\r\n\tPosts generated with <a href=\"https:\/\/github.com\/joshnatis\/phd\">phd<\/a>, a markdown to html parser I wrote :)\
	<\/div>\r\n<\/div>\r\n<!-- FOOTER -->\r\n\r\n\r\n\<\/div> <!-- END CONTENT -->\r\n"

	body.innerHTML = above + body.innerHTML + below;
}