---
path: /blog/mmm-cookies-in-actionscript-javascript/
layout: post
title: Mmm... Cookies. In ActionScript / JavaScript.
date: 2008-12-19T08:43:03Z
tags:
- actionscript
- javascript
- cookies
---

I like cookies - they're like the poor man's server-side session.

![](http://uploads.psyked.co.uk/2008/12/cookies.jpg "cookies")

Yes, Cookies aren't 100% reliable, I know, but I think for a lot of things, they're a damned good solution.  Flash has it's own version of cookies, of course - called Shared Objects - but there's a few problems I can think of with them;

1.  They're not very well integrated with the browser.  A user might expect cookies to track information about themselves, but they also expect that - at any point in time - they can clear the cookies themselves and reset everything. _You_ (the developer) might not want the user to be able to do this, but tough, the user should be able to do it.  People to prefer to work with things they understand, and understand the limits of.
2.  They're only available via Flash.
3.  They're a pain to work with.

So, cookies.  There's a couple of great resources out there for dealing with cookies in JavaScript and ActionScript 3.0. Quirksmode ([http://www.quirksmode.org/js/cookies.html](http://www.quirksmode.org/js/cookies.html)) is unparallelled for its discussion and practical examples of working with Cookies in JavaScript.

And in:flex Blog ([http://myflex.wordpress.com/2008/11/12/actionscript-cookie-util/](http://myflex.wordpress.com/2008/11/12/actionscript-cookie-util/)) has an excelent, fully featured, self-contained ActionScript 3.0 class library for reading, writing and deleting cookies, all without external functions.  Which is very clever.