---
path: /blog/executing-multiple-xmlhttprequests-successfully/
layout: post
title: Executing multiple XMLHTTPRequests - successfully.
date: 2008-12-03T12:15:30Z
tags:
- javascript
- ajax
- xmlhttprequest
---

So I'm hacking together a simple client-side AJAX - based on [AHAH](http://en.wikipedia.org/wiki/AHAH) \- and all of the example scripts only work with a single request.  Attempting to use the same script twice meant that the results would overwrite each other.  Ughh.

The problem it turned out, was as a simple as the latter requests replacing the newer request, because their references were being overwritten.  So instead of using a single variable, I figured "why not pass the references around in the functions".  Here it is then, an AHAH-based set of AJAX functions, that works for multiple simultaneous function calls.

    function loadExternalContentDone(req, url, target) {
        if (req.readyState == 4) { 
            if (req.status == 200) { 
                document.getElementById(target).innerHTML = req.responseText;
            } else {
                document.getElementById(target).innerHTML=" loadExternalContent Error:\n"+ req.status + "\n" +req.statusText;
            }
        }
    }
    function loadExternalContent(url, target) {
        var req;
        document.getElementById(target).innerHTML = ' Fetching data...';
        if (window.XMLHttpRequest) {
            req = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            req = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (req !== undefined) {
            req.onreadystatechange = function() {loadExternalContentDone(req, url, target);};
            req.open("GET", url, true);
            req.send("");
        }
    }
    function loadContent(name, div) {
        loadExternalContent(name,div);
        return false;
    }