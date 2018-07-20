---
path: /blog/hacking-facebook-like-buttons-for-w3c-validation-in-html5/
layout: post
title: Hacking Facebook "Like" buttons for W3C Validation in HTML5
date: 2011-11-11T00:11:03Z
tags:
- facebook
- html
- html5
- hacks
- validation
---

![](https://uploads.psyked.co.uk/2011/11/html5-facebook.png "HTML5 & Facebook")

So, it turns out that the good old Facebook 'Like' buttons and Google's 'Plus one' buttons don't behave well on HTML5 format websites. That's because they make use of XHTML and namespaces. Sure, mixing XHTML and HTML5 together on a single page works just fine for the end-user, but when it comes to validating your pages on the W3C, it just won't work.

What's the 'solution'? Why, hacking it, of course. Take the code for those elements out of the source, and embed it with JavaScript instead.  And it doesn't have to be complex either - you can use inline JavaScript code.

Wrap your button embed HTML in a <script> tag, add a CDATA block, and encompass it in a `document.write()` function, and you're done.

So this code:
<script src="https://gist.github.com/1356698.js"></script>

Becomes this code:
<script src="https://gist.github.com/1356694.js"></script>

Of course, this being a hack, I can't really speak for this being good practice, but it works. Evaluating the pitfalls will come later, I'm sure!