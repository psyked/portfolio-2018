webpackJsonp([0xb10580c04fa2],{1179:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/identifying-link-targets-with-css/index.md absPath of file >>> MarkdownRemark",html:"<p>So, you have links that open in new windows, and links that open in parent windows. Inconsistant behaviour is the primary usability nightmare, and your standard web browser doesn't give you any feedback on <em>just what</em> is going to happen once you click that link. Popups galore? or damn-I-was-reading-that syndrome? If only there was some visual clue we could give about those pesky link behaviours.</p>\n<p>Well, this isn't something I've seen anyone do yet, but technically it should be possible. What we should be able to do is transport the same techniques we use for detecting file types - ie. the CSS 2.1 attribute selectors - and link them to the target attribute. Thankfully, this should be a pretty short bit of code, as there's only really four target options that anyone uses anyway. These would be '_blank', '_self', '_top' or '_parent'. So, working on our existing knowledge of detecting link file-types, we simply add the code;</p>\n<pre><code>a\\[target='_blank'\\]\n</code></pre>\n<p>... and we should now be able to automatically attach icons to those links that target a new browser window. (_parent, _self, and _top nearly always open links in exactly the same window) Links to other websites already have a standard icon - pretty much set by wikipedia - but it's not often that target-based links are seen, so there's not much of a standard. Or is there?</p>\n<p>Sitepoint has a short article on the problem of link targets - '<a href=\"http://www.sitepoint.com/article/beware-opening-links-new-window\" title=\"Open link in a new window\">Beware of Opening Links in a New Window</a>' and also has a pretty simple icon to use for new windows. Perfect! Just like internal links don't have an icon, and external ones do, so only links that open a new browser window should need this icon. Save the icon to your webserver, add your new CSS, and you're away.</p>",frontmatter:{title:"Identifying link targets with CSS",date:"December 05, 2007",tags:["css","icons"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/pimp-my-pc-improving-the-look-feel-and-general-efficiency/",tags:["downloadable-applications","performance-upgrades","windows-themes"],title:"Pimp My PC - Improving the look, feel and general efficiency",date:"2007-12-02T18:59:29.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/christmas-games-online-downloadable/",tags:["external-links","flash","christmas-games","mdm-zinc"],title:"Christmas Games – Online & Downloadable",date:"2007-12-17T11:30:52.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-identifying-link-targets-with-css-5ed0a9ccbe12e0c78942.js.map