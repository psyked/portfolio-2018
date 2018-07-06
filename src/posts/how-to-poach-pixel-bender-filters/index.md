---
path: /how-to-poach-pixel-bender-filters/
layout: post
title: 'How to: poach Pixel Bender filters.'
date: 2009-02-12T08:28:04Z
tags:
- pixel-bender
---

Pixel Bender is awesome - but I just haven't got into it yet, so I have no idea how to make my own useful or impressive filters.  Nevermind, there's always the <a href="http://www.adobe.com/cfusion/exchange/index.cfm?event=productHome&amp;exc=26" target="_blank">Pixel Bender Exchange</a> from Adobe.  Not enough?  Well, one thing I like about AIR applications is that - moreoften than not - there's a lot of raw source files available, if you know where to look.

Pixel Bender files fall into this class.  <a href="http://www.adobe.com/devnet/air/ajax/articles/blackbooksafe_anatomy.html" target="_blank">BlackBookSafe</a> is where I first pinched Pixel Bender source files from, simply by looking at the folder created for the application in my 'Program Files' folder.  <a href="http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&amp;offeringid=10080&amp;marketplaceid=1" target="_blank">Fotobooth</a> is another example - a little more difficult - but the source files for all those clever Pixel Bender filters are just sitting, waiting for you to hack around with them...

<img class="alignnone size-full wp-image-717" title="Pixel Bender filter files" src="http://uploads.psyked.co.uk/2009/02/pixelbender.jpg" alt="Pixel Bender filter files" width="500" height="280" />

<!--more-->
<h3>Enough yammering, tell me something useful!</h3>
So, when an AIR application is installed on your machine it places all of the files it needs in your 'Applications' or 'Program Files' directory. Usually external assets like Pixel Bender are available in the source files in a standalone format, and that's all you really need to incorporate those filters into your own projects.

Well, almost.  The two types of source files you're likely to get are .pbj or .pbk.  If you get .pbk files you can use them directly in the Pixel Bender Toolkit.  If you get .pbj files - check out this <a href="http://blog.minim.pl/?p=32" target="_blank">blog post</a> and <a href="http://blog.minim.pl/PBJtoAS/" target="_blank">Flex application</a> which can help you get started converting those files into usable Actionscript classes.