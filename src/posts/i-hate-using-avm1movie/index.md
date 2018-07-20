---
path: /blog/i-hate-using-avm1movie/
layout: post
title: I hate using AVM1Movie...
date: 2010-11-22T23:20:19Z
tags:
- actionscript
---

![](http://uploads.psyked.co.uk/2010/11/avm1movie-hydra.jpg)

Developer beware.  AVM1Movie content (running ActionScript 2 content inside ActionScript 3 movies) is a spiralling nexus of doom that will lead to your eventual insanity, if you persist in walking down that path.

Seriously.  I'd love to catalogue the many intricacies and weird behaviours of AVM1Movie content, but that would mean being able to understand and explain them - which I can't do. The bottom line is that ActionScript 2 content in an ActionScript 3 movie doesn't behave the same as an ActionScript 2 movie does on its own.  Certain things just flat-out don't work, or don't work 'a certain way'.  Others that you thought did work actually work slightly or completely different, but do start working correctly with some encouragement.

### Want some examples?

Goodness knows if they're always repeatable, but these certainly happened to me...

*   In AS2, draw a rectangle, with a width of 130 pixels.  Measure the width.  What is the width, according to Flash? 89 pixels.  Fan-tastic.  Cast the width as a Number (even though it was already a number) before you start drawing, and try again.  What is the width this time, according to Flash? 130 pixels.
*   Dynamically generate an XML structure in AS2, using the **addElement** or **createElement** methods.  It works in AS2 on its own, nothing works when it's loaded as AVM1.  Rewrite the function to create everything as a String and call **parseXML** on it.  It all works.
*   Try calling a function.  Function doesn't work.  Set an enterFrame listener, and call the function a single frame later.  It works.

AVM1Movie has done its utmost to ruin my sanity - don't let it ruin yours. Avoid doing anything technically complicated in it, rewrite it all in AS3 if you can!