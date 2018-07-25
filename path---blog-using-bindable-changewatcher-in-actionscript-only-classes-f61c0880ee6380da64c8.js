webpackJsonp([0x9364fe70b0bb],{1350:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/using-bindable-changewatcher-in-actionscript-only-classes/index.md absPath of file >>> MarkdownRemark",html:"<h3>What are you talking about?</h3>\n<p>Recently I've been toying around with using [Bindable] Metadata in Flex and AS3, namely trying to not only make it so that my static variables can be used as bindings in Flex, but also that I can detect when the variables change.</p>\n<h3>How do you do that?</h3>\n<p>There's a few ways you can do that, and a whole plethora of other blogs that will give you rundowns on how.  What you need to look for are the ChangeWatcher and BindingUtils classes [<a href=\"http://livedocs.adobe.com/flex/3/html/help.html?content=databinding_7.html\">livedocs</a>].  There doesn't seem to be anything in particular thats different between them, ChangeWatcher lets you define a variable and function to call on changes, and BindingUtils lets you define functions to call when variables are set or properties change - all in all, not much difference.</p>\n<h3>But...</h3>\n<p>What none of the examples mention however, is that all of the tutorials on this are covering script in MXML components or extending existing MXML components and are therefore all using the Flex framework.  You can add in all the ChangeWatcher.watch()'s you want and get no errors, but if you're not extending the Flex framework, nothing is going to work!</p>\n<h3>So.</h3>\n<p>So, if you want to detect binding changes in an ActionScript-only class, you need to do it in something that's extending a Flex component, otherwise it just won't work!  Obvious really, but it took me a good few hours to figure out.  I haven't done extensive testing to see what the lowest level component to extend was, but I've plumbed for extending the UIComponent, and all of my binding detections work.</p>\n<p>pulic class ImageSizerApplicationConfig extends UIComponent</p>",frontmatter:{title:"Using [Bindable] & ChangeWatcher in ActionScript-only classes",date:"January 19, 2009",tags:["actionscript","flex","binding","components"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/creating-custom-chromes-for-air-applications-in-flex-flash/",tags:["flash","flex","air"],title:"Creating custom chromes for AIR applications in Flex & Flash",image:null,date:"2009-01-15T16:30:01.000Z"}},next:{frontmatter:{path:"/blog/geocoding-uk-postcodes-with-google-map-api/",tags:["google-maps"],title:"Geocoding UK Postcodes with Google Map API",image:null,date:"2009-01-20T10:55:49.000Z"}}}}}});
//# sourceMappingURL=path---blog-using-bindable-changewatcher-in-actionscript-only-classes-f61c0880ee6380da64c8.js.map