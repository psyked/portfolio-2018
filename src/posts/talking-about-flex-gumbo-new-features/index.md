---
path: /talking-about-flex-gumbo-new-features/
layout: post
title: 'Talking about: Flex Gumbo - new features'
date: 2009-04-06T08:15:52Z
tags:
- flex
- flex-4
- gumbo
---

After seeing <a href="http://www.ashorten.com/" target="_blank">Andrew Shorten's</a> presentation on Flex 4 (Gumbo) and Flash Catalyst at <a href="http://www.flashmidlands.com/" target="_blank">#FlashMidlands</a> this weekend, I thought it would be a good time to post a few Flex 4 links and a few thoughts.

Flex 4 is looking exciting - Flex is one helluva good tool anyway, so the step from the Flash IDE to Flex builder that I experienced is hard to top when going from Flex 3 to Flex 4, but there are a few nice features that I remember from the presentation. <em>[Note - this is all done from memory, so please correct me if I've said anything incorrect.]</em>

<em><img class="alignnone size-full wp-image-844" title="Flex 4" src="http://uploads.psyked.co.uk/2009/04/flex4.jpg" alt="Flex 4" width="500" height="280" /></em>
<h3>Remote services - autogeneration of data models.</h3>
Flex 4 has a whole load of new wizard-type processes for automatically generating classes and data models for remote services, using a combination of introspection and descriptors.  Livecycle and PHP are the main (most widely supported) languages for this, but it will also work for webservices or httpservices written in any language, such as ASP.Net.

Data models are basically classes in actionscript that represent objects stored in other places/locations.  I spent days putting together data models manually for my side-project on the Unfuddle API, so to hear that Flex 4 can autogenerate these is really cool (and slightly disheartening).
<!--more-->
<h3>Flash CS4 support</h3>
Another biggie as far as my workflow is concerned - Flash CS4 and Flex play well together.  Both in terms of the display of custom Flash components in the Design view, and also for switching between Flex and Flash - there's gonna be a button for moving between the two really easily.
<h3>Event handler autogeneration</h3>
Not a massive change, but Flex 4 can now generate event handler functions.  Instead of having to create your function when you create or setup an event listener, Flex 4 can generate these functions for you, just like it autocompletes your function or variable names.
<h3>Declarative graphics</h3>
Degrafa might have started this, it might not - but it certainly looks like it's been the inspiration for this feature.  Using MXML, you can now define graphics - shapes, strokes and fills.  It integrates closely with Flash Catalyst, and its nice to see community initiated projects like Degrafa being brought into the overall Flex product.
<h3>Unit testing, Network monitor</h3>
<a href="http://opensource.adobe.com/wiki/display/flexunit/FlexUnit" target="_blank">FlexUnit</a> is going to be part of Flex 4, as is a new Network Monitor panel - both debugging, testing and optimization features for Flex professional. Network monitor, as you might expect, monitors and reports the network connections that your Flex project makes and records the data sent and recieved so you can get a better picture of what's going on.
<h2>What they didn't get right...</h2>
<h3>Templates</h3>
Templates, templates templates.  Project templates are being introduced, but so far it just seems like you can customise the default template - not actually create and manage multiple project templates.  Dropped the ball there - multiple custom project templates could have been such a great feature...
<h2>Flex 4 resources</h2>
Flex 4 is due for release in the latter quarter of this year.  Nothing specific, of course.  You can get hold of a work-in-progress version of Flex 4 from the Adobe opensource site, and find a few more resources here;
<ul>
	<li>Adobe Opensource - Flex SDK: <a href="http://opensource.adobe.com/wiki/display/flexsdk/Gumbo" target="_blank">http://opensource.adobe.com/wiki/display/flexsdk/Gumbo</a></li>
	<li>Flex Gumbo Language reference: <a href="http://livedocs.adobe.com/flex/gumbo/langref/" target="_blank">http://livedocs.adobe.com/flex/gumbo/langref/</a></li>
</ul>