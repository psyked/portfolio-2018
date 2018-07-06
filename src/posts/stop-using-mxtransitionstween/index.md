---
path: /stop-using-mxtransitionstween/
layout: post
title: Stop using mx.transitions.Tween;
date: 2008-07-12T16:15:16Z
tags:
- flash
- actionscript-2
- actionscript-3
- classes
---

If you're still using Flash's inbuilt <strong>Tween </strong>classes for you scripted animations, I suggest you stop - and start making things easier for yourself by using <strong>Tweener </strong>instead. Tweener is a class that replaces Tween, works for Actionscript 2 and Actionscript 3, offers a simpler interface for creating tweens, and has a larger range of easing options to work with.
<h3><strong>What's wrong with Tween?</strong></h3>
The Tween class is ok - up to a point. It does what it's supposed to, but once you start trying to integrate it with serious full-on Actionscripting you'll notice a few snags.  If you're dynamically creating and removing objects, and then want to dynamically modify the tweens, your tweens will likely go crazy.  Start a new Tween and there's very little way you can stop it - even by removing its subject. Stacking Tweens doesn't go down well either - if you create one to move an object left to right, and then mid-animation another to move it back to the left, things go ok until the point that the first animation should finish - whereupon your object will flick back to the finishing position of the first, and then resume the second animation.<!--more-->

Moreso than that however, is the hassle needed to create an animation with Tween;
<pre><span>import mx.transitions.Tween;</span>
<span>import mx.transitions.easing.*;</span>
<span>var xPosT:Tween = new Tween(myMovieClip, "_x", Bounce.easeOut, 0,
Stage.width, 3, true);</span>
<span>xPosT.onMotionFinished = function() {</span>
<span style="padding-left: 30px;">// movement finished</span>
<span>};</span></pre>
<h3><strong>Why is Tweener better?</strong></h3>
First up, there's no problems with mixing and matching, no misplaced motion crazyness.  You can apply and reapply tweens to your hearts content, and they all work.

Secondly, the interface is simpler - you can setup a tween with less lines of code, and you don't have to worry about managing objects to execute functions once your tween has run its course. And a single line of code can handle all of the attributes you want changing for a single object - no separate Tween objects for each attribute, just a single Tweener line for all the attributes (on the same object, under the same time and easing style).
<pre>import caurina.transitions.Tweener;

Tweener.addTween(myMovieClip, {_x:Stage.width, time:1, transition:"linear",
 onComplete:onCompleteHandler});

function onCompleteHander():Void {
<span style="padding-left: 30px;">// movement finished</span>
};</pre>
Thirdly, you don't have to worry about things like start variables - just the end variables.  Which makes far more sense.  In most situations I find I'm only adding the current position of an object as the start variable to Tween.  In Tweener, that's taken as the automatic variable - after all, if you want to set a different position for the object before the tween starts, you just do that on the line above.

Lastly, there's a invaluable <strong>delay</strong> attribute.  It's a built-in timer for your animations - how useful is that!  Want an animation to start after 10 seconds? Easy - just add 'delay:10' to your Tweener line.
<h2>Resources</h2>
<ul>
	<li><a href="http://code.google.com/p/tweener/" target="_blank">Download Tweener from its Google Code location</a></li>
</ul>