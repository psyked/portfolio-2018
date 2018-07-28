webpackJsonp([0x6f9f5f3d14ca],{1287:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/simplifying-box2das3/index.md absPath of file >>> MarkdownRemark",html:"<p>One of the downsides to the Box2DAS3 project - and probably one of the major hurdles to most Flash developers - is the fact that it's inherited a lot of the syntax from the C++ project that it's derived from.  Maybe it's just because we're used to it, but Actionscript is pretty easy to understand, and its methods of working pretty tolerant of inefficient coding.</p>\n<p>C++ - or whatever Box2D is written in - is not, and it's a little painful to setup and easy to break.  For my sanity as much as anyone else's I'm working on a set of classes in AS3 that wrap around the Box2DAS3 classes, and provide you with a more familiar syntax for working with Box2D - objects, methods and utilities that makes it quicker to throw things together and don't require you to rethink the way you work.</p>\n<p>Well, that's the eventual aim anyway.</p>\n<p>Here's the result of the first round of development - creating a Box2D world and adding objects, in about 6 lines of code.</p>\n<pre><code>var options:Box2DWorldOptions = new Box2DWorldOptions( 500, 280, 30, 9.8 );\n    options.setWorldEdges( true, true, true, true );\nvar world:Box2DWorld = Box2DUtils.createBoxedWorld( options );\n    world.debugDraw = true;\n    world.animateOnEnterFrame = true;\naddChild( world );\nfor ( var i:int = 0; i &#x3C; 30; i++ )\n{\n    world.createCircle( 500 * Math.random(), 280 * Math.random(), 50 * Math.random());\n}\n</code></pre>\n<p>And here's the result:</p>\n<p>[kml_flashembed movie=\"<a href=\"http://uploads.psyked.co.uk/2010/01/Box2DExperiments.swf\">http://uploads.psyked.co.uk/2010/01/Box2DExperiments.swf</a>\" height=\"280\" width=\"500\" /]</p>\n<p>Not at the point of getting any interaction, or anything more interesting yet, but I've create a utility class for creating Box2D worlds and a Box2DWorld class (as opposed to b2World, which it extends).  The aim of these classes is to condense about 40 - 60 lines of initialisation and basic scenarios into just a few lines, using default variables whilst still allowing for optional overrides.  So if you wanted a world with 0 gravity, that's just a case of changing it at the start.</p>\n<p>I'll post the classes soon - just as soon as I decide the best way to do so.  It'll all become more clear then, I hope.</p>",frontmatter:{title:"Simplifying Box2DAS3...",date:"January 08, 2010",tags:["actionscript","box2d"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/the-results-of-my-annual-code-something-different-this-christmas-idea/",tags:["actionscript","box2d"],title:'The results of my annual "code something different this Christmas" idea.',date:"2010-01-04T08:23:39.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/simple-box2d-custom-polygon-creation/",tags:["actionscript","box2d"],title:"Simple Box2D - Custom Polygon creation.",date:"2010-01-11T08:09:33.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-simplifying-box-2-das-3-fce60aeabba865c2d775.js.map