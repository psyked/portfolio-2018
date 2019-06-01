---
path: /blog/tracking-flash-flex-air-applications-with-google-analytics/
layout: post
title: Tracking Flash / Flex / AIR applications with Google Analytics
date: 2009-06-24T08:45:31Z
tags:
- flash
- flex
- air
- google
- google-analytics
---

In case you weren't aware, a lot of the stuff you can do in a website you can also do in the Flash Player.  Prime example: Google Analytics tracking.

Now for a simple Flash movie, you'd traditionally host the Flash file in an external website, and add the tracking to the HTML pages.  If you're doing something a little more different - or are obsessive about knowing how your users are interacting with the content - you might be interested to know that there is support for actionscript-initiated tracking, and that it's supported by Google themselves (a good sign).

You can read all about the Google Analytics tracking component for Flash on the Google code website: [http://code.google.com/apis/analytics/docs/tracking/flashTrackingIntro.html](http://code.google.com/apis/analytics/docs/tracking/flashTrackingIntro.html)

Where this really comes into its own is in AIR applications.  Flash / Flex tracking in a HTML website isn't really all that special - once you know the API a little, you can always use the ExternalInterface commands in the Flash Player to communicate with javascript functions on the host page, but that kind of option isn't usually available to a pure Flash-based AIR application.  Using the component effectively removes the need for the external javascript file, and means that your desktop AIR application can communicate freely with Google Analytics - enabling application tracking.  The code is no different whether its an online Flash webpage, or a desktop AIR application.