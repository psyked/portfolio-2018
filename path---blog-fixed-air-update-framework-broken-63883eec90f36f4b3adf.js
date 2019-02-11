webpackJsonp([0xfe477b34d990],{1279:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/fixed-air-update-framework-broken/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/broken-air-update-framework-34343a40d7d7c8d7e59bc4bcfd0377da-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAED/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/9oADAMBAAIQAxAAAAHdCFRl/8QAFhABAQEAAAAAAAAAAAAAAAAAEQAg/9oACAEBAAEFAmc//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAFxAAAwEAAAAAAAAAAAAAAAAAABFRIP/aAAgBAQABPyFqNR4//9oADAMBAAIAAwAAABAA/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QbX//xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAgEBPxBH/8QAGxAAAwACAwAAAAAAAAAAAAAAAAERITFBYZH/2gAIAQEAAT8Qempwqdr0TvLdZCC0f//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="broken air update framework"\n        title=""\n        src="/static/broken-air-update-framework-34343a40d7d7c8d7e59bc4bcfd0377da-e8574.jpg"\n        srcset="/static/broken-air-update-framework-34343a40d7d7c8d7e59bc4bcfd0377da-c94d9.jpg 158w,\n/static/broken-air-update-framework-34343a40d7d7c8d7e59bc4bcfd0377da-9885b.jpg 315w,\n/static/broken-air-update-framework-34343a40d7d7c8d7e59bc4bcfd0377da-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><em>Arrgh!</em> All of a sudden the AIR Update Framework stops working.  No explanation, no errors; nothing. Where you\'d expect to see your update notification popping up, you get a window just like the one above - no content, just the default Flex blue background colour.</p>\n<p>The problem is actually a pretty specific one, but it\'s not going to fix itself.  Using the Flex 3.5 SDK and the AIR Update Framework together causes this issue - obviously some part of the Flex SDK has changed between Flex 3.4 and 3.5, and no-one tested the framework before releasing it!  The issue is fixed in Flex 4 and doesn\'t occur in anything other than the 3.5 SDK - so upgrading / downgrading is one solution; or...</p>\n<h3>Hack a solution:</h3>\n<p>Kudos to <strong>Richard Leggett</strong> for this solution; you can add an event listener for the <strong>StatusUpdateEvent.UPDATE_STATUS</strong> event, which includes this code:</p>\n<pre><code>try\n{\nvar loader:Object = NativeApplication.nativeApplication.openedWindows[1].stage.getChildAt(0);\nloader.content.application.visible = true;\n}\ncatch(e:Error) { trace("Wait till Flex 4!"); }\n</code></pre>\n<p>And this will get things back and working again.</p>\n<h3>More information:</h3>\n<p><a href="http://bugs.adobe.com/jira/browse/SDK-24766?focusedCommentId=334246&#x26;page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#action_334246">Read the official bug report in the bug management system.</a></p>',frontmatter:{title:"Fixed: AIR update framework broken!",date:"January 29, 2010",tags:["air-update-framework","flex-3-5-sdk"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/link-working-with-sqlite-in-air-using-orm/",tags:["air","flexorm","orm"],title:"Link: Working with SQLite in AIR, with the help of ORM",date:"2010-01-28T08:45:12.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/simple-box2d-better-cleverer-more-optimised/",tags:["box2d","actionscript"],title:"Simple Box2D - Better, cleverer, more optimised.",date:"2010-02-03T08:29:44.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-fixed-air-update-framework-broken-63883eec90f36f4b3adf.js.map