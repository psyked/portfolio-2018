---
path: /externalinterface-not-working-in-firefox/
layout: post
title: ExternalInterface not working in Firefox?
date: 2007-10-20T10:31:39Z
tags:
- actionscript
- actionscript-2
- externalinterface
- firefox
---

Here's a wierd one.  Let's say you have a flash navigation - one of those old DHTML style drop-down ones, but done in flash and layered over the top of your page content.  You can stick the wmode to transparent and have a transparent background for your flash.

That's dandy - but in most browsers (ie. firefox) you'll run into problems interacting with the content underneath your flash movie, particulary hyperlinks.  Hyperlinks and form fields just become inaccessible.  Setting the wmode might make things transparent, but it doesn't help the 'click-through' aspect of transparency.  So, what do you do?  The solution I've been using is a JavaScript function which resizes the flash movie, activated using ExternalInterface.<!--more-->
<h3>The problem?</h3>
<h3></h3>
In Internet Explorer, it works fine.  JavaScript calls, DOM elements resize.  Firefox? No dice.
<h3>The solution.</h3>
<h3></h3>
The solution I found has prettymuch baffled me as to why it should work, but it does.  Using the fully-qualified class name for ExternalInterface (<code><font color="#0000ff">flash</font>.<font color="#0000ff">external</font>.<font color="#0000ff">ExternalInterface</font></code>) solved all of my Firefox woes.

So quite simply - change your <code><font color="#0000ff">ExternalInterface</font>.<font color="#0000ff">call</font>();</code> to <code><font color="#0000ff">flash</font>.<font color="#0000ff">external</font>.<font color="#0000ff">ExternalInterface</font>.<font color="#0000ff">call</font>();</code>