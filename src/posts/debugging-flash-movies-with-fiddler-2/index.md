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

![](/content/images/2007/10/fiddlerlogo.png)

### What is Fiddler?

_From the [Fiddler website](http://www.fiddler2.com/fiddler2/ "Open link in a new window"):_

> Fiddler is a Web Debugging Proxy which logs all HTTP(S) traffic between your computer and the Internet.

Simple really. Introduced to me by [Chris Preece](http://www.mmtdigital.co.uk/RVE9b7ab808a1ad4754a1a5800dce029b34,,.aspx "Open link in a new window"), this is a Microsoft-made free debugging tool which shows you all of the header information and file requests that your browser makes. It's works with IE, and also claims to work with other browsers (I've never tried this though)

### What does it do?

It has many more technical capabilities than those I need, but I found this quite useful for debugging flash movies on live websites. I've never really figured out the whole 'remote-debugging' features of Flash, so Fiddler offers another way of debugging them - showing you all the url requests that the flash movie makes. You can easily identify where things are going wrong once you find your crazy malformed urls in the requests list.

### Fiddler Links:

Visit the [Fiddler website](http://www.fiddler2.com/fiddler2/ "Open link in a new window").

Download [Fiddler 2](/content/images/2007/10/Fiddler2Setup.exe "Open link in a new window").

Read Developer.com's [getting started with Fiddler](http://www.developer.com/lang/jscript/article.php/3631066 "Open link in a new window") tutorial.