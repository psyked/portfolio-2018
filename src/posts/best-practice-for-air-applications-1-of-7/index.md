---
path: /best-practice-for-air-applications-1-of-7/
layout: post
title: Best Practice for AIR applications (1 of 7)
date: 2009-02-15T23:53:08Z
tags:
- air
- best-practice
---

One thing that could severely affect peoples' general opinion of a technology is how it's used, how it's implimented. AIR in itself isn't a technology that is really any better or worse than its competitors - it's the usage that makes the difference - and customers make assumptions about a technology from how they see it used, not what it can do on paper. It's important then, for AIR applications to be made with the quality as other applications, and with this in mind I thought I'd have a go at establishing some guidelines.

Guidelines, or Best Practice, should be pretty familiar to Flash/Flex developers - a lot of what we do is made for the web, and the web has guidelines (in the form of the <a href="http://www.w3.org/" target="_blank">W3C</a>). AIR is a newish development platform, so a lot of the elements here represent a lot of work initally, but I'm trying to ignore the development it represents and imagine where things should be in a year or so. I have seven rough 'categories' with about 20 points total - too much to write in one night, so here's the first of several posts on the subject.

Any suggestions, leave a comment.
<!--more--><h2>Best Practice for AIR applications</h2>
These aren't really in an order of severity or importance, by the way - just the order they occured to me.
<h3>General Best Practice</h3>
<strong>Remember user preferences
<span style="font-weight: normal;">Anything that can be customised should be saved. If a user turns off a setting, they expect a setting to stay turned off when they reopen the application next time. This also applies to the window in general.  If you resize any other application, you'd expect it to open at the same size you closed it at. AIR doesn't support this behaviour by default, so you should really think about adding it.
<strong>Rating: <span style="color: #ff0000;">Must</span> </strong></span></strong>
<h3>Validate window position
<span style="font-weight: normal;">A followon from the point above - if you're going to remember your application position, make sure it opens at a valid size and within the visible window.  Think of this scenario - a user has two screens, with the application on screen 2.  They unplug screen 2.  What happens?
<strong>Rating: <span style="color: #ff0000;">Must</span></strong><span style="color: #ff0000;"> </span></span></h3>
<strong>Transportable user preferences
<span style="font-weight: normal;">If a user can save their preferences, why not make those preferences exportable so that they can be moved to the same application on another machine.  It could be an online syncing repository, it could be your own file format.
</span>Rating: <span style="color: #ff9900;">Should</span> </strong>

<strong>Rollovers / Visual UI interaction
<span style="font-weight: normal;">Not strictly a point limited to AIR, but one I've seen a few applications break so I thought I'd mention it.  All buttons, custom chrome etc. must interact with the mouse cursor. You might think that an 'x' in the corner of your custom chrome is obvious, but unless it has a rollover, I don't even know if it's working!
<strong>Rating: <span style="color: #ff0000;">Must</span></strong><span style="color: #ff0000;"> </span></span></strong>
<h3><span style="font-weight: normal;">That's it for now - the other categories I will post as-soon-as.  Not very interesting stuff in this list, I'll admit, but it's setting the stage for the others...</span></h3>