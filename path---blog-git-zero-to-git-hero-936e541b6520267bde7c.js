webpackJsonp([0xbfa3225c92e9],{1157:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/git-zero-to-git-hero/index.md absPath of file >>> MarkdownRemark",html:'<h2>Mastering git requires a mentor. Let me be yours.</h2>\n<h3>Getting started with git</h3>\n<p>If reading is your thing, be sure to check out these ‘git basics’ guides. All of them cover the same content, but with a slightly different angle.</p>\n<ul>\n<li><a href="https://guides.github.com/activities/hello-world/">https://guides.github.com/activities/hello-world/</a></li>\n<li><a href="http://alistapart.com/article/get-started-with-git">http://alistapart.com/article/get-started-with-git</a></li>\n<li><a href="http://rogerdudler.github.io/git-guide/">http://rogerdudler.github.io/git-guide/</a></li>\n<li><a href="https://teamtreehouse.com/library/git-basics">https://teamtreehouse.com/library/git-basics</a></li>\n</ul>\n<p>Okay, so you’ve got the basics. The next question is, how do you improve your git technique and become a git master?</p>\n<h3>Write better commit messages</h3>\n<p>Your commit messages exist for <em>you</em> and <em>your benefit,</em> so you’re doing yourself a disservice to not be writing them in a way that will actually be useful to you in a year, six months, a week, a day or even an hour.</p>\n<p>Go out and write yourself the best darn messages you can, all the time, with the help of this post from Tim Pope:</p>\n<ul>\n<li><a href="http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html">http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html</a></li>\n</ul>\n<h3>Branches and branching strategy</h3>\n<p>A solid understanding of branching will make sure that your commit logs actually make sense historically, allows you to work with parallel versions of your source code and keep your master branch focussed, neat and tidy.</p>\n<p>Our recommended branching ‘strategy’ is:</p>\n<ul>\n<li>The <strong>master</strong> branch represents your <em>stable</em> release.</li>\n<li>The <strong>development</strong> branch is for your <em>work in progress</em>.</li>\n<li>Individual <strong>features</strong> should be developed in their own branch.</li>\n<li><strong>Features</strong> are branched from the <strong>development</strong> branch.</li>\n<li><em>Completed</em> <strong>features</strong> are merged into the <strong>development</strong> branch.</li>\n<li><em>Stable</em> <strong>development</strong> branches get merged into the <strong>master</strong> branch.</li>\n</ul>\n<p>To help solidify your knowledge about branches, have a play with this tool:</p>\n<ul>\n<li><a href="http://learngitbranching.js.org/">http://learngitbranching.js.org/</a></li>\n</ul>\n<h3>Craft your commits</h3>\n<blockquote>\n<p>“A commit, like a well-designed function or class, should represent a single concept. A distinct, cohesive commit is easy to understand, review, and, if necessary, revert.”</p>\n</blockquote>\n<p>The real world of development is a little messy, but your source code and your git commits don’t have to represent this, and you can perfect the contents of your commit as you make it, so that your commit meets these goals — distinct, cohesive and focussed.</p>\n<ul>\n<li><a href="http://blog.carbonfive.com/2011/10/10/crafting-commits-in-git/">http://blog.carbonfive.com/2011/10/10/crafting-commits-in-git/</a></li>\n<li><a href="https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging">https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging</a></li>\n</ul>\n<h3>Use an IDE, like SourceTree</h3>\n<p>Does branching get you down, and crafting commit messages seem a little overly complex? Learning the basics with the ‘good old console’ has its advantages, but you don’t have to suffer doing things the <em>hard way</em> all the time. Using a more advanced desktop application gives you a much easier way to visualise your code changes and craft your commits, without all the complexity of its command-line counterpart.</p>\n<ul>\n<li><a href="https://www.sourcetreeapp.com/">https://www.sourcetreeapp.com/</a></li>\n</ul>\n<p>This is a repost of an article <a href="https://medium.com/@psyked_james/git-zero-to-git-hero-900578ab90c2#.2fvj1x1tn">originally published on Medium</a></p>',frontmatter:{title:"Git Zero to Git Hero",date:"September 20, 2016",tags:null,url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/poképroject-dev-diary-day-five/",tags:["JavaScript","CSS","Pokemon","Canvas","Agile"],title:"PokéProject Dev Diary: Day Five",date:"2016-09-20T20:11:03.647Z",description:"Move fast, change things.",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABo7W4nnYRX//EABsQAAICAwEAAAAAAAAAAAAAAAIDAAEREhMj/9oACAEBAAEFAk+dNPUGIF5csla9pyCp/8QAFREBAQAAAAAAAAAAAAAAAAAAABL/2gAIAQMBAT8BS//EABcRAQADAAAAAAAAAAAAAAAAAAAREmH/2gAIAQIBAT8BlbH/xAAdEAACAQQDAAAAAAAAAAAAAAAAARICAxMhMUGh/9oACAEBAAY/Alb7SGzIquUSl4bZpH//xAAbEAEAAgIDAAAAAAAAAAAAAAABABExUUFxof/aAAgBAQABPyEG2D3KozqHKQWOYu5owYryjUKAn//aAAwDAQACAAMAAAAQGA//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREhYf/aAAgBAwEBPxCKrRdH/8QAFhEBAQEAAAAAAAAAAAAAAAAAADEB/9oACAECAQE/EIjV/8QAHRABAQACAgMBAAAAAAAAAAAAAREAIUFRMWGh0f/aAAgBAQABPxC1q2ZqnZ9zhB2dsvOg8F3miGsAEnu4raj50wUc0Cv7n//Z",aspectRatio:1.5,src:"/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-f2ac0.jpeg",srcSet:"/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-567e3.jpeg 158w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-c3206.jpeg 315w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-f2ac0.jpeg 630w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-0c4a5.jpeg 945w,\n/static/1*Kp3dePIQiFvW6HuPg7Dxpg-06afbdec54774c60f910c7967f66616d-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}},next:{frontmatter:{path:"/blog/poképroject-dev-diary-day-six/",tags:["Ssl","Nginx","Pokemon","Agile","Hackathon"],title:"PokéProject Dev Diary: Day Six",date:"2016-09-26T08:16:02.077Z",description:"Move fast, break shit.",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABnoFOIUD/AP/EABgQAAMBAQAAAAAAAAAAAAAAAAACAxES/9oACAEBAAEFApNwJJXlh//EABgRAAIDAAAAAAAAAAAAAAAAAAECEBEh/9oACAEDAQE/AUFjY//EABgRAAMBAQAAAAAAAAAAAAAAAAABAgMh/9oACAECAQE/AdG5rgj/xAAZEAABBQAAAAAAAAAAAAAAAAABAAIQQVH/2gAIAQEABj8COouuP//EABkQAAMBAQEAAAAAAAAAAAAAAAABESExQf/aAAgBAQABPyFFYqWN+FEvuQej/9oADAMBAAIAAwAAABCAD//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxApjJGb/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAgEBPxDYrstBv//EABkQAAMBAQEAAAAAAAAAAAAAAAABEUExkf/aAAgBAQABPxBBTh9g1KianVCLI//Z",aspectRatio:2.56,src:"/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-f2ac0.jpeg",srcSet:"/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-567e3.jpeg 158w,\n/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-c3206.jpeg 315w,\n/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-f2ac0.jpeg 630w,\n/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-0c4a5.jpeg 945w,\n/static/1*p5_Ies7YdsgoJcMFxHQoHg-6a5de12e08fae9e02858503f203e0187-952fc.jpeg 1024w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}}}}});
//# sourceMappingURL=path---blog-git-zero-to-git-hero-936e541b6520267bde7c.js.map