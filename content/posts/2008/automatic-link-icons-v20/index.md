---
path: /blog/automatic-link-icons-v20/
layout: post
title: Automatic Link Icons v2.0
date: 2008-01-08T20:20:05Z
tags:
  - css
  - external-links
  - javascript
  - icons
---

Wow. My previous post, [Auto-matic Link Icons](/css/auto-matic-link-icons.htm 'Open link in the same window') is by far the most popular on Psyked. It's even been [translated into Russian!](http://blog.bagg.spb.ru/2007/11/148/ 'Open link in a new window') Things are constantly evolving, and I thought it only suitable that I should expand upon the original with a few new ideas, techniques and general improvements. So, without further ado:

**Improving the Icon Display;**

In the original post, I put forward the following code for adding link icons;

> `a[href$='.pdf'] { display:inline-block; padding-left:20px; line-height:18px; background:transparent url(Images/PDFIcon.gif) center left no-repeat; }`

The code is ok, but it's a little temprimental when you come to using it on small fonts. It seems that setting a line-height property just doesn't cut it where most browsers are concerned, and your icons can get cropped if they're bigger than the height of your characters. Let's adjust this a bit, to ensure that we don't have our icons cropped by the line-heights...

> `a[href$='.pdf'] { display:inline-block; **padding:2px 0px 2px 20px;** line-height:18px; **min-height:18px; overflow:visible;** background:transparent url(Images/PDFIcon.gif) center left no-repeat; }`

That's much more cross-browser consistant, although it's one that might need a little tweaking, depending on your overall layout.

**Dealing with incompatible browsers;**

There's not much CSS can do on its' own for the browsers that don't understand it.

And that, in itself, is part of the beauty of this method. Quite unusually for CSS, if something in this example is incompatible with the browser, its' unlikely to throw other things out of alignment. _However,_ help is there for those with diligence. You can quite easily expand your selectors to include a class, so that icons can be manually applied (or un-applied) to links. Thus;

> `a[href$='.pdf']**, .pdflink** { display:inline-block; padding:2px 0px 2px 20px; line-height:18px; min-height:18px; overflow:visible; background:transparent url(Images/PDFIcon.gif) center left no-repeat; }`

There are other ways than just CSS, however. Check out this post by Rebecca Murphey, ["Unobtrusive, cross-browser method to add icons to links"](http://blog.rebeccamurphey.com/2008/01/06/unobtrusive-cross-browser-add-filetype-icon-link-javascript-jquery/#comment-36 'Open link in a new window') \- using javascript to get the same end-result.

**More than just file types;**

Why stop at file types? A pet peeve of mine is not being able to anticipate browser behaviour once I click a link. Will I get a new window? Won't I? In the first version of this post, we touched on wikipedia-style external link signifiers. So let's expand this to react to the target attributes of links.

> `a**[target='_blank']** { display:inline-block; padding:2px 20px 2px 0px; line-height:18px; min-height:18px; overflow:visible;` `background:transparent url(Images/NewWindowIcon.gif) center right no-repeat; }`

**More than just link targets;**

Talking of wikipedia, wouldn't it be useful to include a little more context to your links? There's personal blogs, there's company websites, reference sites and there's search engines. If you're linking to an article at wikipedia the information is likely to be a very different style to a personal blog. And both those articles are going to be directly more useful than a page of search results. So why not include the target websites' logo? Or perhaps come up with some generic 'classification' icons to accompany your links? A collection of the favicons of several core websites could be a good idea. But then it could get out of hand.

Anyway, this technique would be little different than that for 'absolute' links, except that we are specifying more of the complete url;

> `a[href^="http://**en.wikipedia**"] { display:inline-block; padding:2px 20px 2px 0px; line-height:18px; min-height:18px; overflow:visible;` `background:transparent url(Images/WikiIcon.gif) center right no-repeat;` }

What you include special icons for is up to you. Wikipedia is an obvious choice, and so are the most visited sites, like search engines, social network sites, online shops, and journals. This idea requires hard graft rather than offering a unilateral CSS solution. I suggest picking the sites important to your website and going with them. You've got some decision making to do on this one. I'd love to be able to autogenerate urls based on the link attributes but - so far as I can tell - that's beyond CSS at the moment. Perhaps this calls for some server scripting?

**More than networking;**

What else is there? Well, we haven't even looked at [Microformats](http://microformats.org 'Open link in a new window') or '_rel_' attributes yet. True, some things like rel-nofollow can be utterly useless to the user, but _hCard_ links can be. Then there's trackback links, bookmarks, rss feeds, practically anything. The format is all pretty similar;

> `a**[rel='bookmark']** { display:inline-block; padding:2px 20px 2px 0px; line-height:18px; min-height:18px; overflow:visible;` `background:transparent url(Images/BookmarkIcon.gif) center right no-repeat; }`

**Putting it all together;**

One of the difficult things about CSS when you're doing this, is working out the inheritance models for your links. Things at the end of your CSS file will override those at the top, so be wary how you organise your links. This is unfortunately the point where you can come up against the brick wall that is the limitations of CSS. Sofar as I know, there's no way of using multiple selectors - say for instance, external links _and_ new windows - it's a case of either-or.

**External links / More...**

Since I started writing this post, I've found a few other good examples online - none of which I knew about before I started (darn!)

- Alexander Kaiser has a similar implimentation to what I've mentioned here, but with working examples and a downloadable version. Have a look at ["Iconize Textlinks with CSS."](http://pooliestudios.com/projects/iconize/ 'Open link in a new window')
- The CSS Guy kickstarted this idea a while ago, with his post ["Showing Hyperlink Cues with CSS"](http://www.askthecssguy.com/2006/12/showing_hyperlink_cues_with_cs_1.html 'Open link in a new window')
- And Rebecca Murphey has an example of achieving the same effect using javascript with her post, ["Unobtrusive, cross-browser method to add icons to links"](http://blog.rebeccamurphey.com/2008/01/06/unobtrusive-cross-browser-add-filetype-icon-link-javascript-jquery/#comment-36 'Open link in a new window')
