---
path: /blog/targeting-multiple-browsers-with-css-and-some-javascript-trickery/
layout: post
title: Targeting multiple browsers with CSS... and some Javascript trickery.
date: 2009-11-28T08:00:19Z
tags:
- css
- javascript
---

There's a clever little javascript library that allows you to write CSS specifically for Chrome, the iPhone, IE 8, etc. all in a single file.  What it does is manipulate the HTML document client-side to add additional classes to the page, based on your browser type.  The end result is that your page gets additional selectors like .ie or .gecko added - and you can setup a single CSS file to target all of these browsers in one shot - no server side magic or conditional comments in the HTML.

You can find more information here ( [http://snipplr.com/view/9340/css-browser-selector/](http://snipplr.com/view/9340/css-browser-selector/) ) or download it from here ([http://github.com/rafaelp/css\_browser\_selector](http://github.com/rafaelp/css_browser_selector) ).