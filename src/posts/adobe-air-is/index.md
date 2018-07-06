---
path: /adobe-air-is/
layout: post
title: Adobe AIR is...
date: 2008-04-13T11:00:08Z
tags:
- flash
- director
- framework
- mdm-zinc
---

Just what Adobe AIR is, is an unusual concept.  But I think I'm getting the hang of it.

<img src="http://uploads.psyked.co.uk/2008/04/airframework.jpg" alt="airframework.jpg" />
<h3><strong>Adobe AIR is not...</strong></h3>
Adobe AIR is not a direct replacement for Adobe Director, and in that respect not a competitor to products like MDM Zinc.  Macromedia / Adobe has been pretty unenthusiastic about keeping Director on par with its other products in the last 4 years and oh, how we wish it weren't so.  Nevertheless, AIR is not aimed at replacing Director.
<h3><strong>Adobe AIR is...</strong></h3>
the best parallel is probably the .net framework that Microsoft creates and distributes.  An AIR file can't function without the AIR runtime, and neither can it be installed.  The same is true of applications and services that leverage the .net framework.  Luckily, for end users, the .net framework often comes with your application (or if you're even luckier, via Automatic Updates)  Lucky for AIR then, that you can do the same thing.
<!--more--> Given that Adobe is, well, Adobe - owner of the ubiquitous Flash Player -  hearing about a new plugin called AIR makes you think that it's another one like the Flash or Shockwave player - for displaying content in webpages, and you'd think that what they're doing is abandoning their 99% market penetration plugin for a new shiny one, but with only 1-5% of the market having the plugin.

You'd be wrong to assume that, but it's only natural.  I thought that right up until the <a href="http://www.psyked.co.uk/adobe/apollo/on-air-london-review.htm" title="Open link in a new window" target="_blank">'on AIR' tour</a>.

It's true that the AIR plugin doesn't have as wide an existing user base as Flash - nothing else has - and it's not going to be easy for that user base to build - after all, they can't just dump this stuff across Automatic Updates.   <small>(Mac fanboys, it's not only Microsoft that does this - <a href="http://john.jubjubs.net/2008/03/21/apple-software-update/" title="Open link in a new window" target="_blank">Apple does too.</a>)</small>.  The AIR plugin is a framework for constructing powerful, platform independent applications on a users' computer.  If they don't have the AIR plugin, then an <a href="http://www.adobe.com/products/air/runtime_distribution1.html" title="Open link in a new window" target="_blank">AIR runtime installer can be supplied</a>.

Where this differs from applications like those created in Director, is that a Director application depends on nothing by itself.  It's the application you're used too, a self-reliant executable you can run from a CD-Rom, or blindly copy across multiple machines.  You have different copies for different operating systems.  AIR, you can't.  You can run an application from a CD-Rom, but only once the application is installed.  Moving to another system?  Just make sure you've got the runtime.
<h2>So, what do we get for using AIR?</h2>
<h3><strong>Powerful built-in features.</strong></h3>
For a while we had difficulty coming up with anything other than ' transparent windows', but then you could get that from an application created with Zinc.  With AIR you get a built in webkit HTML renderer, one that uses the same technology as Safari 3.  You also get a SQLite database, PDF support, advanced I/O <small>(compared to Director)</small>, encrypted storage and many others.  You also get ActionScript 3.  Unleashed.  No more security restrictions, no more imposed sandboxes.  And raw byte access is enabling everything from image and <a href="http://www.zeropointnine.com/blog/webcam-digital-video-recorder-for-air-updated" title="Open link in a new window" target="_blank">video encoding</a>, to <a href="http://www.gotoandlearn.com/player.php?id=69" title="Open link in a new window" target="_blank">email clients</a> to <a href="http://blog.vixiom.com/2007/06/29/merb-on-air-drag-and-drop-multiple-file-upload/" title="Open link in a new window" target="_blank">ftp clients</a>, just weeks after AIR is launched.  And heck, I nearly forgot about the online / offline features.
<h3><strong>Freedom &amp; Control.</strong><strong> </strong></h3>
Director - and many other applications besides - work within confines that Adobe AIR will make look primitive.  AIR apps have the ability to control as much about the way they run as they do the content they contain.  An AIR app can manipulate its position onscreen, its z-index, programmatically update its Icon, make itself always-on-top.  Heck, it can even animate its position and dimensions.  And then there's the file-type associations, the ability to launch other applications, cancel it's own shutdown, and be launched from external files.

So, umm.  Yeah, just wow.  In non-malicious hands, <small>(I think)</small> that's a powerful arguement for the AIR runtime.

Obviously the benefits of the AIR runtime are only going to be apparent once you start making things which require this sort of functionality.  Simple CD-Rom apps, nothing too complex, then I guess we're going to have a hard time arguing the benefits of AIR over Director.  And that's not even counting the <a href="http://en.wikipedia.org/wiki/Elephant_in_the_room" title="Open link in a new window" target="_blank">Elephant in the corner</a>.<small>  (That is the security/admin rights issue)</small>