---
path: /blog/syncronising-scrollpane-components-in-actionscript-2/
layout: post
title: Syncronising ScrollPane Components in ActionScript 2.
date: 2007-11-04T14:21:57Z
tags:
- actionscript
- component
- scrollpane-component
---

This is perhaps an unusual one - and one I haven't seen anyone else make much fuss over, so here goes.

Using the standard Version 2 components (Flash MX2004+) I've been trying to link the movement of three components together.  "No biggie" you'd think. You can after all, set listeners on the .scroll property of the component instance, and then use that to set the .scroll properties of the other instances.  Well yes, that's true - but looking closely at the movement of the ScrollPanes, you can see a slight lag in their movement.  A bit of frantic scrolling can throw the whole thing out of place.

<code>var ScrollPaneListener:Object = new Object();
//
ScrollPaneListener.scroll = function(){
scrollpaneinstance2.vPosition = scrollpaneinstance1.vPosition;
scrollpaneinstance3.hPosition = scrollpaneinstance1.hPosition;
}
scrollpaneinstance1.addEventListener("scroll", ScrollPaneListener);</code>

You should see in this example, that the ScrollPanes can go out of sync, particulary while dragging the scrollbar. - And the effect is even more pronounced with really complex contents.

[kml_flashembed movie="http://uploads.psyked.co.uk/ScrollPanesExampleVersion1.swf" height="300" width="400" /]

After a bit of digging, I found out that the 'x' and 'y' scroll properties (not the same as '_x' and '_y') are updated at longer intervals, so can miss out on movements and give inaccurate positions.  The solution?  Thankfully we can dig into the components themselves with ActionScript, and pull out the properties we want.  So, in place of our inital code, we can use;
<code>
var ScrollPaneListener:Object = new Object();
//
ScrollPaneListener.scroll = function(){
scrollpaneinstance2.vPosition = scrollpaneinstance1.spContentHolder._y;
scrollpaneinstance3.hPosition = scrollpaneinstance1.spContentHolder._x;
}
scrollpaneinstance1.addEventListener("scroll", ScrollPaneListener);</code>

And in this example, the ScrollPanes should always be at identical scroll positions, even with some pretty intensive contents.

[kml_flashembed movie="http://uploads.psyked.co.uk/ScrollPanesExampleVersion2.swf" height="300" width="400" /]

The code is now far more accurate, because it always gets the same position as the actual position of the components' on stage, although it's slightly more resource-intensive.  (Only slightly)