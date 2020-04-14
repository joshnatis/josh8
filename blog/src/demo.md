# Demo World!

I've just redone my blog.

One starry night I decided that I wanted to be able to write posts in
 Markdown, so I went on a quest looking for a utility to help me do that.
It turned out that people really like having multiple dependencies for
their tools! My poor computer only has ~4GB of disk space left at all times
, so that dissuaded me quite efficiently. Then I got an idea...

![An idea](https://nicosteyn.files.wordpress.com/2011/01/einstein1-e1295937841431.jpg?w=900)|width: 20%|

* An Idea *

---

## Beware The Ide~~~s~~~a of March

Alright that's enough idea-ing I think you get the point. It dawned on me
 that I could just maybe write *myself* a tool to do this, and that way I
 wouldn't have to download anything. I know, ridiculous. The first thing
 that came to mind was how easy it would be to parse headings into a
 corresponding html tag. I mean, consider this:

```md
This is the syntax for headings in Markdown

# H1
## H2
### H3
```

```html
<!-- HTML corresponding to above MD -->

<h1> H1 </h1>
<h2> H2 </h2>
<h3> H3 </h3>
```

It's essentially a for loop and an if statement, not so bad. So, I did that
, and it **_actually worked_**. I spent that night further spaghetti-ing my
code, turning it from a smol angel hair, to a spaghetti, and eventually to
 a full blown lasagna (a single sheet or the entire dish, your choice).

Long story short, I ended up writing
 [**PHD**](https://github.com/joshnatis/phd)
, to which this post is an ode to, coz I'm using it right now.
 There are still a few bugs, and my focus wasn't being fully compatible with
 the Markdown spec (there are too many Markdowns and none of them are
 consistent), though I ended up getting most of the features down despite
 not setting out to initially. I also didn't think there'd be any way in
 hell my code would scale well cause I overused C++ STL string functions
 that are secretly computationally complex, but lo and behold it parsed a
 3000 line Markdown file to HTML without any noticeable wait time. Sick!

![gangsta euripides](https://user-images.githubusercontent.com/31445542/77646031-27847580-6f3a-11ea-8b5c-d5868bf4b6db.png)|width: 20%|

* Say hello to our logo, Gangsta Euripides *

That's enough talk, I'll show you the feature list and demonstrate each
 point.

---

## Features
* Headings
  * `#`, `##`, `###`, ... `######`
  * \< h1> through \< h6>

* Emphasis
  * `\*\*x\*\*` or `\_\_x\_\_` for **bold**
  * `\*x\*` or `\_x\_` for *italic*
  * `\~\~x\~\~` for ~~strikethrough~~
  * `\=\=x\=\=` for <mark>highlight</mark>
  * `\+\+x\+\+` for <u>underline</u>
  * `\^x\^` for ^superscript^
  * `\~x\~` for ~subscript~

* Code blocks
  * `\`\`\`[optional language] <newline> ... <newline>\`\`\``
  * automatic syntax highlighting if you link the `highlight.js` script

* Inline code
  * `\`This is inline code\``
  * This surrounds the inline code in `<code>` tags with the class `inline-code`. You can add styles for `.inline-code` to change how it looks.

* Images
  * `\!\[alt](url)`
  * `\!\[alt](url)|inline css, e.g. width: 50%; height: 30%|`

* Links
  * `\[link text](https://url.com)`

* \<hr> (horizontal rule)
  * `---`

* Line breaks
  * One or more blank lines between content in the markdown will yield a blank line in the resultant html
  * You can freely use `<br>` tags

* Blockquotes
  * `> this is all a blockquote`
  * Consecutive `>`'s with no blank lines between will all be funneled into a single blockquote

* Lists
  * `* `, `+ `, or `- ` for bulleted lists, `1.` (or any number) for numbered lists
  * To nest lists, include two spaces or a tab before your bullet point

* Escaped characters
  * `\>`, `\&`, `\<`, `\*`, `\_`, `\^`, `\~`, `\``, `\+`, `\=`, `\!`, `\[`

---

## Quick demo

Damn, I actually found 2 serious bugs while typing that out, one of which
 is now resolved. Argh, I say.

I'll end the PHD section with a snippit of a program, as code blocks are
 really the most exciting thing about this to me.

```cpp
#include <iostream>
#include <stack>

using namespace std;

int main()
{
        stack<string> pancakes;

        pancakes.push("Blueberry");
        pancakes.push("Strawberry");
        pancakes.push("Chocolate Chip");

        while(!pancakes.empty())
        {
                cout << pancakes.top() << endl;
                pancakes.pop():
        }

        return 0;
}
```

Very nice, if I say so myself. I'm in a chocolate chip kind of mood rn.

Next I'll briefly discuss how I restrucured the blog, and then you can go
 home.

---

## W3Schools Actually Does Something Cool For Once

You heard it here first folks.

Imagine this: you write a blog post in Markdown, convert it to HTML, and
 then simply "include" the new post in your main page. No copy pasting,
 no monkey business. That's what I was imagining. Unfortunately that wasn't
 as easy to do as it sounds, as including HTML isn't really a *thing*, but
 thankfully W3Schools pulled through with a nice little JavaScript
 [function](https://www.w3schools.com/howto/howto_html_include.asp)
 that does just that. The function works by sending a XHTTPRequest to your
 server asking for the requested file, and then replacing an HTML
 placeholder you create on the main page with the contents of the file.

It looks a bit like this:

```html
<!-- header and stuff -->

<body>
<!-- other stuff -->
<div w3-include-html="february.html"></div>
<!-- other stuff -->

<script src="scripts.js">includeHTML()</script>
</body>
```

This solves the problem of not having to copy paste posts into the
 index.html, but it also leaves 2.5 new problems in its wake, since I wanted
 the posts to also be viewable individually on their own pages.

**Problems**

1. Converting Markdown to HTML yields a file that only contains the post content, there are no containers and there's no page structure, just a page with text on it.<br><br>
2. HTML files have headers with metadata, will including this in a file with its own metadata cause any issues?<br><br>
3. If the post HTML files are in a different location than the index.html file they're being included in, relative paths to files can't be used.<br><br>

**Solutions**

**Problem 1**: We can write a function that inserts the containers/page
 structure into the HTML

*Note: I just copied the containers from my index.html page*
```js
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
```

Then simply call the script at the bottom of each post:
 `\<script>inject\_blog\_structure();\</script>`

**Problem 2**: Decapitate them

![borat, very nice](https://i.imgflip.com/i89uf.jpg)|width: 20%|

```js
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
```
* It's not much, in fact it sucks, but it's honest work *

**Problem 3**: Easy! Just use absolute paths and ~~everything will be fine~~. Wait, what'd you say? For some reason this will work on localhost but not
 on GitHub pages? But that doesn't make any sense! Ok fuck it just put all
 of the posts and the index.html in the root directory so the paths are the
 same when posts are included and when they're viewed individually.

---

## That is all

I hope you enjoyed, that's the end. My workflow to make a new post is as
 follows:

1. Write post in Markdown<br><br>
2. Call `./phd post.md post.html`<br><br>
3. Make any slight manual adjustments to HTML if necessary<br><br>
4. Insert `<div w3-include-html="hello-world.html"></div>` into index.html<br><br>
5. `git add .`, `git commit -m "Imperative sentence for no good reason"`, `git push` (and don't forget to do `git pull` first because you definitely updated your README.md and forgot, so you'll get a merge conflict).<br><br>

Here are some resources if you wanted to create a similar setup:

* [HighlightJS for syntax highlighting](https://highlightjs.org/)
* [Including HTML](https://www.w3schools.com/howto/howto_html_include.asp)
* [Collapsible sections](https://inclusive-components.design/collapsible-sections/)
* [PHD, Markdown to HTML](https://github.com/joshnatis/phd)
* [This blog's repository](https://github.com/josh8/blog)
