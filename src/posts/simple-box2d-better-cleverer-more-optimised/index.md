---
path: /simple-box2d-better-cleverer-more-optimised/
layout: post
title: Simple Box2D - Better, cleverer, more optimised.
date: 2010-02-03T08:29:44Z
tags:
- box2d
- actionscript-30
---

<img class="alignnone size-full wp-image-1170" title="box2d-shapes-2" src="http://uploads.psyked.co.uk/2010/02/box2d-shapes-2.jpg" alt="" width="500" height="280" />

<em>^ This time, that's an image - saves on the page rendering time!</em>

Another update on the Box2D classes I'm working on.  No new features, but some pretty cool expansions and improvements to the library object creation.

If you check out <a href="http://www.psyked.co.uk/box2d/demo-source-simple-box2d-with-curved-edges.htm" target="_self">the previous post</a>, you'll see that the the dynamically drawn shapes weren't exactly perfect; nor were they very efficient.  Oh they worked fine, and traced the detail of the shape very well - but it took a decent chunk of system resources to animate and ended up with some overlaid shapes; which all made the Box2D a bit sluggish and the behaviours buggy.

<!--more-->So, stealing incorporating ideas from other projects has been the name of the game - namely the ear clipping optimisation code from <a href="http://www.splashdust.net/2009/10/box2d-mouse-drawing-now-with-ear-clipping/" target="_blank">Splashdust.net</a>, combined with some of my own cobbled-together more optimised code for tracing curved edges.
<h3>Live demo:</h3>
Mouse interaction is enabled in the below example - click and drag the objects to check out how it works.

[kml_flashembed movie="http://uploads.psyked.co.uk/2010/02/LettersExperiment.swf" height="280" width="500" /]
<h3><a href="http://uploads.psyked.co.uk/2010/02/simplebox2d_demo_100202.zip" target="_self">Download the source code for this demo.</a></h3>
* The source code isn't exactly cleaned up - sometime, eventually, it will be.