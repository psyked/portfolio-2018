---
path: /utf-8-bot-file-encoding-conversion-with-air/
layout: post
title: UTF-8 Bot - file encoding conversion with AIR
date: 2008-04-08T00:23:09Z
tags:
- flash
- adobe
- air
- cs3
---

Well, here it is, my first Adobe AIR application from Flash.

<img src="http://uploads.psyked.co.uk/2008/04/utf-8bot.png" alt="utf-8bot.png" />

<!--more-->

What does it do?  Well, it takes an ANSI or Latin1 encoded text file, and spits it out in UTF-8 format.  The need is pretty basic, and as is the core code, but it did give me an opportunity to delve into some of the ActionScript libraries that come with AIR.  Mainly connected with the <strong>FileSystem</strong>, <strong>NativeDragDrop </strong>and classes related to custom chromes.

I particulary like the drag and drop classes - they turned out to be far easier than I'd expected.  FileSystem on the other hand, turned out to be a bit more of a bugger to get working correctly.  I was also mildly surprised how easy it was to lock the application to the bottom of the screen, just with some cunning use of <code>stage.maximise</code> and <code>stageAlign.BOTTOM</code>.

Anyway, I hope I can write some more in detail 'tutorials' about a few of the things I've learnt at a later date, and take you through the code, but for now...

<strong><a href="http://www.psyked.co.uk/downloads/UTF-8 Bot.air" title="Open link in a new window" target="_blank">Download the AIR File</a> (Requires the <a href="http://get.adobe.com/air/" title="Open link in a new window" target="_blank">Adobe AIR Runtime</a>)</strong>

<strong><a href="http://www.psyked.co.uk/wp-content/uploads/2008/04/UTF-8_Bot_Source.zip" title="Open link in a new window" target="_blank">Download the source code</a> (Requires Flash CS3)</strong>

<small>Oh, and a little disclaimer;  I've tested this repeatedly, and not noticed any problems, but just you know, be careful and don't put anything crucial into the application.  This is an experimental project, not a commercial one.</small>