webpackJsonp([0x9ef08370a42c],{1235:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/creating-flex-components-the-easy-way-for-flash-ide-converts/index.md absPath of file >>> MarkdownRemark",html:'<p>I’m sure I’m not the only one that wants to make use of their existing skills in Flash to create Flex components without getting bogged down by creating it all in ActionScript classes, overriding lots of methods and generally getting in a mess. Don’t get me wrong, learning how to code custom components is something I want to learn but for now, I want something quick.</p>\n<p>I came across <a href="http://www.webkitchen.be/2008/12/12/video-tutorial-make-flex-components-with-flash-cs4/">this post by Serge Jespers</a>; a brilliant video for getting started. However, I wanted my components to be scalable like other Flex components, and after some digging around I found that by overriding the method <strong>setActualSize()</strong> I could get my components to react to being scaled by its layout container. The <strong>setActualSize()</strong> method on a component is called by its layout containers’ updateDisplayList() method, so when we make changes to the size of the layout container (i.e. resize the window) the changes are reflected in the component, in Design view.</p>\n<p>In the explanations below I’ll be assuming you already have an understanding of the Flash IDE (in this case CS3), creating custom classes and have the <a href="https://www.adobe.com/cfusion/entitlement/index.cfm?e=flex_skins">Flex Component Kit for Flash</a> installed.</p>\n<h3>Before we get started, you can;</h3>\n<p><a href="http://uploads.psyked.co.uk/2008/12/redbox.zip">Download the Flash CS3 source files [Zip file: 151Kb]</a></p>\n<p><a href="http://uploads.psyked.co.uk/2008/12/redboxexample.zip">Download the sample Flex project archive [Flex Project (Zip file): 41Kb]</a></p>\n<h3>Creating the component in Flash</h3>\n<p>If you look at the image below I’ve created a red box with the instance name of box in a MovieClip called RedBox. This is the basis of the component we will create; the aim is for the component to keep the red box centered when it is resized.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/image1-e8aeb7f838f3a1b38d0e7bdc30e131d5-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHVsRyQD//EABsQAAIBBQAAAAAAAAAAAAAAAAABIQIDEiIx/9oACAEBAAEFAoFgaFuaGLn/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAYEAACAwAAAAAAAAAAAAAAAAAAQQEQkf/aAAgBAQAGPwIWCIv/xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhMVGR/9oACAEBAAE/IVnZRo1BfHwPW+tVjxHA/9oADAMBAAIAAwAAABCDD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABwQAQABBAMAAAAAAAAAAAAAAAEAESExUWHR8P/aAAgBAQABPxC0p2VOYDIR5vUS+xpTLGFNxqi3n//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="image1"\n        title=""\n        src="/static/image1-e8aeb7f838f3a1b38d0e7bdc30e131d5-e8574.jpg"\n        srcset="/static/image1-e8aeb7f838f3a1b38d0e7bdc30e131d5-c94d9.jpg 158w,\n/static/image1-e8aeb7f838f3a1b38d0e7bdc30e131d5-9885b.jpg 315w,\n/static/image1-e8aeb7f838f3a1b38d0e7bdc30e131d5-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>If you select the RedBox MovieClip in your library and go to <strong>Commands > Convert Symbol to Flex Component</strong> this will now, amongst other things, set the Flash file to produce a swc file when published, which you will later use in Flex, and added the FlexComponentBase to your library.</p>\n<p>You may receive an alert asking you if you wish to change the frame rate of your Flash file to 24fps, it is recommended to do this. The properties of the RedBox MovieClip should look the same as the image below. Note that the MovieClip now has a base class of mx.flash.UIMovieClip, this is the base class we will extend for our custom component.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/image2-30ce223b618be3762acda9573518fbeb-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAezs2Af/xAAYEAEAAwEAAAAAAAAAAAAAAAAAAQIQQf/aAAgBAQABBQLKuof/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAcEAEAAQQDAAAAAAAAAAAAAAABABAxQXERIYH/2gAIAQEAAT8hceweS8HTuYUtds//2gAMAwEAAgADAAAAELDP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBAAAwEAAgMAAAAAAAAAAAAAAAEhETFBUbHw/9oACAEBAAE/EEWSISSKraIUu3s157DEuEfW8n//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="image2"\n        title=""\n        src="/static/image2-30ce223b618be3762acda9573518fbeb-e8574.jpg"\n        srcset="/static/image2-30ce223b618be3762acda9573518fbeb-c94d9.jpg 158w,\n/static/image2-30ce223b618be3762acda9573518fbeb-9885b.jpg 315w,\n/static/image2-30ce223b618be3762acda9573518fbeb-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The MovieClip is ready for use in Flex as a component, but if you try to do so it won’t perform as we want it to when it’s scaled. We will use the class below to do this, before we move on there’s a couple of things to note about the class.</p>\n<ul>\n<li>We need to import the MovieClip class because it’s used in the component (the instance called box is still a MovieClip). If you have other objects in your component ensure these are imported.</li>\n<li>The class extends mx.flash.UIMovieClip, this is the base class the Flex Component kit gave the class initially.</li>\n<li>We’ve overridden the setActualSize() method so that we control what happens when the component is resized. Firstly we check to ensure that it’s necessary we change properties of the children in the component, if the new dimensions do not match the current dimensions then we change them and adjust the children (in this case our box).</li>\n</ul>\n<pre><code>package couk.psyked.ui\n{\n    import flash.display.MovieClip;\n    import mx.flash.UIMovieClip;\n    //\n    public class RedBox extends UIMovieClip\n    {\n        public function RedBox():void\n        {\n            super();\n        }\n        //\n        override public function setActualSize( newWidth:Number, newHeight:Number ):void\n        {\n            if (newWidth != _width || newHeight != _height)\n            {\n                _width = newWidth;\n                _height = newHeight;\n                //\n                box.x = ( _width - box.width ) / 2;\n                box.y = ( _height - box.height ) / 2;\n            }\n        }\n    }\n}\n</code></pre>\n<p>Finally we need to change the linkage of our RedBox MovieClip in the library, set those to the image below. Note that we change the base class to flash.display.MovieClip; this is because it’s ignored now that our custom class extends mx.flash.UIMovieClip. If you try to link the custom class to the MovieClip without changing the base class you’ll get an error.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/image3-c4465c29587fdeefe55286a610ad897b-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7lUmcJ//xAAZEAACAwEAAAAAAAAAAAAAAAABAgAQMTL/2gAIAQEAAQUCNNpyP1//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAEBAQAAAAAAAAAAAAAAAAABEHH/2gAIAQEABj8CKbf/xAAZEAACAwEAAAAAAAAAAAAAAAAAARAhMUH/2gAIAQEAAT8hzQT4ijjRND//2gAMAwEAAgADAAAAEBAf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAh/9oACAEDAQE/EDF//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBAAAgICAwAAAAAAAAAAAAAAAREAIVGxMWGh/9oACAEBAAE/EAAqc46MGbksmKABjUI52w3AA2rniGp//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="image3"\n        title=""\n        src="/static/image3-c4465c29587fdeefe55286a610ad897b-e8574.jpg"\n        srcset="/static/image3-c4465c29587fdeefe55286a610ad897b-c94d9.jpg 158w,\n/static/image3-c4465c29587fdeefe55286a610ad897b-9885b.jpg 315w,\n/static/image3-c4465c29587fdeefe55286a610ad897b-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>That’s it, publish the file and it’s ready to drop into Flex.</p>\n<h3>Using the component in Flex</h3>\n<p>Create a new project in Flex, I’ll be using a new Web application, and add the swc file to the library path of the project (it’ll be the same name as the fla). Your Flex Build Path properties should look similar to the image below.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/image4-53e1a9541ef3cc47f308bac58180b5f4-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe2oJNj/xAAXEAEAAwAAAAAAAAAAAAAAAAARACBB/9oACAEBAAEFAsI0/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhAAAwAAAAAAAAAAAAAAAAAAECAx/9oACAEBAAY/AhE//8QAGhABAQACAwAAAAAAAAAAAAAAAQAQESExQf/aAAgBAQABPyEORr2FOj2nDf/aAAwDAQACAAMAAAAQ0w//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhURBBYXH/2gAIAQEAAT8QXDA4FVB1rUNC6vZ0+8Atn//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="image4"\n        title=""\n        src="/static/image4-53e1a9541ef3cc47f308bac58180b5f4-e8574.jpg"\n        srcset="/static/image4-53e1a9541ef3cc47f308bac58180b5f4-c94d9.jpg 158w,\n/static/image4-53e1a9541ef3cc47f308bac58180b5f4-9885b.jpg 315w,\n/static/image4-53e1a9541ef3cc47f308bac58180b5f4-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>In the application tag of your mxml file you need to add the following attribute xmlns:ui="couk.psyked.ui.*" this will enable you to use the custom component and give you code hinting for it. If you’re not sure what this attribute does then you might want to look up xml namespaces.</p>\n<p>Now you can use the component as you would any other Flex Component, start typing “&#x3C;Red” and you should see <em>ui:RedBox</em> in the code completion list. In the example below I’ve used the component twice in a VBox, once setting both the width and height to 100% and the other one has the height specified. If you run this web application in the browser and play with the window size you will see the red boxes stay in the center of their component.</p>\n<p><a href="http://www.psyked.co.uk/downloads/RedBoxExample.html">View the published web application</a></p>\n<p>You can download the source files below; this includes the files used in both Flash and Flex.</p>\n<p><a href="http://uploads.psyked.co.uk/2008/12/redbox.zip">Download the Flash CS3 source files [Zip file: 151Kb]</a></p>\n<p><a href="http://uploads.psyked.co.uk/2008/12/redboxexample.zip">Download the sample Flex project archive [Flex Project (Zip file): 41Kb]</a></p>\n<h3>Final comments</h3>\n<p>As I mentioned before, this is a quick implementation of creating a Flex Component using Flash. If anyone has any improvements, cool uses, suggestions or comments on this method please leave a comment – even if it’s just to say you used it!</p>',frontmatter:{title:"Creating Flex Components - the easy way (for Flash IDE converts)",date:"January 05, 2009",tags:["flash","flex","components"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/imagesizer-updated-to-version-0310/",tags:["imagesizer"],title:"ImageSizer - updated to version 0.3.10!",date:"2008-12-22T14:11:45.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/using-google-analytics-in-flash/",tags:["actionscript","flash","google-analytics"],title:"Using Google Analytics in Flash",date:"2009-01-06T09:20:18.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-creating-flex-components-the-easy-way-for-flash-ide-converts-12c90f388f34031ecde6.js.map