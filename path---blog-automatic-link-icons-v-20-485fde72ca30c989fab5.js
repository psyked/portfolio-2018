webpackJsonp([0x686606ed196d],{1086:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/automatic-link-icons-v20/index.md absPath of file >>> MarkdownRemark",html:"<p>Wow. My previous post, <a href=\"/css/auto-matic-link-icons.htm\" title=\"Open link in the same window\">Auto-matic Link Icons</a> is by far the most popular on Psyked. It's even been <a href=\"http://blog.bagg.spb.ru/2007/11/148/\" title=\"Open link in a new window\">translated into Russian!</a> Things are constantly evolving, and I thought it only suitable that I should expand upon the original with a few new ideas, techniques and general improvements. So, without further ado:</p>\n<p><strong>Improving the Icon Display;</strong></p>\n<p>In the original post, I put forward the following code for adding link icons;</p>\n<blockquote>\n<p><code>a[href$='.pdf'] { display:inline-block; padding-left:20px; line-height:18px; background:transparent url(Images/PDFIcon.gif) center left no-repeat; }</code></p>\n</blockquote>\n<p>The code is ok, but it's a little temprimental when you come to using it on small fonts. It seems that setting a line-height property just doesn't cut it where most browsers are concerned, and your icons can get cropped if they're bigger than the height of your characters. Let's adjust this a bit, to ensure that we don't have our icons cropped by the line-heights...</p>\n<blockquote>\n<p><code>a[href$='.pdf'] { display:inline-block; **padding:2px 0px 2px 20px;** line-height:18px; **min-height:18px; overflow:visible;** background:transparent url(Images/PDFIcon.gif) center left no-repeat; }</code></p>\n</blockquote>\n<p>That's much more cross-browser consistant, although it's one that might need a little tweaking, depending on your overall layout.</p>\n<p><strong>Dealing with incompatible browsers;</strong></p>\n<p>There's not much CSS can do on its' own for the browsers that don't understand it.</p>\n<p>And that, in itself, is part of the beauty of this method. Quite unusually for CSS, if something in this example is incompatible with the browser, its' unlikely to throw other things out of alignment. <em>However,</em> help is there for those with diligence. You can quite easily expand your selectors to include a class, so that icons can be manually applied (or un-applied) to links. Thus;</p>\n<blockquote>\n<p><code>a[href$='.pdf']**, .pdflink** { display:inline-block; padding:2px 0px 2px 20px; line-height:18px; min-height:18px; overflow:visible; background:transparent url(Images/PDFIcon.gif) center left no-repeat; }</code></p>\n</blockquote>\n<p>There are other ways than just CSS, however. Check out this post by Rebecca Murphey, <a href=\"http://blog.rebeccamurphey.com/2008/01/06/unobtrusive-cross-browser-add-filetype-icon-link-javascript-jquery/#comment-36\" title=\"Open link in a new window\">\"Unobtrusive, cross-browser method to add icons to links\"</a> - using javascript to get the same end-result.</p>\n<p><strong>More than just file types;</strong></p>\n<p>Why stop at file types? A pet peeve of mine is not being able to anticipate browser behaviour once I click a link. Will I get a new window? Won't I? In the first version of this post, we touched on wikipedia-style external link signifiers. So let's expand this to react to the target attributes of links.</p>\n<blockquote>\n<p><code>a**[target='_blank']** { display:inline-block; padding:2px 20px 2px 0px; line-height:18px; min-height:18px; overflow:visible;</code> <code>background:transparent url(Images/NewWindowIcon.gif) center right no-repeat; }</code></p>\n</blockquote>\n<p><strong>More than just link targets;</strong></p>\n<p>Talking of wikipedia, wouldn't it be useful to include a little more context to your links? There's personal blogs, there's company websites, reference sites and there's search engines. If you're linking to an article at wikipedia the information is likely to be a very different style to a personal blog. And both those articles are going to be directly more useful than a page of search results. So why not include the target websites' logo? Or perhaps come up with some generic 'classification' icons to accompany your links? A collection of the favicons of several core websites could be a good idea. But then it could get out of hand.</p>\n<p>Anyway, this technique would be little different than that for 'absolute' links, except that we are specifying more of the complete url;</p>\n<blockquote>\n<p><code>a[href^=\"http://**en.wikipedia**\"] { display:inline-block; padding:2px 20px 2px 0px; line-height:18px; min-height:18px; overflow:visible;</code> <code>background:transparent url(Images/WikiIcon.gif) center right no-repeat;</code> }</p>\n</blockquote>\n<p>What you include special icons for is up to you. Wikipedia is an obvious choice, and so are the most visited sites, like search engines, social network sites, online shops, and journals. This idea requires hard graft rather than offering a unilateral CSS solution. I suggest picking the sites important to your website and going with them. You've got some decision making to do on this one. I'd love to be able to autogenerate urls based on the link attributes but - so far as I can tell - that's beyond CSS at the moment. Perhaps this calls for some server scripting?</p>\n<p><strong>More than networking;</strong></p>\n<p>What else is there? Well, we haven't even looked at <a href=\"http://microformats.org\" title=\"Open link in a new window\">Microformats</a> or '<em>rel</em>' attributes yet. True, some things like rel-nofollow can be utterly useless to the user, but <em>hCard</em> links can be. Then there's trackback links, bookmarks, rss feeds, practically anything. The format is all pretty similar;</p>\n<blockquote>\n<p><code>a**[rel='bookmark']** { display:inline-block; padding:2px 20px 2px 0px; line-height:18px; min-height:18px; overflow:visible;</code> <code>background:transparent url(Images/BookmarkIcon.gif) center right no-repeat; }</code></p>\n</blockquote>\n<p><strong>Putting it all together;</strong></p>\n<p>One of the difficult things about CSS when you're doing this, is working out the inheritance models for your links. Things at the end of your CSS file will override those at the top, so be wary how you organise your links. This is unfortunately the point where you can come up against the brick wall that is the limitations of CSS. Sofar as I know, there's no way of using multiple selectors - say for instance, external links <em>and</em> new windows - it's a case of either-or.</p>\n<p><strong>External links / More...</strong></p>\n<p>Since I started writing this post, I've found a few other good examples online - none of which I knew about before I started (darn!)</p>\n<ul>\n<li>Alexander Kaiser has a similar implimentation to what I've mentioned here, but with working examples and a downloadable version. Have a look at <a href=\"http://pooliestudios.com/projects/iconize/\" title=\"Open link in a new window\">\"Iconize Textlinks with CSS.\"</a></li>\n<li>The CSS Guy kickstarted this idea a while ago, with his post <a href=\"http://www.askthecssguy.com/2006/12/showing_hyperlink_cues_with_cs_1.html\" title=\"Open link in a new window\">\"Showing Hyperlink Cues with CSS\"</a></li>\n<li>And Rebecca Murphey has an example of achieving the same effect using javascript with her post, <a href=\"http://blog.rebeccamurphey.com/2008/01/06/unobtrusive-cross-browser-add-filetype-icon-link-javascript-jquery/#comment-36\" title=\"Open link in a new window\">\"Unobtrusive, cross-browser method to add icons to links\"</a></li>\n</ul>",frontmatter:{title:"Automatic Link Icons v2.0",date:"January 08, 2008",tags:["css","external-links","javascript","icons"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/christmas-games-online-downloadable/",tags:["external-links","flash","christmas-games","mdm-zinc"],title:"Christmas Games – Online & Downloadable",image:null,date:"2007-12-17T11:30:52.000Z"}},next:{frontmatter:{path:"/blog/getting-started-with-ajax-prototype/",tags:["external-links","javascript","ajax","prototype","wordpress-plugins"],title:"Getting started with AJAX / Prototype",image:null,date:"2008-01-28T00:40:01.000Z"}}}}}});
//# sourceMappingURL=path---blog-automatic-link-icons-v-20-485fde72ca30c989fab5.js.map