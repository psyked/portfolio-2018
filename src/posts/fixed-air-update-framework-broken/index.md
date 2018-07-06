---
path: /fixed-air-update-framework-broken/
layout: post
title: 'Fixed: AIR update framework broken!'
date: 2010-01-29T21:30:30Z
tags:
- air-update-framework
- flex-3-5-sdk
---

<img class="alignnone size-full wp-image-1161" title="broken-air-update-framework" src="http://uploads.psyked.co.uk/2010/01/broken-air-update-framework.jpg" alt="" width="500" height="280" />

<em>Arrgh!</em> All of a sudden the AIR Update Framework stops working.  No explanation, no errors; nothing. Where you'd expect to see your update notification popping up, you get a window just like the one above - no content, just the default Flex blue background colour.

The problem is actually a pretty specific one, but it's not going to fix itself.  Using the Flex 3.5 SDK and the AIR Update Framework together causes this issue - obviously some part of the Flex SDK has changed between Flex 3.4 and 3.5, and no-one tested the framework before releasing it!  The issue is fixed in Flex 4 and doesn't occur in anything other than the 3.5 SDK - so upgrading / downgrading is one solution; or...
<h3>Hack a solution:</h3>
<!--more-->Kudos to <strong>Richard Leggett</strong> for this solution; you can add an event listener for the <strong>StatusUpdateEvent.UPDATE_STATUS</strong> event, which includes this code:

<pre><code>try
{
var loader:Object = NativeApplication.nativeApplication.openedWindows[1].stage.getChildAt(0);
loader.content.application.visible = true;
}
catch(e:Error) { trace("Wait till Flex 4!"); }</code></pre>

And this will get things back and working again.
<h3>More information:</h3>
<a href="http://bugs.adobe.com/jira/browse/SDK-24766?focusedCommentId=334246&amp;page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#action_334246" target="_blank">Read the official bug report in the bug management system.</a>