webpackJsonp([0xcdb087cc1071],{1088:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/automating-tasks-in-flex-builder-with-the-help-of-a-little-something-called-ant/index.md absPath of file >>> MarkdownRemark",html:'<p>One of the great things about Flex Builder is that it\'s developed on top of the already existing <a href="http://www.eclipse.org/">Eclipse IDE</a>, and is itself just one of many uses the Eclipse project is put to.  Which means that many of the things you may want to do in your projects have already been explored by others.  One such thing is automated tasks.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/anttasks-af4c7f4776d14aa152191bb09f212b8f-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYCAwQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAHXRPluWAWRv//EABsQAQACAgMAAAAAAAAAAAAAAAECAwASBBMh/9oACAEBAAEFArttOOs5p7ZJMbZj2zz/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEn/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BV//EABwQAAEDBQAAAAAAAAAAAAAAAAAhIjIBAhARUf/aAAgBAQAGPwJq9Gwwgl2idT//xAAdEAACAgIDAQAAAAAAAAAAAAAAAREhQWExUYGR/9oACAEBAAE/IX4sJploZW21Z0dwh00eE0Y2qG139T//2gAMAwEAAgADAAAAEAvP/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEx/9oACAEDAQE/EMI//8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/EDU//8QAHBABAAIDAAMAAAAAAAAAAAAAAQARITFxUbHB/9oACAEBAAE/EHB2Q2vAPsRSEKtDHXEp2RcsI3gx04LknpEih7n/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ANT Tasks in Flex"\n        title=""\n        src="/static/anttasks-af4c7f4776d14aa152191bb09f212b8f-e8574.jpg"\n        srcset="/static/anttasks-af4c7f4776d14aa152191bb09f212b8f-c94d9.jpg 158w,\n/static/anttasks-af4c7f4776d14aa152191bb09f212b8f-9885b.jpg 315w,\n/static/anttasks-af4c7f4776d14aa152191bb09f212b8f-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Turns out there\'s something called <a href="http://ant.apache.org/faq.html#what-is-ant">ANT</a>, which "[... does a really good job at building things]".  As Eclipse is the basis for Flex Builder, a lot of the plugins for Eclipse - and all the variants of it - work just fine in Flex Builder.  There\'s a plugin for Eclipse which adds ANT support for example, and then further plugins which add even more task types to ANT, such as FTP support.</p>\n<h3>What do you use ANT for?</h3>\n<p>I’ve been working out how to use ANT as part of the build process for a few projects we have on the go at the moment.  Prior to using ANT tasks the process of publishing projects was convoluted and a little tedious, with room for human error.  It involved things like publishing the Flex project, then remembering to copy all of the associated files that Flex doesn’t know about (or won’t copy for me) into the correct locations, then manually uploading those files to a webserver - all of which I\'d rather not have to worry about.</p>\n<p>With the help of a bit of Googling I\'ve managed to get all of the 4-step publishing process down into a single set of ANT tasks, which I can execute in a single click and just let it do its thing - publishing, copying, uploading, all on its own.  If I can figure it out(!), you can even generate documentation, auto-increment build numbers, generate code, and even sync things with source control.</p>\n<p>Ok, so I haven\'t quite got the latter stuff worked out yet, but the time and hassle saved being able to automate my publishing and uploading processes has already paid of the time invested to understand ANT tasks.</p>\n<h3>The lowdown;</h3>\n<p>ANT is:</p>\n<ul>\n<li>A \'language\' for defining and chaining a series of tasks together.</li>\n<li>XML-based - all of the tasks are stored in XML in a build file.  These roughly correspond to an XML representation of command-line style instructions.</li>\n<li>Has a number of simple operations supported - such as copying files, find &#x26; replace, but can also execute command-line instructions or be extended to support additional tasks (like FTP transfers).</li>\n</ul>\n<h3>Links;</h3>\n<p>Here’s a couple of useful links on how you can use ANT in conjunction with Flex Builder;</p>\n<ul>\n<li><a href="http://www.slideshare.net/dctrl/deploy-flex-with-apache-ant-presentation">http://www.slideshare.net/dctrl/deploy-flex-with-apache-ant-presentation</a></li>\n<li><a href="http://dispatchevent.org/mims/ant-for-flex-part-1/">http://dispatchevent.org/mims/ant-for-flex-part-1/</a></li>\n</ul>\n<p>I\'ve misplaced my bookmarks for the rest, but I\'ll find them and post them when I can.  In the meantime, Google will serve as the path to enlightenment for those ready to walk the path...</p>',frontmatter:{title:"Automating tasks in Flex Builder, with the help of a little something called 'ANT'.",date:"December 04, 2009",tags:["flex","ant","eclipse","flex-builder","ftp"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/targeting-multiple-browsers-with-css-and-some-javascript-trickery/",tags:["css","javascript"],title:"Targeting multiple browsers with CSS... and some Javascript trickery.",date:"2009-11-28T08:00:19.000Z"}},next:{frontmatter:{path:"/blog/the-flash-platform-in-your-tv/",tags:["flash-platform","open-screen-project","youtube"],title:"The Flash Platform in your TV?",date:"2009-12-10T08:36:18.000Z"}}}}}});
//# sourceMappingURL=path---blog-automating-tasks-in-flex-builder-with-the-help-of-a-little-something-called-ant-1b44e0cc2c079f736420.js.map