webpackJsonp([0x74c5dac56c74],{1319:function(t,e){t.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/hacking-facebook-like-buttons-for-w3c-validation-in-html5/index.md absPath of file >>> MarkdownRemark",html:"<p><img src=\"https://uploads.psyked.co.uk/2011/11/html5-facebook.png\" title=\"HTML5 &#x26; Facebook\"></p>\n<p>So, it turns out that the good old Facebook 'Like' buttons and Google's 'Plus one' buttons don't behave well on HTML5 format websites. That's because they make use of XHTML and namespaces. Sure, mixing XHTML and HTML5 together on a single page works just fine for the end-user, but when it comes to validating your pages on the W3C, it just won't work.</p>\n<p>What's the 'solution'? Why, hacking it, of course. Take the code for those elements out of the source, and embed it with JavaScript instead.  And it doesn't have to be complex either - you can use inline JavaScript code.</p>\n<p>Wrap your button embed HTML in a <script> tag, add a CDATA block, and encompass it in a <code>document.write()</code> function, and you're done.</p>\n<p>So this code:</p>\n<script src=\"https://gist.github.com/1356698.js\"></script>\n<p>Becomes this code:</p>\n<script src=\"https://gist.github.com/1356694.js\"></script>\n<p>Of course, this being a hack, I can't really speak for this being good practice, but it works. Evaluating the pitfalls will come later, I'm sure!</p>",frontmatter:{title:'Hacking Facebook "Like" buttons for W3C Validation in HTML5',date:"November 11, 2011",tags:["facebook","html","html5","hacks","validation"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/fotb2011-highlight-1/",tags:["flash"],title:"FOTB2011 Highlight #1: HiSlope",date:"2011-09-15T19:43:55.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/improving-your-website-with-nibbler/",tags:["external-links","html","nibbler","validation"],title:"Improving your website with Nibbler",date:"2011-11-14T07:30:29.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-hacking-facebook-like-buttons-for-w-3-c-validation-in-html-5-669f6ca8bfafe20c1f09.js.map