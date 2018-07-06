---
path: /darn-them-xml-namespaces/
layout: post
title: Darn them XML namespaces!
date: 2008-12-01T08:30:17Z
tags:
- actionscript
- flex
- e4x
- namespaces
- xml
---

Ugh, this E4X stuff is all a bit new to me - I'm still not used to namespaces and stuff.  For some reason I've had trouble extracting data from XML when I'm using a namespace.  I have no idea why, but it seemed that with the namespace in use, my attempts at extracting data from the XML returned blank data.

Never fear!  It seems that either removing the namespace or replacing it with a wildcard would let me access the data.  Kudos to the blog posts of Riley (Got RIA?) : <a href="http://brianmriley.wordpress.com/2008/03/14/remove-xml-namespaces-in-flex-or-as3/" target="_blank">Remove Annoying XML Namespaces in Flex / AS3</a> and <a href="http://brianmriley.wordpress.com/2008/03/20/getting-around-unknown-namespaces-in-flex-and-as/" target="_blank">Getting around unknown namespaces in Flex / AS3</a>.

So until I get my head around how namespaces work, I'm going to be using the techniques described in the links above.  Until then, if anyone can explain this to me - I'd be very greatful!