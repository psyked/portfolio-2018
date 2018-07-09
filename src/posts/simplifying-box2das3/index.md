---
path: /blog/simplifying-box2das3/
layout: post
title: Simplifying Box2DAS3...
date: 2010-01-08T08:25:15Z
tags:
- actionscript
- box2d
- actionscript-3
---

One of the downsides to the Box2DAS3 project - and probably one of the major hurdles to most Flash developers - is the fact that it's inherited a lot of the syntax from the C++ project that it's derived from.  Maybe it's just because we're used to it, but Actionscript is pretty easy to understand, and its methods of working pretty tolerant of inefficient coding.

C++ - or whatever Box2D is written in - is not, and it's a little painful to setup and easy to break.  For my sanity as much as anyone else's I'm working on a set of classes in AS3 that wrap around the Box2DAS3 classes, and provide you with a more familiar syntax for working with Box2D - objects, methods and utilities that makes it quicker to throw things together and don't require you to rethink the way you work.

Well, that's the eventual aim anyway.

Here's the result of the first round of development - creating a Box2D world and adding objects, in about 6 lines of code.

<pre><code>var options:Box2DWorldOptions = new Box2DWorldOptions( 500, 280, 30, 9.8 );
options.setWorldEdges( true, true, true, true );
var world:Box2DWorld = Box2DUtils.createBoxedWorld( options );
world.debugDraw = true;
world.animateOnEnterFrame = true;
addChild( world );
for ( var i:int = 0; i < 30; i++ )
{
world.createCircle( 500 * Math.random(), 280 * Math.random(), 50 * Math.random());
}</code></pre>

And here's the result:

[kml_flashembed movie="http://uploads.psyked.co.uk/2010/01/Box2DExperiments.swf" height="280" width="500" /]

Not at the point of getting any interaction, or anything more interesting yet, but I've create a utility class for creating Box2D worlds and a Box2DWorld class (as opposed to b2World, which it extends).  The aim of these classes is to condense about 40 - 60 lines of initialisation and basic scenarios into just a few lines, using default variables whilst still allowing for optional overrides.  So if you wanted a world with 0 gravity, that's just a case of changing it at the start.

I'll post the classes soon - just as soon as I decide the best way to do so.  It'll all become more clear then, I hope.