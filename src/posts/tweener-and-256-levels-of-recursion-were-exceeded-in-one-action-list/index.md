---
path: /tweener-and-256-levels-of-recursion-were-exceeded-in-one-action-list/
layout: post
title: Tweener and "256 levels of recursion were exceeded in one action list"
date: 2008-10-13T08:30:52Z
tags:
- actionscript
---

Tweeners' great, but I came across one little problem the other day: when I tried to remove an externally loaded swf from the stage while it was mid-animation, Tweener could bring the whole Flash movie to a halt with the error '256 levels of recursion were exceeded in one action list'.

Obviously that's bad - because this particular error completely stops the flash player with no warning to the end user.  And the fact that external content - which I have no control over - can cause this is doubly bad.

All is not lost however, because Tweener has a useful little function: <strong>Tweener.removeAllTweens();</strong> ok, so it can interfere with everything on your flash movie as well, but at least it's stopping the recursion errors.

So, if you try to remove a loaded swf file with .removeMovieClip(), you might find that it's using Tweener.  And if so, call Tweener.removeAllTweens() before you call .removeMovieClip() and you'll be fine.  Phew! case closed.<!--more-->
<h2>Resources;</h2>
<ul>
	<li><a href="http://hosted.zeh.com.br/tweener/docs/en-us/" target="_blank">Tweener Documentation</a> - <a href="http://hosted.zeh.com.br/tweener/docs/en-us/methods/Tweener_removeAllTweens.html" target="_blank">removeAllTweens();</a></li>
</ul>