webpackJsonp([83172620235623],{1318:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/starrequests-simple-box2d-flickr-mashup-sample/index.md absPath of file >>> MarkdownRemark",html:'<p>Mark (of <a href="http://markstar.co.uk">MarkStar.co.uk</a>) has been working away on his pet project "<a href="http://markstar.co.uk/blog/category/starrequests/">StarRequests</a>" for a little while now, so I thought I\'d give it a whirl and see what he\'s come up with - and of course, what I could come up with off the back of it.  This is the result; a Flickr image loader, with a smidge of Box2D mixed in to make it all seem more interesting.</p>\n<p>[kml_flashembed movie="<a href="http://uploads.psyked.co.uk/2010/06/Main.swf">http://uploads.psyked.co.uk/2010/06/Main.swf</a>" height="560" width="500" /]</p>\n<p>All of the code for this demo, along with a few others, are available from <a href="http://github.com/psyked/StarRequests-Examples">GitHub</a>, and for those unfamiliar with GitHub, <a href="http://github.com/psyked/StarRequests-Examples/zipball/master">here\'s the Zip archive</a>. While we\'ve some time, let\'s run through some key elements of this sample:</p>\n<h2>The demo:</h2>\n<p>If you can\'t see the demo, for whatever reason, I\'ve stuck an image of it below this paragraph.  There\'s a search term box, a numeric stepper for the number of images, and a search button.  When you click \'Get images\' it performs a search on the Flickr API, which returns a list of images.  I\'m then using the StarRequests library to sequentially load the images from Flickr, and throwing them into Simple-Box2D to display them in a funky interactive way.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/starrequest-example-b4a6951ee3156d26f74903ffabd253ab-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 111.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEAf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAG33PmKmGjYwaAL/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIDABESIQQiMv/aAAgBAQABBQJzgqnJbVNsxci0Y2GldwF7+K//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAeEAACAQMFAAAAAAAAAAAAAAAAAQIQIUERIjFRYf/aAAgBAQAGPwJyE+6KODes6JKly41Hj0//xAAbEAEBAQADAQEAAAAAAAAAAAABEQAhMUFhcf/aAAgBAQABPyEYlmKbIsdGKx4UfuXjaegmUGSnTqBAjCfmRB049+84r9T1d//aAAwDAQACAAMAAAAQj8BC/8QAGREAAwADAAAAAAAAAAAAAAAAAAERECEx/9oACAEDAQE/EJq4XWRH/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAQESEx/9oACAECAQE/EM7p4RZ//8QAHBABAAIDAQEBAAAAAAAAAAAAAQARITFBYYGR/9oACAEBAAE/EH5UdXV5lo4HoLgeiYmlohUwN8ltQQ2lTdPsddMHoeMAsghrNHP2ZDihB6y47iWcu1LF+3P/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="starrequest example"\n        title=""\n        src="/static/starrequest-example-b4a6951ee3156d26f74903ffabd253ab-e8574.jpg"\n        srcset="/static/starrequest-example-b4a6951ee3156d26f74903ffabd253ab-c94d9.jpg 158w,\n/static/starrequest-example-b4a6951ee3156d26f74903ffabd253ab-9885b.jpg 315w,\n/static/starrequest-example-b4a6951ee3156d26f74903ffabd253ab-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>StarRequests</h3>\n<p>It\'s probably more of a micro-framework at the moment, but StarRequests is designed to make it easy to perform a series of actions (requests) that can be queued or batch-executed in a way that\'s portable between projects.  It\'s designed to deal with common tasks, like loading a remote URL and extracting the BitmapData, while also abstracting their inputs and outputs to make it possible to mix request types in a single queue.  And queueing is important a lot of the time, because trying to do everything simultaneously often ends with snarl-ups and complex queue management.  With a properly constructed StarRequest class, the systems you so often write and rewrite for different projects are much more portable.</p>\n<p>For this example I had to write a complete StarRequest class to load images from Flickr - and that\'s all it does - but on the plus side I didn\'t have to touch the queuing system, I now have a reusable Flickr image loader class that I can use again in the future, and I also know that elements, like the queuing system, are a solid base to work from.  There\'s more tasks going on in this example that I could extract into StarRequests format, but that\'s a task for another day.</p>\n<h3>Simple-Box2D</h3>\n<p>A little side-project of mine, <a href="http://www.psyked.co.uk/category/box2d">Simple-Box2D</a> is a set of classes that ease the learning curve between ActionScript and Box2D style code.  It\'s in dire need of some new functions, cleanup and most of all, code commenting.  Sorry about that.  All this is doing is taking the final Bitmap objects returned from the StarRequest classes, and using their dimensions as the basis for new objects in the Box2D world.</p>\n<h3>Flickr</h3>\n<p>I\'m making use of the excellent <a href="http://code.google.com/p/as3flickrlib/">as3flickrlib</a> classes to interact with Flickr, and then adding a bit of url stitching in the StarRequest classes to create the references to the actual image files (because the API doesn\'t return that data).</p>\n<p>... that\'s all folks.  Comments appreciated - I know this isn\'t much of a tutorial, I shall have to conspire with Mark and see if we can get one created.</p>',frontmatter:{title:"StarRequests, Simple-Box2D & Flickr - a example mashup.",date:"June 07, 2010",tags:["actionscript","flickr","github","simple-box2d","starrequests"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/an-incomplete-review-of-books-on-iphone-development/",tags:["external-links","books","iphone"],title:"An incomplete review of books on iPhone Development.",image:null,date:"2010-05-26T10:47:25.000Z"}},next:{frontmatter:{path:"/blog/fixed-mx-accessibilitylabelaccimpl-could-not-be-found/",tags:["flex","air","problems"],title:"Fixed: mx.accessibility:LabelAccImpl could not be found.",image:null,date:"2010-06-21T21:47:21.000Z"}}}}}});
//# sourceMappingURL=path---blog-starrequests-simple-box-2-d-flickr-mashup-sample-ada0f1ecb7dddd4fdfb2.js.map