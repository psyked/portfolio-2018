---
path: /blog/auto-matic-link-icons/
layout: post
title: Auto-matic Link Icons
date: 2007-07-10T17:42:17Z
tags:
- css
- icons
---

CSS 2.1 has many new wonderful capabilities, and I'm going to show you one of my latest tricks I've picked up - automatic link icons.

First, a look at the end result :-

![](http://uploads.psyked.co.uk/2007/07/auto-matic-link-icons.png "Auto-matic Link icons")

Now, you may have seen similar things on a few websites already, wikipedia certainly makes use of the technique to highlight external links. The astute of you may notice that the 'external' link isn't actually external - think of it more as 'absolute'. How do we achieve these results automatically? Well, that's with the power of the new CSS selectors. [456BereaSt.](http://www.456bereastreet.com/archive/200509/css_21_selectors_part_1/) has a nice article on them, but the stuff we're concerned with is the attribute selectors.

Attribute selectors are done with \[square brackets\], and can include simple conditional statements, with some options for wildcards thrown in to boot. The easiest way for me to explain is to show you...

Here's a simple 'absolute' link selector - a\[href="http:"\] - this will target all the 'a' tags, with the attribute 'href' which is equal to "http:". Interesting, but its not very useful, because the attribute would need to be exactly "http:" for it to work. So, we add the ^ operator, which means 'starts with'. So ( a\[href^="http:"\] ) means any link with a href attribute that starts with 'http:' - thus, every external link.

Another operator we can use is $, which means 'ends with'. So a\[href$='.pdf'\] is any links that end with .pdf. Now we know how to automatically treat different links differently. Oh, and it works fine in all the most recent browsers (IE7, Firefox) And won't have any effect on browsers that don't understand the selectors, so its safe to use.

Now, styling the links is really a matter of personal preference, (and your design), but I the infamous [famfamfam](http://www.famfamfam.com/) silk icon set will help you out here. Once you've got your icons, a little clever implimentation of styles will enable you to indent your link slightly to add you icon in as a background image. Thus;


<script src="https://gist.github.com/1074526.js"> </script>

And you're away - limited only by your icon supply, and the volume of conditional statements you want to make! Here's mine - covering external links, mailto links, and common document formats...

<script src="https://gist.github.com/1074522.js"> </script>