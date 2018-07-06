---
path: /xslt-and-rss-feeds/
layout: post
title: XSLT and RSS feeds.
date: 2008-01-30T23:09:58Z
tags:
- html
- rss-tag
- xsl
- xslt
---

XSLT is XSL Transformations, and XSL is Xtensible Stylesheet Language.  (So says <a href="http://www.w3schools.com/xsl/default.asp" title="Open link in a new window" target="_blank">w3schools</a>)

XSLT is pretty impressive. With a single stylesheet you can completely reformat XML data into a HTML structure that suits your needs.  Even better than that, you can also use quite complex commands to single out specific peices of data.  This gets me thinking - RSS feeds are XML based - and RSS feeds are often formatted in the ugly default method of the browser.  So why don't people use XSLT to completely refactor their RSS feed data, not least to maintain a bit of branding consistancy.<!--more-->

Fast-forward a couple of hours development, and we have a beautiful XSL file that reformats our RSS XML into a layout not dissimilar to the main HTML pages.  Now, fast forward again - and we're trying to make our RSS feeds look pretty in the browser.  For some reason, the browsers' aren't utilizing our XSL stylesheet - both Firefox and IE are stubbornly refusing to use the XSL formatting when they encounter an RSS feed.  XML is fine, but they're stubborn when it comes to the RSS varient.

So, I guess the moral of the story might well be <em><strong>"if no-ones' using it, it's probably not possible? "</strong></em>

Irregardless, it was an interesting mini-project.  If you're interested, you might want to have a look at these links;
<ul>
	<li><a href="http://www.w3schools.com/xsl/default.asp" title="Open link in a new window" target="_blank">http://www.w3schools.com/xsl/default.asp</a></li>
	<li><a href="http://www.w3.org/TR/xslt" title="Open link in a new window" target="_blank">http://www.w3.org/TR/xslt</a></li>
</ul>