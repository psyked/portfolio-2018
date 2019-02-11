webpackJsonp([0xe4c7c97da869],{1259:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/discovering-project-sprouts/index.md absPath of file >>> MarkdownRemark",html:'<p><em>Project Sprouts (<a href="http://projectsprouts.org/" title="Open http://projectsprouts.org/ in a new window">http://projectsprouts.org/</a>) is something that I\'m just starting to get into, following much encouragement from Mark, and a cool presentation from Simon Bailey (<a href="http://www.newtriks.com/?tag=project-sprouts">http://www.newtriks.com/?tag=project-sprouts</a>).</em></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/FF181-8cb038cba7f2c6e4896c97778c198f78-e8574.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAIE/9oADAMBAAIQAxAAAAHGybLBTR//xAAYEAEBAQEBAAAAAAAAAAAAAAABABMCA//aAAgBAQABBQLKPNLNuViL/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREv/aAAgBAgEBPwGs0z//xAAXEAADAQAAAAAAAAAAAAAAAAAAIDEy/9oACAEBAAY/AtFX/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERITFB/9oACAEBAAE/IXUQ5gd9aGrX4aNLT//aAAwDAQACAAMAAAAQW+//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EHhWf//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EEof/8QAGxABAQEAAwEBAAAAAAAAAAAAAREAITFBUWH/2gAIAQEAAT8QRgL9nGFYt6jnNUv7lbWCb2ewonGTRL5v/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Sprouts"\n        title=""\n        src="/static/FF181-8cb038cba7f2c6e4896c97778c198f78-e8574.jpg"\n        srcset="/static/FF181-8cb038cba7f2c6e4896c97778c198f78-c94d9.jpg 158w,\n/static/FF181-8cb038cba7f2c6e4896c97778c198f78-9885b.jpg 315w,\n/static/FF181-8cb038cba7f2c6e4896c97778c198f78-e8574.jpg 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>What is Project Sprouts?</h3>\n<p>Sprouts is a relatively new project, focussed on ActionScript and Flex development, and makes a whole lot of the setup of new ActionScript and Flex projects much easier. It’s a springboard for new projects, and it automates both the initial configuration of your development tools and the creation of new template-based classes, projects and unit tests. Essentially, that’s what it does out of the box. But in addition to that, it’s also completely configurable (depending on how deep you want to go into Ruby), it’s headless (in that it has no IDE), and it’s platform independent.</p>\n<h3>Why should you be interested?</h3>\n<p>From a practical point-of-view, setting up new projects is a time-consuming process. Setting up MVC frameworks, like RobotLegs or PureMVC, are more of a time sink, and setting up TDD is even more so. Sprouts, on the other hand, sets your projects up based on a template and does it for you – MVC framework and TDD templates included. It’s also then extensible and you can, for example, then integrate tasks like FTP uploads or source-control syncing as part of your build process.</p>\n<h3>How does it work?</h3>\n<p>It’s all built on Ruby(<a href="http://www.ruby-lang.org/en/" title="Open http://rubygems.org/ in a new window">http://www.ruby-lang.org/en/</a>) and uses RubyGems(<a href="http://rubygems.org/" title="Open http://rubygems.org/ in a new window.">http://rubygems.org/</a>) – that’s all you need. No Flash Builder, no Adobe Creative Suite. Mac and *nix platforms have Ruby built in, I think. Windows PCs have to go download a Ruby installer(<a href="http://rubyinstaller.org/" title="Open http://rubyinstaller.org/ in a new window">http://rubyinstaller.org/</a>).</p>\n<h3>Sample code:</h3>\n<p>When you’ve got it installed, fire up your Ruby Command-Line window and type:</p>\n<pre><code># Install the ActionScript 3 / Flash Bundle:\ngem install flashsdk --pre\n\n# Generate a new ActionScript 3 project:\nsprout-as3 SomeProject\n\n# Move into the new project:\ncd SomeProject\n\n# Install dependencies:\nbundle install\n\n# Compile and run the main project:\nrake\n\n# Generate a class, test and test suite:\nsprout-class utils.MathUtil\n\n# Compile and run the test harness:\nrake test\n</code></pre>\n<p>The initial four lines of code does what otherwise takes hours to achieve. (If you’re doing like-for-like tasks) It downloads the latest Flash SDK, configures it, creates a new project and compiles it. The latter two commands set up unit test templates and runs them. The unit testing templates never really seemed to make sense to me before seeing them used in Sprouts - a lot of setup, if you ask me.  But with the shell classes being auto-generated, it all seems to make sense now!</p>',frontmatter:{title:"Discovering: Project Sprouts",date:"July 22, 2011",tags:["flash","project-sprouts","ruby","rubygems"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/having-trouble-with-workspaces-in-appcelerator-titanium/",tags:null,title:"Having trouble with workspaces in Appcelerator Titanium?",date:"2011-07-19T09:05:51.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/available-now-the-flash-facebook-cookbook/",tags:["the-flash-facebook-cookbook"],title:"Available now: The Flash Facebook Cookbook",date:"2011-09-04T20:53:28.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-discovering-project-sprouts-027663221681bc8b08aa.js.map