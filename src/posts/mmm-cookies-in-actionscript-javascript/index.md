---
path: /mmm-cookies-in-actionscript-javascript/
layout: post
title: Mmm... Cookies. In ActionScript / JavaScript.
date: 2008-12-19T08:43:03Z
tags:
- actionscript
- javascript
- actionscript-30
- actionscript-classes
- cookies
---

I like cookies - they're like the poor man's server-side session.

<img class="alignnone size-full wp-image-490" title="cookies" src="http://uploads.psyked.co.uk/2008/12/cookies.jpg" alt="" width="500" height="280" />

Yes, Cookies aren't 100% reliable, I know, but I think for a lot of things, they're a damned good solution.  Flash has it's own version of cookies, of course - called Shared Objects - but there's a few problems I can think of with them;
<ol>
	<li>They're not very well integrated with the browser.  A user might expect cookies to track information about themselves, but they also expect that - at any point in time - they can clear the cookies themselves and reset everything. <em>You</em> (the developer) might not want the user to be able to do this, but tough, the user should be able to do it.  People to prefer to work with things they understand, and understand the limits of.</li>
	<li>They're only available via Flash.</li>
	<li>They're a pain to work with.</li>
</ol>
So, cookies.  There's a couple of great resources out there for dealing with cookies in JavaScript and ActionScript 3.0. Quirksmode (<a href="http://www.quirksmode.org/js/cookies.html" target="_blank">http://www.quirksmode.org/js/cookies.html</a>) is unparallelled for its discussion and practical examples of working with Cookies in JavaScript.

And in:flex Blog (<a href="http://myflex.wordpress.com/2008/11/12/actionscript-cookie-util/" target="_blank">http://myflex.wordpress.com/2008/11/12/actionscript-cookie-util/</a>) has an excelent, fully featured, self-contained ActionScript 3.0 class library for reading, writing and deleting cookies, all without external functions.  Which is very clever.