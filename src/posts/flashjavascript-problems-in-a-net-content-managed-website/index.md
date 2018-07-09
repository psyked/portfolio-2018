---
path: /blog/flashjavascript-problems-in-a-net-content-managed-website/
layout: post
title: "(Flash/Javascript) problems in a .Net Content-Managed Website"
date: 2008-06-08T12:53:13Z
tags:
- flash
- javascript
- net
- cms
- cookies
- localstorage
- moss
---

I have been trying to figure out how to set get a session cookie from Flash via Javascript. Yes, Flash does have a limited ability to set its own 'cookies' with something called <strong>LocalStorage</strong>, but there are a few advantages to actually creating 'real' cookies and working with those - not least because people understand browser cookies a little more than LocalStorage areas.

The solution itself is pretty simple - you create a Javascript function to manipulate the cookie data, and then Flash uses the <strong>ExternalInteface.call</strong> function to access these javascript functions. If you want to go even more advanced, you can leverage getURL to create your Javascript functions in the first place - my favorate because it doesn’t need any external javascript.

( Sometime I'll clean out the code and post an example, but for now we're going to concentrate more on the problems encountered when using this solution. )

As I said, the solution is great and works in most situations however, this doesn’t work in the CMS we're using and I couldn’t figure out why. It turns that our problem was;
<h2>DOM Access</h2>
.Net pages put all the html inside a form and apparently this means that objects like embedded swfs become hidden from the Document Object Model in Internet Explorer.

The solution to this is to “elevate” the object to be part of the window rather that the document. It seems that by creating a reference and using a different element in the heirarchy fixes DOM visibility issues. i.e.
<blockquote>window.objectID = document.getElementById(objectID);</blockquote>
A strange solution, huh? Ben Waldron has more information on this solution <a href="http://blogs.popart.com/ben-waldron/archive/2007/11/08/flash-externalinterface-in-asp-net-applications.aspx" target="_blank">here</a>.