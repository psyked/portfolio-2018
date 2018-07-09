---
path: /blog/resize-multiple-images-and-package-them-for-e-mail-transmission-introducing-imagesizer/
layout: post
title: Resize multiple images and package them for e-mail transmission - introducing
  ImageSizer!
date: 2008-12-02T11:45:30Z
tags:
- imagesizer
- air
- fzip
---

Or should I say, <em>finally </em>introducing ImageSizer.  If you've been here previously in the last couple of weeks, you might have noticed that a couple of links to an ImageSizer application have been floating around.  Back in September (at Flash on the Beach) <a href="http://www.mmtdigital.co.uk/RVE31d5c7769e694a7cbc286c1c1b2c4fd8,,.aspx" target="_blank">Mark</a>, our far-to-clever-for-his-own-good student showed me the inital work on an application he'd been working on for a couple of days - the subtley named ImageSizer.

Two months later and I'm finally getting around to implimenting what I offered him then, that we'd post it online and see what people think.  Well, here it is.

<img class="alignnone size-full wp-image-352" title="imagesizer1" src="http://uploads.psyked.co.uk/2008/11/imagesizer1.jpg" alt="" width="500" height="378" />



You can use the AIR Install Badge to install ImageSizer, or visit the <a href="http://www.psyked.co.uk/imagesizer-air-application" target="_self">dedicated ImageSizer page.</a>
<p style="text-align: center;"><object width="215" height="180" data="/airapps/AIRInstallBadge.swf" type="application/x-shockwave-flash"><param name="flashvars" value="airversion=1.0&amp;appname=ImageSizer&amp;appurl=http://psyked.co.uk/airapps/ImageSizer039.air&amp;appid=couk.psyked.ImageSizer&amp;pubid=07510AB144CCA2FB1C33EE50283E9A7AD43F7966.1&amp;appversion=0.3.9&amp;titlecolor=#339999" /><param name="src" value="/airapps/AIRInstallBadge.swf" /></object>

ImageSizer, as <a href="http://www.psyked.co.uk/imagesizer-air-application" target="_self">Marks' explanation</a> will tell, is an AIR application, designed in Fireworks and built in Flex, and what it does is provides you with a drag-and-drop interface for adding a bunch of Photos, resizing / renaming them, and then outputting them as a .zip file whereever you want.  It was designed for enabling non-techies to take massive images off their multi-megapixel cameras, easily resize and package them for sending via e-mail.

What I really liked about the application was Marks' focus on the user interaction - not something that comes easily in an early stage prototype.  For example in the final stage of the zipping process, instead of prompting the user with a browse window to save the zip file, the application presents you with an icon, which you can drag and drop out of the application - so you don't have to work with the annoying folder structures, you can just drop the files onto your desktop, or an open explorer / finder window.

The application impliments the AIR Update Framework too, so we could see some more features being added in the future, in Marks' copious amounts of spare time...