---
path: /blog/flex-quick-tip-printing-an-objects-contents/
layout: post
title: 'Flex Quick Tip: Printing an Objects'' contents'
date: 2009-06-15T08:09:54Z
tags:
- actionscript
---

You quickly learn in Actionscript 3 that tracing an objects' contents is not always that simple.  Commands such as <strong>trace(myObject);</strong> often yeild the highly infuriating <strong>[object Object]</strong> return, which tells you mostly nothing of what you actually wanted to know.  After that you can move on to more advanced trace logic, like the handy;
<pre><strong>for(var i in n) {
    trace(i+":"+n[i]);
}</strong></pre>
But that's a lot of stuff to type, and often yeilds infuriatingly long stacks of parameter traces.

Flex can make things a little easier, with this useful utility class, the cunningly named <strong>ObjectUtil </strong>class.  Simply import the class (<strong>import mx.utils.ObjectUtil;</strong>) and call the following method; <strong>trace(ObjectUtil.toString(myObject));</strong> and you'll get a nice output of all the properties of your object.

Kudos to flextutor.org for this, in their original post "<a href="http://www.flextutor.org/flex-tips-suggestions/how-to-print-an-object-content-in-flex/" target="_blank">How to print an objects' contents in Flex</a>."  I thought I'd repost it here though, not least because there seems to be an issue loading their site as I' m writing this article.