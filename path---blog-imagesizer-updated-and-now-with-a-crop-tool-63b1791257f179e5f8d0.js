webpackJsonp([68300408892115],{1343:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/imagesizer-updated-and-now-with-a-crop-tool/index.md absPath of file >>> MarkdownRemark",html:'<p>ImageSizer is now up to version 0.4.6.  If you\'re paying attention to the number of updates I\'ve been putting up here, that\'s a noticable jump from the last update, so I guess it\'s time for a roundup of all of the features that have been introduced in this, and the other recent updates I forgot to mention.</p>\n<p>If you\'ve been running ImageSizer then hopefully you\'ll have seen the automatic updates announce themselves, but here they are with a features list and pictures!</p>\n<h2>General updates:</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/imagesizer_main-8809e441d57636efa62cdcfdfef41e5f-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBP/EABUBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAAHkiMthP//EABgQAQEBAQEAAAAAAAAAAAAAAAEAAiER/9oACAEBAAEFAlh7a8bJ2//EABYRAAMAAAAAAAAAAAAAAAAAAAEQMf/aAAgBAwEBPwE1f//EABYRAAMAAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPwERf//EABYQAQEBAAAAAAAAAAAAAAAAABABIf/aAAgBAQAGPwJyP//EABsQAAICAwEAAAAAAAAAAAAAAAABESEQUWGB/9oACAEBAAE/IXU+aHaYoST1jH5IP//aAAwDAQACAAMAAAAQdw//xAAXEQEAAwAAAAAAAAAAAAAAAAABEBFB/9oACAEDAQE/EBhuP//EABURAQEAAAAAAAAAAAAAAAAAABBR/9oACAECAQE/EKH/xAAaEAEBAQADAQAAAAAAAAAAAAABEQAhQWEx/9oACAEBAAE/ECkFXkoC+eZiF5HeWukXCxaU60QANMyj7v/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ImageSizer version 0.4.6"\n        title=""\n        src="/static/imagesizer_main-8809e441d57636efa62cdcfdfef41e5f-e8574.jpg"\n        srcset="/static/imagesizer_main-8809e441d57636efa62cdcfdfef41e5f-c94d9.jpg 158w,\n/static/imagesizer_main-8809e441d57636efa62cdcfdfef41e5f-9885b.jpg 315w,\n/static/imagesizer_main-8809e441d57636efa62cdcfdfef41e5f-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The first thing you\'ll notice is that the interface is looking a little bit brighter - with those helpful #1, #2, #3 markers. They\'re designed to make it easier to identify the process you need to take to use the application.  We\'ve also added more instructions to the application, in a simpler language (hopefully).</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/imagesizer_encoding-81de4ce06344eb04d90bbd7991b888e8-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAQAE/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHKhWLEf//EABcQAQADAAAAAAAAAAAAAAAAAAEAESD/2gAIAQEAAQUCiVn/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAaEAEAAwADAAAAAAAAAAAAAAABEBEhAEFR/9oACAEBAAE/IVvriV03yBpn/9oADAMBAAIAAwAAABDUz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAQEBAAMBAAAAAAAAAAAAAAERABAhMWH/2gAIAQEAAT8QqsHwN3hIpWrkBPTQGhx//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ImageSizer - encoding screen"\n        title=""\n        src="/static/imagesizer_encoding-81de4ce06344eb04d90bbd7991b888e8-e8574.jpg"\n        srcset="/static/imagesizer_encoding-81de4ce06344eb04d90bbd7991b888e8-c94d9.jpg 158w,\n/static/imagesizer_encoding-81de4ce06344eb04d90bbd7991b888e8-9885b.jpg 315w,\n/static/imagesizer_encoding-81de4ce06344eb04d90bbd7991b888e8-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><strong>The encoding screen:</strong> It\'s only a visual thing, but it looks nice.  You can now see a preview of the image that\'s being processed, as well as the individual image progress and the overall batch progress while the application is working.</p>\n<p>Technically, this whole process has also been rewritten.  In the original version the processed files were stored in memory, which wasn\'t too great because it meant that if you were working on a lot of images it would really hog your system resources and actually slow down the resampling process. This has been changed now to take advantage of the file system more, and you shouldn\'t notice an ever-increasing drain on your system resources, and the process shouldn\'t slow down.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/imagesizer_output-0a05bfff2ebb6952fc1d3a106cc3b54a-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAA//aAAwDAQACEAMQAAAB54OOVN//xAAWEAEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQEAAQUCo5f/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhEDFBUf/aAAgBAQABPyFgi5XHgoKtuNl17DP/2gAMAwEAAgADAAAAEL8P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBcf/aAAgBAQABPxCkQHyX7Qu9lBCKbL0i3oFXiBGf/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ImageSizer output screen."\n        title=""\n        src="/static/imagesizer_output-0a05bfff2ebb6952fc1d3a106cc3b54a-e8574.jpg"\n        srcset="/static/imagesizer_output-0a05bfff2ebb6952fc1d3a106cc3b54a-c94d9.jpg 158w,\n/static/imagesizer_output-0a05bfff2ebb6952fc1d3a106cc3b54a-9885b.jpg 315w,\n/static/imagesizer_output-0a05bfff2ebb6952fc1d3a106cc3b54a-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><strong>The output screen:</strong>  Again with the visual and textual overhaul. We\'re still working on the drag-and-drop method of working with the file system, but there\'s a new option - you can export your batch of images as a single folder or a compressed zip archive. It also makes more sense to set your output filename on this screen, so we\'ve moved it here (it used to be on the first screen).</p>\n<p>So, that\'s the changes to the existing screens - what about this \'Crop tool\' you mentioned?</p>\n<h3>The Crop tool.</h3>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/imagesizer_crop_tool-af03583dfb33f9acd6e72f87289d6b01-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 73.6%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAABz0UNgLP/xAAZEAACAwEAAAAAAAAAAAAAAAAAEgECExH/2gAIAQEAAQUCXoq2k0rBo0n/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAACAQUAAAAAAAAAAAAAAAABEAARMTJhkf/aAAgBAQAGPwK57MqsDa//xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMVFB/9oACAEBAAE/ISj1ho0jfYsw7IEY3lEn/9oADAMBAAIAAwAAABBYP//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQMBAT8QmDh//8QAFhEAAwAAAAAAAAAAAAAAAAAAEBEh/9oACAECAQE/EKx//8QAHBABAQEAAgMBAAAAAAAAAAAAAREAITFBUXGB/9oACAEBAAE/EAgJfd4pieDT9uAiX4a8I/fE5xQRpBDc3b1v/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ImageSizer Crop tool"\n        title=""\n        src="/static/imagesizer_crop_tool-af03583dfb33f9acd6e72f87289d6b01-e8574.jpg"\n        srcset="/static/imagesizer_crop_tool-af03583dfb33f9acd6e72f87289d6b01-c94d9.jpg 158w,\n/static/imagesizer_crop_tool-af03583dfb33f9acd6e72f87289d6b01-9885b.jpg 315w,\n/static/imagesizer_crop_tool-af03583dfb33f9acd6e72f87289d6b01-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>As often as you want to resize images, you find you also want to cut just that little bit off the image. Well now you can, with the built-in Crop tool. From the inital screen, just click the crop button next to the image name, and a new window will open.  Click and drag the handles in the four corners to select the area of the image you want to crop to, and click the \'Crop Image\' button.  Could it be any easier?</p>\n<p>The crop tool functionality is aided by the awesome <a href="http://blog.mediablur.com/2008/02/20/flex-image-cropping-component/">Flex Image Cropping Component</a> from Random Madness.</p>\n<h3>Future developments.</h3>\n<p>There\'s a lot of other things that are planned, such as Twitter and Flickr uploading, JPEG file metadata editing, an image enhancing tool, and a few clever tricks we\'ve thought of on the performance / ui front. And then there\'s fixing any bugs or memory leaks that we find! If you have any suggestions or spot a bug, then add a comment, or send us a message. You can also follow the official development microblog on Twitter: <a href="http://twitter.com/ImageSizer">@ImageSizer</a>.</p>\n<p>You can use the AIR Installer badge in the column to the right of this post, or <a href="http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&#x26;offeringid=10740&#x26;marketplaceid=1">download ImageSizer via the AIR Marketplace</a>.</p>',frontmatter:{title:"ImageSizer updated, and now with a Crop tool.",date:"March 15, 2009",tags:["imagesizer"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/viewing-flash-flex-air-documentation-offline-with-doc/",tags:["flash","flex","asdoc","documention","eclipse","livedocs"],title:'Viewing Flash / Flex / AIR documentation offline with "Doc?"',date:"2009-03-04T08:30:17.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/setting-up-asdoc-in-flex-builder/",tags:["actionscript","flex","asdoc"],title:"Setting up ASDoc in Flex Builder",date:"2009-03-16T09:46:55.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-imagesizer-updated-and-now-with-a-crop-tool-63b1791257f179e5f8d0.js.map