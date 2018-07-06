---
path: /imagesizer-updated-again/
layout: post
title: ImageSizer updated! (again)
date: 2009-07-24T16:27:03Z
tags:
- imagesizer
---

It's been a while since I've posted anything substantial, and in a sense this post isn't going to buck that trend!

ImageSizer version 0.4.12.4 is <a href="http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&amp;offeringid=10740&amp;marketplaceid=1" target="_blank">available on the AIR Marketplace</a> and via the automatic update framework. Much to my dismay ImageSizer version 0.4.12 went out into the wild with some showstopping bugs, and it's taken a long time for me to devote enough time to hunting them down and fixing them. Version 0.4.12.4 should finally kill off that bug - namely because I've managed to work out what it was. (I'll get to that in a moment.)

If you've tried to use ImageSizer and found that it didn't work then I apologise, and encourage you to download the latest version of ImageSizer from the AIR Marketplace and give it another shot! I've improved my pre-release testing process and am in the process of refactoring the internal code - which should both stop bugs like this from occuring again and also improve the extensibility of ImageSizer and make everything faster and a little more robust!

<!--more-->
<h3>So, what happened?</h3>
<ul>
	<li>Version 0.4.12 changed the installation directory - which meant people who used the Automatic Update framework to upgrade had problems - source files for the application were pointing to invalid directories.  To be honest, this was flawed code that caused this issue as much as anything else.

<strong>Why it was so bad:</strong> The errors occured in the startup process of ImageSizer, and threw an Error. The Flash Player (and Adobe AIR) just stops if it encounters an error. End result - the application crashed before it loaded, and therefore did *sweet-f-a*.</li>
	<li>In my haste to fix this issue, I added some code to catch these loading errors.  Which unfortunately means that the Automatic Updates won't work for minor versions 0.4.12 - 0.4.12.2 (which unfortunately covers quite a few people).</li>
	<li>Version 0.4.12 - 0.4.12.3 have some issues with the configuration files - typos in the source code meant that they would never successfully create an application configuration file to remember users' settings, and would enter an infinate loop. (Uh oh).

<strong>Why it was so bad: </strong>Again, it was another showstopper - at least for the first run process.  The first time the application ran, it tried and failed to load a configuration file.  Unfortunately the rest of the startup process was tied to the configuration file, so again ImageSizer was never able to startup.</li>
</ul>