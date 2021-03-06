---
path: /blog/imagesizer-updated-to-version-039/
layout: post
title: ImageSizer - updated to version 0.3.9!
image: imagesizerupdate.jpg
date: 2008-12-16T09:17:05Z
tags:
  - imagesizer
  - air-applications
---

If anyone out there is using Marks' ImageSizer AIR application, you may have noticed a new update has appeared - imaginatively called 'Version 0.3.9'.

Functionality wise, the primary changes are that the restrictions on the number of images that can be processed have been removed - the original ImageSizer would only let you process 10 images at a time - a sensible restriction, because the application is pretty memory intensive when it gets going, as the component loads each of the images into memory at once.  Instead of actually fixing this issue however (that's in the pipeline) I've just removed the images limit, so don't go processing lots of images in one go.

Other than that, there's been a few changes to the interface - additional functions such as maximise and restore (thoroughly useless yes, but fun to program) - and rearrangement of some of the buttons and general code tidying.  Nothing major.

Unfortunately, the Publisher and Application IDs have changed, so the auto update for older versions won't work!  You can however, use the AIR Badge below to install the new version of the application.
