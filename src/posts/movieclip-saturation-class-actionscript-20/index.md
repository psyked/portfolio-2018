---
path: /blog/movieclip-saturation-class-actionscript-20/
layout: post
title: MovieClip Saturation Class - ActionScript 2
date: 2007-09-04T22:19:37Z
tags:
- actionscript
- flash
- resources
---

This ActionScript 2.0 Class enables you to easily adjust the colour saturation of any Flash MovieClip during runtime.  It requires Flash Player version 8 or above, and uses the ColourTransformationMatrix and some clever jiggery-pokery to adjust the RGBA channels of your MovieClips.  In short, it's sweet - and fills a gap in the built-in flash filter classes.

Have a look at this flash movie (below) to see the end result, all generated from the same MovieClip.

[kml_flashembed movie="http://www.psyked.co.uk/downloads/SaturationManagerTest.swf" height="365" width="470" fversion="8" wmode="transparent" menu="false" /]



Now, before I go much further, I should point out that the functions that make this possible are down to <a href="http://www.senocular.com/flash/source.php?id=0.169" title="Open link in a new window" target="_blank">senocular</a>, whose equally awesome code this is based on.  All I really did was figure out a way to turn it into an ActionScript 2.0 Class.  -  Technically it doesn't even need to be in a class - but it just makes things easier.
<h3>Using this Class</h3>
Firstly, you're going to want to <a href="http://www.psyked.co.uk/wp-content/uploads/2007/09/SaturationManager.zip" title="Open link in a new window" target="_blank">download the source files</a>.  It's as basic as it comes - using it 'out-the-box' requires that you take the 'mmt' folder, and paste it into the same directory as your .fla file.  And then, by typing;

<code>mmt.SaturationManager.setSaturation(your_movieclip, the_saturation);</code>

You'll be able to modify the colour saturation of the MovieClip.   "<code>your_movieclip</code>" is obviously a reference to the MovieClip, and "<code>the_saturation</code>" is a value from 0 (No Colour) to 100 (Normal Colour).  You can apply values beyond 0 and 100, and oversaturate the colours.  In our example (above) the [1<sup>st</sup> on the left, bottom row] MovieClip is oversaturated, at 150%.
<h3>Downloads</h3>
<a href="http://www.psyked.co.uk/wp-content/uploads/2007/09/SaturationManager.zip">Download the source files, containing example .fla and .as files</a> [ZIP, 488KB]
<a href="/downloads/SaturationManager.as">Download only the .as file</a> [ActionScript File, 1KB]