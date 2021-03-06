---
path: /blog/actionscript-geturl-vs-externalinterface-when-why/
layout: post
title: 'ActionScript: getURL vs. ExternalInterface - When & Why'
date: 2007-09-23T09:37:31Z
tags:
- actionscript
- javascript
---

This post all stems from a project I've been working on very recently, making a drop-down menu in flash, that sits in a HTML page. _**What we're talking in relation to here is, getting flash to execute JavaScript DOM functions.**_

Now, there are couple of ways for Flash to interact with its host page. The first one that springs to mind is [getURL()](http://livedocs.adobe.com/flash/8/main/wwhelp/wwhimpl/common/html/wwhelp.htm?context=LiveDocs_Parts&file=00001730.html "Open link in a new window"), the same function that enables flash to load webpages. The second requires a little more preparation, and is [ExternalInterface.call()](http://livedocs.adobe.com/flash/8/main/wwhelp/wwhimpl/common/html/wwhelp.htm?context=LiveDocs_Parts&file=00002200.html "Open link in a new window"). Both have an upside and both a downside. One's old-school and one's new-school. There are however, real reasons why you should use one instead of the other in different situations.

### getURL

*   getURL takes advantage of the abilities of your browser. After all, http: isn't the only thing your browser can do. You can (amongst other things) call javascript directly. So, instead of passing a new url through the getURL function, you could pass a javascript function, which would execute on the page. You could, theoretically, pass an entire javascript function as a single string, and execute javascript on your html page - without the function existing in the html.
*   The downside to this is that getURL overrides anything the browser is trying to execute. So, if you've got a stack of javascript functions that are executing, getURL will effectively kill them. - Once flash executes the getURL function, kiss your other functions goodbye.

### ExternalInterface

*   ExternalInterface is an ActionScript 2 'gateway' for JavaScript / ActionScript communication. As well as it's ability for two-way communication, ExternalInterface doesn't kill off other scripts running in the browser.
*   The downside, from a flexibility point-of-view is that ExternalInterface can only call existing functions in either language, it can't create them on the fly. Which is more secure, I suppose.

### So, to summarise:

**getURL:** Kills running scripts, but doesn't need a named function to exist

**ExternalInterface:** Doesn't kill running scripts, but does need a named function to exist