webpackJsonp([0x97de813155c3],{1166:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/hallmarks-of-a-modern-development-workflow-continuous-integration-deployment-811b2545be39/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-11e54.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAHlVm8YD//EABgQAQADAQAAAAAAAAAAAAAAAAEAEBES/9oACAEBAAEFAg2JldLf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxABAAMAAAAAAAAAAAAAAAAAEAEhMf/aAAgBAQAGPwKodf/EABsQAAICAwEAAAAAAAAAAAAAAAERAFEQITFB/9oACAEBAAE/IS9BnqIdOKHSJKs//9oADAMBAAIAAwAAABDDD//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxAxf//EABcRAAMBAAAAAAAAAAAAAAAAAAEQEUH/2gAIAQIBAT8QF1f/xAAcEAEAAgIDAQAAAAAAAAAAAAABABExkSFBYYH/2gAIAQEAAT8QbpHwuOe6wsmo8obafA1iXFuf/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 E1XjKEGR0WniQFa2W1IIeg"\n        title=""\n        src="/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-af57e.jpeg"\n        srcset="/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-847f7.jpeg 158w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-93973.jpeg 315w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-af57e.jpeg 630w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-28cf9.jpeg 945w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-11e54.jpeg 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h1>Hallmarks of a Modern development workflow — Continuous Integration &#x26; Deployment</h1>\n<blockquote>\n<p><em>Software Development is a creative process, and as such it’s important to minimise the things which can disrupt your flow.</em></p>\n</blockquote>\n<p>A modern web development setup is one that harnesses the concepts of <a href="https://www.thoughtworks.com/continuous-integration">Continuous Integration</a> and <a href="https://www.agilealliance.org/glossary/continuous-deployment/">Continuous Deployment</a> to deliver the end result. Practically implementing these two concepts goes a long way to improving the efficiency of a project. Why? Well, it’s all about distractions.</p>\n<p><img src="/0*l3g-jcefVme6mQjx-fca46fa334d6ce0c298cab129d99f6b4.gif"></p>\n<p>Having an efficient, “hands-off” approach to validating and releasing code is an essential part of the way we work, primarily because it helps maintain our focus and avoids the need to context-switch.</p>\n<p>Before we had our fancy <em>Continuous Integration</em> and <em>Continuous Deployment</em> processes, we made manual deployments 😱. Back in those dark days, a human would log on to a server and copy files from place-to-place. It required collaboration with the development team and concentration lest a mistake be made.</p>\n<p>With CI/CD, the whole development and deployment process works like this:</p>\n<ol>\n<li>Work locally</li>\n<li>Test locally</li>\n<li>Commit code</li>\n<li>Push changes to Source Control</li>\n<li>Automated Tests</li>\n<li>Automated Deploy to Dev Environment</li>\n</ol>\n<p>Which for a developer means:</p>\n<ol>\n<li>Code</li>\n<li>Push</li>\n<li>Next task</li>\n</ol>\n<p>Rather than:</p>\n<ol>\n<li>Code</li>\n<li>Log on to server</li>\n<li>Copy files (wait…)</li>\n<li>Test</li>\n<li>Next task</li>\n</ol>\n<p>This is a much better setup because <strong>it greatly reduces the time spent not coding.</strong> In terms of effort, deploying code and testing it afterwards is the most laborious part of the process. Both automating the testing and deployment of source code and initiating it automatically saves time, effort and cognitive overhead, leaving developers free to continue doing what they do best — development.</p>\n<p>At <a href="https://www.mmtdigital.co.uk/">MMT Digital</a> we usually use <a href="https://www.jetbrains.com/teamcity/">TeamCity</a> to handle our CI/CD processes. I’ve also started looking at the newer pipeline features of <a href="https://docs.gitlab.com/ee/ci/pipelines.html">GitLab</a>, GitHub and <a href="https://bitbucket.org/product/features/pipelines">Bitbucket</a> on my personal projects as a way of achieving an automated CI/CD workflow.</p>\n<hr>\n<p><em>Originally published at</em> <a href="https://www.psyked.co.uk/a-modern-development-workflow-ci-and-cd/"><em>www.psyked.co.uk</em></a> <em>on January 30, 2017.</em></p>',frontmatter:{title:"Hallmarks of a Modern development workflow — Continuous Integration & Deployment",date:"January 30, 2017",tags:null,url:"https://medium.com/@psyked/hallmarks-of-a-modern-development-workflow-continuous-integration-deployment-811b2545be39",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAHlVm8YD//EABgQAQADAQAAAAAAAAAAAAAAAAEAEBES/9oACAEBAAEFAg2JldLf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxABAAMAAAAAAAAAAAAAAAAAEAEhMf/aAAgBAQAGPwKodf/EABsQAAICAwEAAAAAAAAAAAAAAAERAFEQITFB/9oACAEBAAE/IS9BnqIdOKHSJKs//9oADAMBAAIAAwAAABDDD//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxAxf//EABcRAAMBAAAAAAAAAAAAAAAAAAEQEUH/2gAIAQIBAT8QF1f/xAAcEAEAAgIDAQAAAAAAAAAAAAABABExkSFBYYH/2gAIAQEAAT8QbpHwuOe6wsmo8obafA1iXFuf/9k=",aspectRatio:1.6,src:"/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-f2ac0.jpeg",srcSet:"/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-567e3.jpeg 158w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-c3206.jpeg 315w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-f2ac0.jpeg 630w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-0c4a5.jpeg 945w,\n/static/1*E1XjKEGR0WniQFa2W1IIeg-88e56c7b4d111132901014635f2f93c1-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}},description:"Software Development is a creative process, and as such it’s important to minimise the things which can disrupt your flow."}}},pathContext:{prev:{frontmatter:{path:"/blog/testing-performance-speed-and-best-practices-with-lighthouse/",tags:["performance","testing","progressive-web-apps"],title:"Testing Performance, Speed and Best Practices with Lighthouse",date:"2017-01-28T20:31:07.000Z",description:null,image:null}},next:{frontmatter:{path:"/blog/a-modern-development-workflow-ci-and-cd/",tags:["web-development","continuous-integration","continuous-deployment"],title:"Hallmarks of a Modern development workflow - Continuous Integration & Deployment",date:"2017-01-30T09:15:00.000Z",description:null,image:null}}}}}});
//# sourceMappingURL=path---blog-hallmarks-of-a-modern-development-workflow-continuous-integration-deployment-811-b-2545-be-39-ac05fb9fc0e7ea247f9e.js.map