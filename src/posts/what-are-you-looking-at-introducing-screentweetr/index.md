---
path: /what-are-you-looking-at-introducing-screentweetr/
layout: post
title: What are you looking at? (Introducing Screentweetr)
date: 2009-06-19T08:31:17Z
tags:
- screentweetr
- twitter
- air
- tweetphoto
- twitpic
---

Screentweetr is my latest little side project; an AIR application for uploading desktop screenshots to twitter image services. You can download it now, from the <a href="http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&amp;marketplaceid=1&amp;publisherid=10603&amp;offeringid=13500" target="_blank">AIR Marketplace</a>.

<a href="http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&amp;marketplaceid=1&amp;publisherid=10603&amp;offeringid=13500" target="_blank"><img class="alignnone size-full wp-image-898" title="Screentweetr" src="http://uploads.psyked.co.uk/2009/06/screentweetr1.jpg" alt="Screentweetr" width="500" height="280" /></a>
<h3>So, what is Screentweetr?</h3>
Screentweetr is an application built on AIR (Adobe Integrated Runtime). It uses the <a href="http://twitpic.com/" target="_blank">TwitPic</a> service - which links in to your twitter account - and takes image data from your clipboard and allows you to quickly upload it directly to TwitPic, and the option to immediately tweet the same image on <a href="http://twitter.com/home" target="_blank">Twitter</a>.<!--more-->
<h3>How does it work?</h3>
You might have seen my previous post: <a href="http://www.psyked.co.uk/general-chit-chat/print-screen-detection-in-air.htm" target="_self">"Print Screen detection in AIR"</a> - that's the core functionality. Using the classes discussed in that post, the application listens for bitmap data on the clipboard.  Add in the JPEG encoder classes of the AIR framework to turn raw bitmaps into JPEG files, and then use the TwitPic API to post the JPEG data along with twitter credentials.

What the user sees, initially, is not much (apart from the welcome screen).  When you take a screenshot however, a chirpy little notification window appears and offers you a way to upload your screenshot.

<img style="border: 0px initial initial;" title="Screentweetr" src="http://uploads.psyked.co.uk/2009/06/screentweetr2.jpg" alt="Screentweetr" width="500" height="280" />

The advantage really is in the process - no longer is it a case of "Print screen", [paste into image software, save,] open website, select file, upload, tag, post - it's now a case of "Print screen", tag, upload.  You don't even end up creating an actual file on your computer - it's all virtual. (Which maybe isn't all good, but hey).
<h3>Why did I build it?</h3>
Well first of all, it doesn't look like anyones' made a similar application. In addition, the concept is really quite simple.  The core functionality took only a couple of days to put together from scratch.  (I've spent a lot more time in total on the development but hey, that's the fun of learning all the time.)

Building successful little applications relies on the application being a) good at what it does and b) focussed on its task.  Well, that's what I think.  Big companies with established multiple-task products have got there with many years and many developers - if you don't have that then you need to start small and focus on what you want the application do to, and do it well.

For example; <a href="http://www.psyked.co.uk/adobe/apollo/imagesizer-version-049-released.htm" target="_self">ImageSizer</a> takes images and resizes them.  That's its core function, and that's all its gonna do.  I know I haven't a hope of competing with professional software and all it's features, so I'm not trying to compete.  If I'm going to make an application that can add snazzy pixel bender effects to images, then it's going to be a separate application - and that's what Screentweetr is all about. It's taking a potential user scenario - the process of screenshot to twitter - and building an application to facilitate that.
<h3>What's in store for the future?</h3>
Oh my, where do we start? Well, there's three key elements to the future development; Visuals, Services and User experience. Visuals and user experience are just generally improving the look and feel of the application, and how it works.  Services were suggested by <a href="http://twitter.com/destroytoday" target="_blank">@destroytoday</a> and sounds like a good idea - basically adding support for more than one image uploading service. So, <a href="http://www.tweetphoto.com/index.php" target="_blank">TweetPhoto</a> is on the list to go alongside support for TwitPic.
<h3>Where can I download it?</h3>
That's simple.  Screentweetr is available for <a title="Click here to visit the AIR Marketplace to download Screentweetr." href="http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&amp;marketplaceid=1&amp;publisherid=10603&amp;offeringid=13500" target="_blank">download from the Adobe AIR Marketplace</a>.  I'll get an install badge up on here soon, but for now, just go to the AIR Marketplace.