---
path: /blog/identifying-link-targets-with-css/
layout: post
title: Identifying link targets with CSS
date: 2007-12-05T08:06:19Z
tags:
- css
- icons
---

So, you have links that open in new windows, and links that open in parent windows. Inconsistant behaviour is the primary usability nightmare, and your standard web browser doesn't give you any feedback on _just what_ is going to happen once you click that link. Popups galore? or damn-I-was-reading-that syndrome? If only there was some visual clue we could give about those pesky link behaviours.

Well, this isn't something I've seen anyone do yet, but technically it should be possible. What we should be able to do is transport the same techniques we use for detecting file types - ie. the CSS 2.1 attribute selectors - and link them to the target attribute. Thankfully, this should be a pretty short bit of code, as there's only really four target options that anyone uses anyway. These would be '\_blank', '\_self', '\_top' or '\_parent'. So, working on our existing knowledge of detecting link file-types, we simply add the code;

    a\[target='_blank'\]

... and we should now be able to automatically attach icons to those links that target a new browser window. (\_parent, \_self, and _top nearly always open links in exactly the same window) Links to other websites already have a standard icon - pretty much set by wikipedia - but it's not often that target-based links are seen, so there's not much of a standard. Or is there?

Sitepoint has a short article on the problem of link targets - '[Beware of Opening Links in a New Window](http://www.sitepoint.com/article/beware-opening-links-new-window "Open link in a new window")' and also has a pretty simple icon to use for new windows. Perfect! Just like internal links don't have an icon, and external ones do, so only links that open a new browser window should need this icon. Save the icon to your webserver, add your new CSS, and you're away.