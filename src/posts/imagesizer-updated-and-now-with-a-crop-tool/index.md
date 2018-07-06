---
path: /imagesizer-updated-and-now-with-a-crop-tool/
layout: post
title: ImageSizer updated, and now with a Crop tool.
date: 2009-03-15T16:28:50Z
tags:
- imagesizer
---

ImageSizer is now up to version 0.4.6.  If you're paying attention to the number of updates I've been putting up here, that's a noticable jump from the last update, so I guess it's time for a roundup of all of the features that have been introduced in this, and the other recent updates I forgot to mention.  

If you've been running ImageSizer then hopefully you'll have seen the automatic updates announce themselves, but here they are with a features list and pictures!
<h2>General updates:</h2>
<img class="alignnone size-full wp-image-802" title="ImageSizer version 0.4.6" src="http://uploads.psyked.co.uk/2009/03/imagesizer_main.jpg" alt="ImageSizer version 0.4.6" width="500" height="375" />

<!--more-->The first thing you'll notice is that the interface is looking a little bit brighter - with those helpful #1, #2, #3 markers. They're designed to make it easier to identify the process you need to take to use the application.  We've also added more instructions to the application, in a simpler language (hopefully).

<img class="alignnone size-full wp-image-803" title="ImageSizer - encoding screen" src="http://uploads.psyked.co.uk/2009/03/imagesizer_encoding.jpg" alt="ImageSizer - encoding screen" width="500" height="375" />

<strong>The encoding screen:</strong> It's only a visual thing, but it looks nice.  You can now see a preview of the image that's being processed, as well as the individual image progress and the overall batch progress while the application is working.  

Technically, this whole process has also been rewritten.  In the original version the processed files were stored in memory, which wasn't too great because it meant that if you were working on a lot of images it would really hog your system resources and actually slow down the resampling process. This has been changed now to take advantage of the file system more, and you shouldn't notice an ever-increasing drain on your system resources, and the process shouldn't slow down.

<img class="alignnone size-full wp-image-804" title="ImageSizer output screen." src="http://uploads.psyked.co.uk/2009/03/imagesizer_output.jpg" alt="ImageSizer output screen." width="500" height="375" />

<strong>The output screen: </strong> Again with the visual and textual overhaul. We're still working on the drag-and-drop method of working with the file system, but there's a new option - you can export your batch of images as a single folder or a compressed zip archive. It also makes more sense to set your output filename on this screen, so we've moved it here (it used to be on the first screen).

So, that's the changes to the existing screens - what about this 'Crop tool' you mentioned?
<h3>The Crop tool.</h3>
<img class="alignnone size-full wp-image-805" title="ImageSizer Crop tool" src="http://uploads.psyked.co.uk/2009/03/imagesizer_crop_tool.jpg" alt="ImageSizer Crop tool" width="500" height="368" />

As often as you want to resize images, you find you also want to cut just that little bit off the image. Well now you can, with the built-in Crop tool. From the inital screen, just click the crop button next to the image name, and a new window will open.  Click and drag the handles in the four corners to select the area of the image you want to crop to, and click the 'Crop Image' button.  Could it be any easier?

The crop tool functionality is aided by the awesome <a href="http://blog.mediablur.com/2008/02/20/flex-image-cropping-component/" target="_blank">Flex Image Cropping Component</a> from Random Madness.
<h3>Future developments.</h3>
There's a lot of other things that are planned, such as Twitter and Flickr uploading, JPEG file metadata editing, an image enhancing tool, and a few clever tricks we've thought of on the performance / ui front. And then there's fixing any bugs or memory leaks that we find! If you have any suggestions or spot a bug, then add a comment, or send us a message. You can also follow the official development microblog on Twitter: <a href="http://twitter.com/ImageSizer" target="_blank">@ImageSizer</a>.

You can use the AIR Installer badge in the column to the right of this post, or <a href="http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&amp;offeringid=10740&amp;marketplaceid=1" target="_blank">download ImageSizer via the AIR Marketplace</a>.