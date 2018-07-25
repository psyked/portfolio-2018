webpackJsonp([0x6886d51c88fc],{1058:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/actionscript-2-xml-cdata-returns-undefined-or-htmltext-doesnt-work/index.md absPath of file >>> MarkdownRemark",html:"<h3>The problem:</h3>\n<p>Your XML file is fine, it validates as XML.  The file encoding and the xml declaration encoding match.  You can parse the XML, but when you try and put html inside a CDATA element, and then populate a dynamic textbox with it, either your formatting doesn't work (the text still has <b> tags in) or it returns 'undefined'.</p>\n<h3>The solution:</h3>\n<p>This could actually be a twofold problem, and is not helped along by Flash's quirks.  Its most likely that you're either;</p>\n<ul>\n<li>Accessing the XMLNode incorrectly,</li>\n</ul>\n<p>Or</p>\n<ul>\n<li>Being tripped up by the Flash players' slightly dodgy XML parsing.</li>\n</ul>\n<h3>Accessing CDATA correctly</h3>\n<p>Now, the way that you should be accessing CDATA in Flash is perhaps a little different to what you'd expect.  CDATA should have no effect on how you access your XML - it's a parsing instruction, right?.  Well Flash treats it as part of the XML structure, so if you want to access the data inside the CDATA element, you have to treat the CDATA as a node in itself.  Its actually quite easy though.  Instead of accessing the contents of CDATA with childNode.nodeValue or childNodes, you should be using <strong>childNode.firstChild.nodeValue</strong>.</p>\n<p>So childNode is the parent node of the CDATA element, firstChild is the actual CDATA instruction, and nodeValue extracts everything that's inside the CDATA element.</p>\n<p>That hopefully, will solve any problems with 'undefined' appearing when you try to access data inside a CDATA element.</p>\n<h3>Flash players' dodgy XML parsing?</h3>\n<p>Yes indeedy, Flash does do things a little different.  CDATA is great because you can put nearly anything inside it, and the XML will still parse correctly.  Whatever's inside your CDATA should not be interpreted by anything else, and won't break anything that tries to read it.</p>\n<p>Flash however, still does a little bit of work to it.  If you run a few traces on HTML formatting that you try to send via CDATA, you'll notice that all of the &#x3C; and > characters are transformed into their encoded versions, &#x3C; and >. This poses a minor problem because if you just try to whack HTML from your XML into a dynamic textbox, the formatting won't work properly and you'll get the characters &#x3C; and > appearing, along with the HTML formatting commands - because the &#x3C; and > characters are encoded.</p>\n<p>Annoying yes, easy to fix - yes.</p>\n<p>Find and replace is your ally here - or as near as we can easily get;</p>\n<blockquote>\n<p>xmlcdata<strong>.split('&#x3C;').join('>').split('>').join('>')</strong></p>\n</blockquote>\n<p>Run that on your string of text before you put it into your textbox and you're good to go!</p>\n<h3>Quirks?</h3>\n<p>What you also might find is that HTML formatted textboxes could actually display the contents of a CDATA node without the CDATA node being correctly accessed.  If you access the node with the childNodes property, and put that into your textbox, then the contents will display, but not with HTML formatting.</p>\n<p>What Flash is actually doing is grabbing the CDATA element (and everything inside it).  Assigning this variable to a textbox <em>should fail</em>, but in actual fact it works - to a certain extent.  It seems like the HTML formatting of the textbox allows it to parse the XML element and then consiquently display the content within.  The problem then comes when you want to manipulate this data - the contents of the textboxes' text is not actually a string, but an XMLNode.  Weird, huh?</p>",frontmatter:{title:"ActionScript 2 - XML CDATA returns undefined, or htmlText doesn't work!",date:"September 17, 2008",tags:["actionscript","flash","cdata","quirks","xml"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/google-analytics-unveiled/",tags:["apis","google-analytics","google-code"],title:"Google Analytics — Unveiled.",image:null,date:"2008-09-12T10:00:10.000Z"}},next:{frontmatter:{path:"/blog/back-to-school-top-10-adobe-flex-and-air-applications-for-students/",tags:["flex","air","students"],title:"Back to School: Top 10 Adobe Flex and AIR applications for students",image:null,date:"2008-09-18T09:30:47.000Z"}}}}}});
//# sourceMappingURL=path---blog-actionscript-2-xml-cdata-returns-undefined-or-htmltext-doesnt-work-2636b347d747dfbe025b.js.map