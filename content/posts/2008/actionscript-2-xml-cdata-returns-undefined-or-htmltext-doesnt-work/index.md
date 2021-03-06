---
path: /blog/actionscript-2-xml-cdata-returns-undefined-or-htmltext-doesnt-work/
layout: post
title: ActionScript 2 - XML CDATA returns undefined, or htmlText doesn't work!
date: 2008-09-17T07:40:13Z
tags:
- actionscript
- flash
- cdata
- quirks
- xml
---

### The problem:

Your XML file is fine, it validates as XML.  The file encoding and the xml declaration encoding match.  You can parse the XML, but when you try and put html inside a CDATA element, and then populate a dynamic textbox with it, either your formatting doesn't work (the text still has <b> tags in) or it returns 'undefined'.

### The solution:

This could actually be a twofold problem, and is not helped along by Flash's quirks.  Its most likely that you're either;

*   Accessing the XMLNode incorrectly,

Or

*   Being tripped up by the Flash players' slightly dodgy XML parsing.

### Accessing CDATA correctly

Now, the way that you should be accessing CDATA in Flash is perhaps a little different to what you'd expect.  CDATA should have no effect on how you access your XML - it's a parsing instruction, right?.  Well Flash treats it as part of the XML structure, so if you want to access the data inside the CDATA element, you have to treat the CDATA as a node in itself.  Its actually quite easy though.  Instead of accessing the contents of CDATA with childNode.nodeValue or childNodes, you should be using **childNode.firstChild.nodeValue**.

So childNode is the parent node of the CDATA element, firstChild is the actual CDATA instruction, and nodeValue extracts everything that's inside the CDATA element.

That hopefully, will solve any problems with 'undefined' appearing when you try to access data inside a CDATA element.

### Flash players' dodgy XML parsing?

Yes indeedy, Flash does do things a little different.  CDATA is great because you can put nearly anything inside it, and the XML will still parse correctly.  Whatever's inside your CDATA should not be interpreted by anything else, and won't break anything that tries to read it.

Flash however, still does a little bit of work to it.  If you run a few traces on HTML formatting that you try to send via CDATA, you'll notice that all of the < and > characters are transformed into their encoded versions, &lt; and &gt;. This poses a minor problem because if you just try to whack HTML from your XML into a dynamic textbox, the formatting won't work properly and you'll get the characters < and > appearing, along with the HTML formatting commands - because the < and > characters are encoded.

Annoying yes, easy to fix - yes.

Find and replace is your ally here - or as near as we can easily get;

> xmlcdata**.split('&lt;').join('&gt;').split('>').join('>')**

Run that on your string of text before you put it into your textbox and you're good to go!

### Quirks?

What you also might find is that HTML formatted textboxes could actually display the contents of a CDATA node without the CDATA node being correctly accessed.  If you access the node with the childNodes property, and put that into your textbox, then the contents will display, but not with HTML formatting.

What Flash is actually doing is grabbing the CDATA element (and everything inside it).  Assigning this variable to a textbox _should fail_, but in actual fact it works - to a certain extent.  It seems like the HTML formatting of the textbox allows it to parse the XML element and then consiquently display the content within.  The problem then comes when you want to manipulate this data - the contents of the textboxes' text is not actually a string, but an XMLNode.  Weird, huh?