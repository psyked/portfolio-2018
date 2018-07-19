---
path: /blog/automating-tasks-in-flex-builder-with-the-help-of-a-little-something-called-ant/
layout: post
title: Automating tasks in Flex Builder, with the help of a little something called
  'ANT'.
date: 2009-12-04T09:00:57Z
tags:
- flex
- ant
- eclipse
- flex-builder
- ftp
---

One of the great things about Flex Builder is that it's developed on top of the already existing [Eclipse IDE](http://www.eclipse.org/), and is itself just one of many uses the Eclipse project is put to.  Which means that many of the things you may want to do in your projects have already been explored by others.  One such thing is automated tasks.

![ANT Tasks in Flex](http://uploads.psyked.co.uk/2009/12/anttasks.jpg "ANT Tasks in Flex")

Turns out there's something called [ANT](http://ant.apache.org/faq.html#what-is-ant), which "\[... does a really good job at building things\]".  As Eclipse is the basis for Flex Builder, a lot of the plugins for Eclipse - and all the variants of it - work just fine in Flex Builder.  There's a plugin for Eclipse which adds ANT support for example, and then further plugins which add even more task types to ANT, such as FTP support.

### What do you use ANT for?

I’ve been working out how to use ANT as part of the build process for a few projects we have on the go at the moment.  Prior to using ANT tasks the process of publishing projects was convoluted and a little tedious, with room for human error.  It involved things like publishing the Flex project, then remembering to copy all of the associated files that Flex doesn’t know about (or won’t copy for me) into the correct locations, then manually uploading those files to a webserver - all of which I'd rather not have to worry about.

With the help of a bit of Googling I've managed to get all of the 4-step publishing process down into a single set of ANT tasks, which I can execute in a single click and just let it do its thing - publishing, copying, uploading, all on its own.  If I can figure it out(!), you can even generate documentation, auto-increment build numbers, generate code, and even sync things with source control.

Ok, so I haven't quite got the latter stuff worked out yet, but the time and hassle saved being able to automate my publishing and uploading processes has already paid of the time invested to understand ANT tasks.

### The lowdown;

ANT is:

*   A 'language' for defining and chaining a series of tasks together.
*   XML-based - all of the tasks are stored in XML in a build file.  These roughly correspond to an XML representation of command-line style instructions.
*   Has a number of simple operations supported - such as copying files, find & replace, but can also execute command-line instructions or be extended to support additional tasks (like FTP transfers).

### Links;

Here’s a couple of useful links on how you can use ANT in conjunction with Flex Builder;

*   [http://www.slideshare.net/dctrl/deploy-flex-with-apache-ant-presentation](http://www.slideshare.net/dctrl/deploy-flex-with-apache-ant-presentation)
*   [http://dispatchevent.org/mims/ant-for-flex-part-1/](http://dispatchevent.org/mims/ant-for-flex-part-1/)

I've misplaced my bookmarks for the rest, but I'll find them and post them when I can.  In the meantime, Google will serve as the path to enlightenment for those ready to walk the path...