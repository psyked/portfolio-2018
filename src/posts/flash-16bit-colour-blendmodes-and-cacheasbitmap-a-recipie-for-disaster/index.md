---
path: /flash-16bit-colour-blendmodes-and-cacheasbitmap-a-recipie-for-disaster/
layout: post
title: Flash, 16bit colour, blendModes and cacheAsBitmap.  A recipie for disaster?
date: 2007-06-05T12:07:12Z
tags:
- actionscript
- flash
---

Apparently so. For one of our recent projects, we've been plagued with reports of a 'Black screen of Death' - where our program would seize up and keel over whilst using our interactive drawing tools.  This seemed to happen on approximately 3% of our test bed, but none of our development machines.  One of 'those' bugs.

Today, however, I believe I've cracked it.  (Thanks to some feedback that isolated the problem only exists on machines running in 16bit colour mode.)

If, say, you're foolish enough to try using Flash 8's blendModes and cacheAsBitmap features in a machine running in 16bit colour mode, your cached MovieClips can turn out solid black.  Now, obviously it's down to some kinda colour mathematics, but the important thing is that it can be fixed by removing the bitmap caching.

So, if for some freaky reason you get a similar problem - remove your bitmap caching.

<span class="date">{End Public Service Announcement}</span>