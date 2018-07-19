---
path: /blog/simple-box2d-better-cleverer-more-optimised/
layout: post
title: Simple Box2D - Better, cleverer, more optimised.
date: 2010-02-03T08:29:44Z
tags:
- box2d
- actionscript
---

![](http://uploads.psyked.co.uk/2010/02/box2d-shapes-2.jpg "box2d-shapes-2")

_^ This time, that's an image - saves on the page rendering time!_

Another update on the Box2D classes I'm working on.  No new features, but some pretty cool expansions and improvements to the library object creation.

If you check out [the previous post](http://www.psyked.co.uk/box2d/demo-source-simple-box2d-with-curved-edges.htm), you'll see that the the dynamically drawn shapes weren't exactly perfect; nor were they very efficient.  Oh they worked fine, and traced the detail of the shape very well - but it took a decent chunk of system resources to animate and ended up with some overlaid shapes; which all made the Box2D a bit sluggish and the behaviours buggy.

So, stealing incorporating ideas from other projects has been the name of the game - namely the ear clipping optimisation code from [Splashdust.net](http://www.splashdust.net/2009/10/box2d-mouse-drawing-now-with-ear-clipping/), combined with some of my own cobbled-together more optimised code for tracing curved edges.

### Live demo:

Mouse interaction is enabled in the below example - click and drag the objects to check out how it works.

\[kml_flashembed movie="http://uploads.psyked.co.uk/2010/02/LettersExperiment.swf" height="280" width="500" /\]

### [Download the source code for this demo.](http://uploads.psyked.co.uk/2010/02/simplebox2d_demo_100202.zip)

\* The source code isn't exactly cleaned up - sometime, eventually, it will be.