---
path: /blog/adobe-air-is/
layout: post
title: Adobe AIR is...
date: 2008-04-13T11:00:08Z
tags:
- flash
- director
- framework
- mdm-zinc
---

Just what Adobe AIR is, is an unusual concept. But I think I'm getting the hang of it.

![airframework.jpg](http://uploads.psyked.co.uk/2008/04/airframework.jpg)

### **Adobe AIR is not...**

Adobe AIR is not a direct replacement for Adobe Director, and in that respect not a competitor to products like MDM Zinc. Macromedia / Adobe has been pretty unenthusiastic about keeping Director on par with its other products in the last 4 years and oh, how we wish it weren't so. Nevertheless, AIR is not aimed at replacing Director.

### **Adobe AIR is...**

the best parallel is probably the .net framework that Microsoft creates and distributes. An AIR file can't function without the AIR runtime, and neither can it be installed. The same is true of applications and services that leverage the .net framework. Luckily, for end users, the .net framework often comes with your application (or if you're even luckier, via Automatic Updates) Lucky for AIR then, that you can do the same thing. Given that Adobe is, well, Adobe - owner of the ubiquitous Flash Player - hearing about a new plugin called AIR makes you think that it's another one like the Flash or Shockwave player - for displaying content in webpages, and you'd think that what they're doing is abandoning their 99% market penetration plugin for a new shiny one, but with only 1-5% of the market having the plugin.

You'd be wrong to assume that, but it's only natural. I thought that right up until the ['on AIR' tour](http://www.psyked.co.uk/adobe/apollo/on-air-london-review.htm "Open link in a new window").

It's true that the AIR plugin doesn't have as wide an existing user base as Flash - nothing else has - and it's not going to be easy for that user base to build - after all, they can't just dump this stuff across Automatic Updates. (Mac fanboys, it's not only Microsoft that does this - [Apple does too.](http://john.jubjubs.net/2008/03/21/apple-software-update/ "Open link in a new window")). The AIR plugin is a framework for constructing powerful, platform independent applications on a users' computer. If they don't have the AIR plugin, then an [AIR runtime installer can be supplied](http://www.adobe.com/products/air/runtime_distribution1.html "Open link in a new window").

Where this differs from applications like those created in Director, is that a Director application depends on nothing by itself. It's the application you're used too, a self-reliant executable you can run from a CD-Rom, or blindly copy across multiple machines. You have different copies for different operating systems. AIR, you can't. You can run an application from a CD-Rom, but only once the application is installed. Moving to another system? Just make sure you've got the runtime.

## So, what do we get for using AIR?

### **Powerful built-in features.**

For a while we had difficulty coming up with anything other than ' transparent windows', but then you could get that from an application created with Zinc. With AIR you get a built in webkit HTML renderer, one that uses the same technology as Safari 3. You also get a SQLite database, PDF support, advanced I/O (compared to Director), encrypted storage and many others. You also get ActionScript 3. Unleashed. No more security restrictions, no more imposed sandboxes. And raw byte access is enabling everything from image and [video encoding](http://www.zeropointnine.com/blog/webcam-digital-video-recorder-for-air-updated "Open link in a new window"), to [email clients](http://www.gotoandlearn.com/player.php?id=69 "Open link in a new window") to [ftp clients](http://blog.vixiom.com/2007/06/29/merb-on-air-drag-and-drop-multiple-file-upload/ "Open link in a new window"), just weeks after AIR is launched. And heck, I nearly forgot about the online / offline features.

### **Freedom & Control.**

Director - and many other applications besides - work within confines that Adobe AIR will make look primitive. AIR apps have the ability to control as much about the way they run as they do the content they contain. An AIR app can manipulate its position onscreen, its z-index, programmatically update its Icon, make itself always-on-top. Heck, it can even animate its position and dimensions. And then there's the file-type associations, the ability to launch other applications, cancel it's own shutdown, and be launched from external files.

So, umm. Yeah, just wow. In non-malicious hands, (I think) that's a powerful arguement for the AIR runtime.

Obviously the benefits of the AIR runtime are only going to be apparent once you start making things which require this sort of functionality. Simple CD-Rom apps, nothing too complex, then I guess we're going to have a hard time arguing the benefits of AIR over Director. And that's not even counting the [Elephant in the corner](http://en.wikipedia.org/wiki/Elephant_in_the_room "Open link in a new window"). (That is the security/admin rights issue)