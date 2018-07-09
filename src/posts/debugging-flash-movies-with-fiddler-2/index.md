---
path: /blog/debugging-flash-movies-with-fiddler-2/
layout: post
title: Debugging Flash Movies with Fiddler 2
date: 2007-10-07T09:14:19Z
tags:
- external-links
- debugging-tools
- ie-plugins
---

<p style="text-align: center;"><img src="/content/images/2007/10/fiddlerlogo.png" alt="" /></p>

<h3>What is Fiddler?</h3>
<em>From the <a title="Open link in a new window" href="http://www.fiddler2.com/fiddler2/" target="_blank">Fiddler website</a>:</em>
<blockquote>Fiddler is a Web Debugging Proxy which logs all HTTP(S) traffic between your computer and the Internet.</blockquote>
Simple really.  Introduced to me by <a title="Open link in a new window" href="http://www.mmtdigital.co.uk/RVE9b7ab808a1ad4754a1a5800dce029b34,,.aspx" target="_blank">Chris Preece</a>, this is a <span style="text-decoration: line-through;">Microsoft-made</span> free debugging tool which shows you all of the header information and file requests that your browser makes.  It's works with IE, and also claims to work with other browsers (I've never tried this though)
<h3>What does it do?</h3>
It has many more technical capabilities than those I need, but I found this quite useful for debugging flash movies on live websites.  I've never really figured out the whole 'remote-debugging' features of Flash, so Fiddler offers another way of debugging them - showing you all the url requests that the flash movie makes.  You can easily identify where things are going wrong once you find your crazy malformed urls in the requests list.
<h3>Fiddler Links:</h3>
Visit the <a title="Open link in a new window" href="http://www.fiddler2.com/fiddler2/" target="_blank">Fiddler website</a>.

Download <a title="Open link in a new window" href="/content/images/2007/10/Fiddler2Setup.exe" target="_blank">Fiddler 2</a>.

Read Developer.com's <a title="Open link in a new window" href="http://www.developer.com/lang/jscript/article.php/3631066" target="_blank">getting started with Fiddler</a> tutorial.