webpackJsonp([82870791469202],{1189:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/imagesizer-updated-again/index.md absPath of file >>> MarkdownRemark",html:"<p>It's been a while since I've posted anything substantial, and in a sense this post isn't going to buck that trend!</p>\n<p>ImageSizer version 0.4.12.4 is <a href=\"http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&#x26;offeringid=10740&#x26;marketplaceid=1\">available on the AIR Marketplace</a> and via the automatic update framework. Much to my dismay ImageSizer version 0.4.12 went out into the wild with some showstopping bugs, and it's taken a long time for me to devote enough time to hunting them down and fixing them. Version 0.4.12.4 should finally kill off that bug - namely because I've managed to work out what it was. (I'll get to that in a moment.)</p>\n<p>If you've tried to use ImageSizer and found that it didn't work then I apologise, and encourage you to download the latest version of ImageSizer from the AIR Marketplace and give it another shot! I've improved my pre-release testing process and am in the process of refactoring the internal code - which should both stop bugs like this from occuring again and also improve the extensibility of ImageSizer and make everything faster and a little more robust!</p>\n<h3>So, what happened?</h3>\n<ul>\n<li>Version 0.4.12 changed the installation directory - which meant people who used the Automatic Update framework to upgrade had problems - source files for the application were pointing to invalid directories.  To be honest, this was flawed code that caused this issue as much as anything else.</li>\n</ul>\n<p><strong>Why it was so bad:</strong> The errors occured in the startup process of ImageSizer, and threw an Error. The Flash Player (and Adobe AIR) just stops if it encounters an error. End result - the application crashed before it loaded, and therefore did *sweet-f-a*.*   In my haste to fix this issue, I added some code to catch these loading errors.  Which unfortunately means that the Automatic Updates won't work for minor versions 0.4.12 - 0.4.12.2 (which unfortunately covers quite a few people).</p>\n<ul>\n<li>Version 0.4.12 - 0.4.12.3 have some issues with the configuration files - typos in the source code meant that they would never successfully create an application configuration file to remember users' settings, and would enter an infinate loop. (Uh oh).</li>\n</ul>\n<p><strong>Why it was so bad:</strong> Again, it was another showstopper - at least for the first run process.  The first time the application ran, it tried and failed to load a configuration file.  Unfortunately the rest of the startup process was tied to the configuration file, so again ImageSizer was never able to startup.</p>",frontmatter:{title:"ImageSizer updated! (again)",date:"July 24, 2009",tags:["imagesizer"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/how-to-post-images-to-twitpic-with-actionscript/",tags:["actionscript","twitter","twitpic"],title:"How to: Post images to TwitPic with Actionscript",date:"2009-07-05T20:22:23.000Z"}},next:{frontmatter:{path:"/blog/an-overview-of-open-source-media-framework-aka-adobe-strobe/",tags:["flash","framework","osmf"],title:"An overview of Open Source Media Framework (aka. Adobe Strobe)",date:"2009-08-12T18:47:59.000Z"}}}}}});
//# sourceMappingURL=path---blog-imagesizer-updated-again-3c34f6b8787534519700.js.map