---
path: /blog/flash-player-security-update/
layout: post
title: 09/04/08 Flash Player security update
date: 2008-03-16T19:59:47Z
tags:
- flash
- javascript
- externalinterface
- geturl
---

<a href="http://www.adobe.com/devnet/flashplayer/articles/flash_player9_security_update.html" title="Open link in a new window" target="_blank">Upcoming flash player update?</a> Uh oh...

Well, I'm all for continually updating and improving products, but in the case of Flash it's a real problem when it interferes with backwards-compatability and certain methods of working.  I am of course, referrring to the <a href="http://www.psyked.co.uk/adobe/flash/sifr-links-not-working.htm" title="Open link in a new window" target="_blank">issues that were encountered with sIFR Flash links</a>, caused by the Flash Player version 9.0.115 (kudos to <span class="autore"></span><a href="http://novemberborn.net/" rel="external nofollow">Mark Wubben</a> for explaining this to me) and also in more general terms to the introduction of a rigid security model with Flash Player 8.

While we're always doing our best to code in the most secure, efficent ways - like for example, using the <strong>ExternalInterface </strong>class as opposed to communicating with javascript via <strong>getURL(javascript:)</strong> <a href="http://www.psyked.co.uk/actionscript/actionscript-geturl-vs-externalinterface-when-why.htm">[1]</a>  - there's situations where these techniques weren't available at the time they were written, and these are going to be broken by the update.

<a href="http://www.adobe.com/devnet/flashplayer/articles/flash_player9_security_update.html#javascript" title="Open link in a new window" target="_blank">Adobe's solution?</a>
<blockquote> If your content is using "javascript:" within the 		    prohibited networking APIs, you will need to rewrite your content. Developers 		    are encouraged to use the <u>ExternalInterface 		      class</u> for JavaScript-to-ActionScript communication.</blockquote>
Rewrite your code?!  That like, must be breaking some unwritten rule of versioning, surely?  Files published under a different version shouldn't be mercy to the whims of newer players - otherwise, what's the point?

Thanks to <a href="http://www.unitzeroone.com/blog/2008/03/11/developers-beware-upcoming-flash-security-update-april-2008/" title="Open link in a new window" target="_blank">UnitZeroOne</a> for their article which tipped me off.