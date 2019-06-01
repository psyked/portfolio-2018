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

[Upcoming flash player update?](http://www.adobe.com/devnet/flashplayer/articles/flash_player9_security_update.html "Open link in a new window") Uh oh...

Well, I'm all for continually updating and improving products, but in the case of Flash it's a real problem when it interferes with backwards-compatability and certain methods of working. I am of course, referrring to the [issues that were encountered with sIFR Flash links](http://www.psyked.co.uk/adobe/flash/sifr-links-not-working.htm "Open link in a new window"), caused by the Flash Player version 9.0.115 (kudos to [Mark Wubben](http://novemberborn.net/) for explaining this to me) and also in more general terms to the introduction of a rigid security model with Flash Player 8.

While we're always doing our best to code in the most secure, efficent ways - like for example, using the **ExternalInterface** class as opposed to communicating with javascript via **getURL(javascript:)** [\[1\]](http://www.psyked.co.uk/actionscript/actionscript-geturl-vs-externalinterface-when-why.htm) \- there's situations where these techniques weren't available at the time they were written, and these are going to be broken by the update.

[Adobe's solution?](http://www.adobe.com/devnet/flashplayer/articles/flash_player9_security_update.html#javascript "Open link in a new window")

> If your content is using "javascript:" within the prohibited networking APIs, you will need to rewrite your content. Developers are encouraged to use the ExternalInterface class for JavaScript-to-ActionScript communication.

Rewrite your code?! That like, must be breaking some unwritten rule of versioning, surely? Files published under a different version shouldn't be mercy to the whims of newer players - otherwise, what's the point?

Thanks to [UnitZeroOne](http://www.unitzeroone.com/blog/2008/03/11/developers-beware-upcoming-flash-security-update-april-2008/ "Open link in a new window") for their article which tipped me off.