---
path: /blog/pseudo-ajax-loading-with-css/
layout: post
title: Pseudo-AJAX loading with CSS
date: 2007-10-28T14:36:55Z
tags:
- css
- ajax
---

Widgets, scripts and all that fashionable stuff is great - you sign up to the service and you can start pasting their code into your pages.  Voila! you have a new stat counter - or popularity counter, whatever.  They're great, but the practice of loading external javascript files outside the header of your documents isn't one that's too friendly on the page-display times.  In a sense, it's just like whacking a great big image onto your pages.

Luckily, there is an equally fashionable method for improving the effect that these scripts have on the page.  Using a simple animated graphic such as those from ajaxload.info and some CSS Wizardary, we can idenitify areas of the page that take a while to load, style them appropriately, and sit back in smug satisfaction.

For our little demonstration, we're going to use a page hit counter from blogskinny.com, an image from ajaxload.info, and some CSS;

<code>.ajaxload {
background:transparent url(images/ajaxload.gif) center center no-repeat;
}</code>

And to make the background image appear as we want it, we need to add the width and height properties of the image, with a bit of inline-css styles in a div surrounding the image.
<p style="width: 140px; height: 120px" class="ajaxload"><a href="http://www.blogskinny.com/" title="free counter chart from www.blogskinny.com"><img src="http://www.blogskinny.com/Chart/?u=1006_4615662faada" alt="get a free page counter with chart at www.blogskinny.com" border="0" /></a></p>
It's a bit difficult to see, so try a Ctrl+F5 refresh and concentrate on the image!

It's a simple idea, and one I'll be using in my upcoming redesign of the site...