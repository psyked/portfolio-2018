---
path: /blog/fish-eye-menu-in-actionscript-20/
layout: post
title: Fish Eye Menu in ActionScript 2.0
date: 2008-10-12T13:01:05Z
tags:
- flash
- actionscript
---

A little while ago we had to do a Fish Eye menu - the magnification effect you see on the Mac OSX dock menu - but we had to do it in ActionScript 2.0, rather than ActionScript 3.0.

Now, <a href="http://www.shinedraw.com/" target="_blank">Shine Draw</a> have been kind enough to put a version of this out into the wild, but it's in AS3 <a href="http://www.shinedraw.com/animation-effect/flash-and-silverlight-fish-eye-menu/" target="_blank">[link]</a>. Of course AS3 is faster and nicer, but there are still some out there who want their stuff targetted for Flash Player 8 - which means AS1 or AS2 only - so I backwards converted Shine Draw's lovely class-based demo to a timeline-scripted AS2 version.
<h2>Demo</h2>
[kml_flashembed movie="http://www.psyked.co.uk/downloads/fisheyemenu_as2.swf" height="280" width="500" /]

<strong>Download:</strong> <a href="http://www.psyked.co.uk/wp-content/uploads/2008/10/fisheyemenu_as2.zip" target="_blank">Fish Eye Menu [Flash CS3, Flash Player 8, AS3, 110KB]</a>

<h2>The process;</h2>
Actually, it wasn't too hard to backwards convert the AS3 version - the three main things to do are to
<ol>
	<li>Take the code out of a document class structure, and onto the timeline - which in reality is mostly a copy and paste job, a bit of commenting out, and changing the events or function calls that initalise the code.</li>
	<li>Change variables and parameters, linkages and library classes; <strong>.scaleX</strong> to <strong>._xscale</strong>, event names and listener arrangements, and library item classes.</li>
	<li>Rewrite code dealing with depths or the display list. - This is actually the most difficult part of the conversion, and really highlights how difficult depths were to work with, pre AS3.</li>
</ol>
There's a little bit of code commenting in there, but if you're interested in seeing how the two compare, I would suggest you head over to Shine Draw, download the AS3 version, download this version, and look at them side-by-side.
<h2>Resources;</h2>
<ul>
	<li><a href="http://www.shinedraw.com/animation-effect/flash-and-silverlight-fish-eye-menu/" target="_blank">Shine Draw - flash and Silverlight: Fish Eye Menu</a>
(yes, there's a Silverlight equivilent!)</li>
	<li><strong>Update:</strong> <a href="http://gist.github.com/518634" target="_blank">The timeline code, available on GitHub</a></li>
</ul>