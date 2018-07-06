---
path: /executing-multiple-xmlhttprequests-successfully/
layout: post
title: Executing multiple XMLHTTPRequests - successfully.
date: 2008-12-03T12:15:30Z
tags:
- javascript
- ajax
- xmlhttprequest
---

So I'm hacking together a simple client-side AJAX - based on <a href="http://en.wikipedia.org/wiki/AHAH" target="_blank">AHAH</a> - and all of the example scripts only work with a single request.  Attempting to use the same script twice meant that the results would overwrite each other.  Ughh.

The problem it turned out, was as a simple as the latter requests replacing the newer request, because their references were being overwritten.  So instead of using a single variable, I figured "why not pass the references around in the functions".  Here it is then, an AHAH-based set of AJAX functions, that works for multiple simultaneous function calls.

Source code doesn't really work very well in my blog template, so I've put the functions in an external javascript file...

<a href="http://uploads.psyked.co.uk/2008/12/loadexternalcontent.js">Click here to download the javascript file.</a>