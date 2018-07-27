webpackJsonp([0x92e591d37a67],{1096:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/demo-source-simple-box2d-with-curved-edges/index.md absPath of file >>> MarkdownRemark",html:'<p> [kml_flashembed movie="<a href="http://uploads.psyked.co.uk/2010/01/CurvedShapeExample.swf">http://uploads.psyked.co.uk/2010/01/CurvedShapeExample.swf</a>" height="280" width="500" /]</p>\n<p>(The image above this text is actually the Flash movie, if you hadn\'t guessed.  Try using your mouse to interact.  If it\'s blank, then something\'s gone wrong!)</p>\n<p>I\'ve been busy working on my Box2D classes again. (As before <a href="http://www.psyked.co.uk/actionscript/simplifying-box2das3.htm">here</a> and <a href="http://www.psyked.co.uk/box2d/simple-box2d-custom-polygon-creation.htm">here</a>.)  I\'m not quite ready to go through the code with some tutorials yet, but you can <a href="http://uploads.psyked.co.uk/2010/01/simplebox2d_demo_100113.zip">download the source for this demo here</a>.  This version has had a bit more of a proper code cleanup - I\'ve un-hacked some hacks I did earlier in development, and added a few more utility functions, but most importantly this version supports SWF library asset importing of multiple shapes, and shapes with curved edges (which it couldn\'t do previously).</p>\n<p>I feel like I should put that in bold or something, because it\'s probably my most-clever bit of code to date.  I\'m going to settle for saying it twice though: You can import library objects with multiple shapes, and shapes with curved and straight edges.  Have a look at the screenshot below and compare it with the Box2D display;</p>\n<p><strong>In Flash IDE:</strong></p>\n<p><strong>[\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/flashview-66a70ea8778952b727ef42da9aec5277-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHXWqpMBf/EABoQAQACAwEAAAAAAAAAAAAAAAERMQASMkH/2gAIAQEAAQUCgx1grx5K/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAARBxAP/aAAgBAQAGPwLGMxf/xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMUFxkf/aAAgBAQABPyHEWvsGAq2TM0ThCW0XaaOp/9oADAMBAAIAAwAAABD3z//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/EKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMbFRof/aAAgBAQABPxDPls3cICjJS2wN8lrL2DDzMBshDAgUMuGfC5P/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="flashview"\n        title=""\n        src="/static/flashview-66a70ea8778952b727ef42da9aec5277-e8574.jpg"\n        srcset="/static/flashview-66a70ea8778952b727ef42da9aec5277-c94d9.jpg 158w,\n/static/flashview-66a70ea8778952b727ef42da9aec5277-9885b.jpg 315w,\n/static/flashview-66a70ea8778952b727ef42da9aec5277-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </strong></p>\n<p><strong>In Box2D:</strong></p>\n<p><strong>[\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/box2dview-a80bd63bfed1a107686ca3136d79c093-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAcByxkh//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAQABBQIg1GXP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRABAQEAAwAAAAAAAAAAAAAAAREAITFB/9oACAEBAAE/IfOMo7tzS1who5Vat3//2gAMAwEAAgADAAAAEOvP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEh/9oACAECAQE/EMV//8QAGxABAAMAAwEAAAAAAAAAAAAAAQARMSFBUWH/2gAIAQEAAT8QpbpU0rJYlSBA5uXAuDBAgoO/ZZgPsdKT2z//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="box2dview"\n        title=""\n        src="/static/box2dview-a80bd63bfed1a107686ca3136d79c093-e8574.jpg"\n        srcset="/static/box2dview-a80bd63bfed1a107686ca3136d79c093-c94d9.jpg 158w,\n/static/box2dview-a80bd63bfed1a107686ca3136d79c093-9885b.jpg 315w,\n/static/box2dview-a80bd63bfed1a107686ca3136d79c093-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </strong></p>\n<p>You can <a href="http://uploads.psyked.co.uk/2010/01/simplebox2d_demo_100113.zip">download the source for this demo here</a>.</p>\n<p>I\'m going to get this as a project on some publicly-available source repository soon.  I\'d love to hear feedback on it now though!</p>',frontmatter:{title:"Demo & Source: Simple Box2D, with curved edges!",date:"January 13, 2010",tags:["box2d","actionscript"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/simple-box2d-custom-polygon-creation/",tags:["actionscript","box2d"],title:"Simple Box2D - Custom Polygon creation.",date:"2010-01-11T08:09:33.000Z"}},next:{frontmatter:{path:"/blog/link-computer-mind-control-with-actionscript-3-0/",tags:["actionscript","bci","mind-control"],title:"Link: Computer mind control with ActionScript 3.0",date:"2010-01-20T08:30:32.000Z"}}}}}});
//# sourceMappingURL=path---blog-demo-source-simple-box-2-d-with-curved-edges-6013a4c600969afe5a79.js.map