function injectBlogStructure()
{
	let above = "<div id=\"blog\">\r\n\r\n\t\t<div id=\"header\">\r\n\t\t\t<h1 id=\"tit\">Corduroy\'s Meditations\
	<\/h1>\r\n\t\t\t<p id=\"desc\">A cozy spot to sit and think :-)<\/p>\r\n\t\t<\/div>\r\n\r\n<div id=\"content\">"

	let below = "<!-- FOOTER -->\r\n<p id=\"foot\"><a onclick=\"window.scrollTo(0, 0);\">\u2191 Back up top! \u2191<\/a><\/p>\r\n\r\n<div id=\"footer\">\r\n\t\
	With love, from <a href=\"https:\/\/github.com\/joshnatis\">Josh<\/a> &mdash; <a href=\"mailto:josh&#64;josh8&#46;com\">josh&#64;josh8&#46;com\
	<\/a>\r\n\t<br><br>\r\n\tPosts generated with <a href=\"https:\/\/github.com\/joshnatis\/phd\">phd<\/a>, a markdown to html compiler I wrote :)\
	<\/div>\r\n<\/div>\r\n<!-- FOOTER -->\r\n\r\n\r\n\<\/div> <!-- END CONTENT -->\r\n"

	document.body.innerHTML = above + document.body.innerHTML + below;
}

function enableCollapsibles()
{
	let collapsibles = document.getElementsByClassName("collapsible");
	[...collapsibles].forEach(section => {
		let title = section.querySelector(".collapsible-title");
		if(!title) return;

		title.onclick = function() {
			if(section.style.overflowY != "visible") {
				section.style.overflowY = "visible";
				section.style.height = "auto";
			} else {
				section.style.overflowY = "hidden";
				section.style.height = "3em";
			}
		}

	});
}