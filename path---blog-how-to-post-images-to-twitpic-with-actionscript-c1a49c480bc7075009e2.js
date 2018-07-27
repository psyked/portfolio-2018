webpackJsonp([0xea87a210460d],{1173:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/how-to-post-images-to-twitpic-with-actionscript/index.md absPath of file >>> MarkdownRemark",html:'<p>Uploading images to services like <a href="http://twitpic.com/">TwitPic</a> is actually as easy as sending a HTTP POST request, which means its also pretty darned simple to upload something from Flash Player 10 or AIR. This is an example for AIR, but doing something similar in Flash Player 10 should also be possible - you just need to swap the references to the File class to FileReference.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/twitpic-9c4903694d3de996690b004ad022041c-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAdVwuuWMP//EABgQAQEBAQEAAAAAAAAAAAAAAAEAEQIQ/9oACAEBAAEFAhyOnNmPP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABUQAQEAAAAAAAAAAAAAAAAAACAh/9oACAEBAAY/Aqv/xAAaEAEBAQADAQAAAAAAAAAAAAABEQAQMWGB/9oACAEBAAE/IaV6PuTTMUYCfcCcf//aAAwDAQACAAMAAAAQnO//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhUcH/2gAIAQEAAT8QSQEeifuk8V5zFSGcjZXK+40Tmh5v/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="TwitPic"\n        title=""\n        src="/static/twitpic-9c4903694d3de996690b004ad022041c-e8574.jpg"\n        srcset="/static/twitpic-9c4903694d3de996690b004ad022041c-c94d9.jpg 158w,\n/static/twitpic-9c4903694d3de996690b004ad022041c-9885b.jpg 315w,\n/static/twitpic-9c4903694d3de996690b004ad022041c-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>So, how do we get our photos on TwitPic?  Well, let\'s check the API: <a href="http://twitpic.com/api.do">TwitPic API</a>. According to the API, it\'s just a case of posting an image file with additional parameters of <strong>username</strong>, <strong>password</strong> and if you like, <strong>message</strong>. And the upload location is pretty simple too - <em><a href="http://twitpic.com/api/upload">http://twitpic.com/api/upload</a></em> or <em><a href="http://twitpic.com/api/uploadAndPost">http://twitpic.com/api/uploadAndPost</a></em>. One for just uploading, and the other for posting things to your twitter feed at the same time.</p>\n<p>If you\'re posting automatically to twitter, TwitPic will automatically add the url to your image to the start of your tweet.</p>\n<p>So, let\'s check out some basic code:</p>\n<h3>The code:</h3>\n<pre><code>var urlVars:URLVariables = new URLVariables();\n    urlVars.username = "username";\n    urlVars.password = "password";\n\nvar urlRequest:URLRequest = new URLRequest("http://twitpic.com/api/upload"); \n    urlRequest.method = URLRequestMethod.POST; \n    urlRequest.data = urlVars;\n\nvar file:File = File.desktopDirectory.resolvePath("test.jpg"); \n    file.upload(urlRequest, \'media\');\n</code></pre>\n<p>In a nutshell, that code will upload an image file (called "test.jpg") from the desktop, to TwitPic.</p>\n<p>We create an URLVariables object (which contains the additional parameters required for the POST request), create an URLRequest object with the target http request, set the method, assign the URLVariables to the URLRequest, and then finally grab a reference to our file and call the upload method on the file, passing in the URLRequest.</p>\n<p>Ok, URLVariables and URLRequests are simple enough - but the thing that was difficult for me to get my head around was the <strong>file.upload()</strong> method. What it actually does is convert the File (or FileReference) to binary data, and sends that as an additional URLVariable in the URLRequest.  The first parameter it takes is an URLRequest, and the second is the name of the variable that the binary data is assigned to.  I\'d kinda assumed that a single URLVariables object would contain all of the data you\'re sending in your request, but when you\'re using the File.upload method, it seems to be compositing a new set of variables from the method and the URLRequests\' existing data.  Confusing, to start with.</p>',frontmatter:{title:"How to: Post images to TwitPic with Actionscript",date:"July 05, 2009",tags:["actionscript","twitter","twitpic"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/tracking-flash-flex-air-applications-with-google-analytics/",tags:["flash","flex","air","google","google-analytics"],title:"Tracking Flash / Flex / AIR applications with Google Analytics",date:"2009-06-24T08:45:31.000Z"}},next:{frontmatter:{path:"/blog/imagesizer-updated-again/",tags:["imagesizer"],title:"ImageSizer updated! (again)",date:"2009-07-24T16:27:03.000Z"}}}}}});
//# sourceMappingURL=path---blog-how-to-post-images-to-twitpic-with-actionscript-c1a49c480bc7075009e2.js.map