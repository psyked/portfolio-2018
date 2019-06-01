---
path: /blog/fixed-mx-accessibilitylabelaccimpl-could-not-be-found/
layout: post
title: 'Fixed: mx.accessibility:LabelAccImpl could not be found.'
date: 2010-06-21T21:47:21Z
tags:
- flex
- air
- problems
---

![](/content/images/2010/06/flash-error.jpg "Flash Builder Error") 

This came up while converting a Flex 3 AIR project to a Flex 4 AIR project. 

Luckily, the solution is all in the publish settings. Uncheck the box which says 'Generate accessible SWF file' and the error will go away. 

![](/content/images/2010/06/flex-publish-options.jpg "Flash Builder Publish options") 

Simple!