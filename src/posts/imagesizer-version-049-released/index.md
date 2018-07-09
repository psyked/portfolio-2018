---
path: /blog/imagesizer-version-049-released/
layout: post
title: ImageSizer version 0.4.9 released!
date: 2009-05-11T08:05:23Z
tags:
- imagesizer
- custom-chrome
- print-screen
---

It's been quite a while coming, but a new version of ImageSizer is now available. Here's a little look at what's new...
<h3>Optional custom chrome:</h3>
<img class="alignnone size-full wp-image-876" title="Optional custom chrome" src="http://uploads.psyked.co.uk/2009/05/customchrome.jpg" alt="Optional custom chrome" width="500" height="280" />

Introduced as a part of our bid to follow 'application best practice', you can now enable or disable the custom chrome and window transition effects.  There's plus sides to both custom and native OS chromes, but the point is that it's always nice to let you choose!  The native OS chrome has better integration and performance than a custom chrome, but doesn't always look quite so nice - and can't have the same funky window window transitions.  It's also going to be more consistent with the window chrome of other desktop applications, and gives you a noticeable performance boost on lower spec machines.

You can turn the custom chrome on and off in the Application Settings window, under 'Visual effects'.  By default the custom chrome is turned off - you'll have to go back into the settings panel to turn it on again.
<h3>Clipboard data detection / import:</h3>
<img class="alignnone size-full wp-image-878" title="Import new image" src="http://uploads.psyked.co.uk/2009/05/importnewimage.jpg" alt="Import new image" width="500" height="280" />

Wouldn't it be good if you could just take a screenshot, and output that as an image?  Well, here's a new feature - any bitmap image data that is put in the OS clipboard can be detected by ImageSizer.  So, pressing the Print Screen button will now open a new little window (shown above) that will allow you to import the clipboard data as a separate image, and then crop it (if you wish) just like a normal image.
<h3>Improved Google Analytics tracking:</h3>
The <a href="http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&amp;marketplaceid=1&amp;offeringid=10740" target="_blank">AIR Marketplace</a> tells us that (the the time of writing) we've had over 2700 downloads of ImageSizer through them, and our server download logs put the figure much higher - but nothing really helps distinguish between downloads, installations and upgrades.  So, we've added some improvements to the integrated application tracking.  We can now tell when the application is installed afresh and when it's upgraded, and also what versions are installed or upgraded.

Not massively exciting I know, but useful for us.  And I'll be doing a tutorial or posting some information about the techniques used sometime in the future.
<h3>Other tweaks and improvements:</h3>
Those are the 'keynotes' for this new version of ImageSizer.  While this has all been under development we've also fixed a few other minor things, namely:
<h4>Crop window improvements</h4>
<img class="alignnone size-full wp-image-879" title="Crop Information" src="http://uploads.psyked.co.uk/2009/05/cropinfo.jpg" alt="Crop Information" width="500" height="280" />

Crop information is now editable - you can type new figures into the box to manually change the dimensions of the crop reticle.  Previously this was not editable.  So if you need to easily get your images to an exact size, this is for you!
<h3>And how about what's planned for the future?</h3>
Oh, future plans.  We think up new ideas faster than we can get around to them.  Here's some of the stuff we're planning to introduce very soon...
<ul>
	<li>Folder imports - we're going to introduce a mechanism for importing folders of images, rather than having to select images individually.</li>
	<li>Browse for folder - instead of restricting users to just a drag and drop interface, we're going to introduce other methods for importing files.</li>
	<li>System Tray / Dock icons - extended features and support for these icons.</li>
	<li>Performance settings - making them more configurable.</li>
	<li>and a few more grandiose plans...</li>
</ul>