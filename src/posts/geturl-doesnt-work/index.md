---
path: /geturl-doesnt-work/
layout: post
title: '"getURL doesn''t work!"'
date: 2007-10-01T12:47:17Z
tags:
- actionscript
- flash
- tips
---

Ever used <strong>getURL();</strong> for loading new pages in Flash? That's how you load a new page. Obvious, huh?

In 97% of situations it works fine. The other 3% it doesn't* I've had a rough ride with getURL unexplicably not functioning. Turns out that it works if you omit target parameter of the function call, it works. Remember that next time you get stuck...

<span class="date">* Please note, statistics are made up on the spot.</span>