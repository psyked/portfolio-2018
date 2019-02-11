webpackJsonp([44694691785112],{1383:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/modular-code-libraries-ftw/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-56bef.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 630px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 31.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABdElEQVQY0w3IS0+CcAAAcL5Hx7ZWzUvP2XNpgJBTVODPw8AEJDQFBUxBxbTStNZjy1ZbrUut1cW2ttbcOtUHq9/xB3XAzGsj81I3nEKxqYI3lSHhTQTdMmTdZPDjIHqvpb6vjY9+3lUFK1+xUprBp7cxQpN5aIhOJP3rZ5XUzaHUKsktKVnNkf18VqTQFLmCwsSxJmux+J6QO2h1nYrTK+9kOdHC5gpgGWrGJ5HpVXGL8XTWTZO7DN2msB2FrNmVml31yqrGAweEyyAzMnO9amkfxYuy2JAS67MR6PMofCfRLBNYq9LnOnKXwxw8mNfDgwNWUGptEMrQyTqH/d63fpBFM7bkcXjhv7j9yHwUMjeY5wj5BPxGeCOBhC5Yqs7CqkvZJ+IgK+hEDEc4lpe+LpwrV00niI7t7AqqZWRAIA7B474RHHjQFArjthdWacV+d/nTR3ysqzZ9U/YSNc20PUUc1vVGZLPRvbzteVzIb5lNECX+ALqejmuavVc9AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="1 pZ9iKrsUlMQIo isecaj0A"\n        title=""\n        src="/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-082ce.png"\n        srcset="/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-c7cb1.png 158w,\n/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-93041.png 315w,\n/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-082ce.png 630w,\n/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-c4006.png 945w,\n/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-56bef.png 1200w"\n        sizes="(max-width: 630px) 100vw, 630px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h1>Modular Code Libraries FTW</h1>\n<h2>Thanks to the fact that I work alongside a bunch of awesome people, today I’ve been introduced to the <a href="https://date-fns.org/">date-fns</a> library, and it struck a chord with me because it the epitomises a way of thinking about creating manageable, maintainable source code.</h2>\n<p>Code is ultimately a solution to a problem. As developers we’re constantly writing code, and the more code we write, the more experience we acquire, the better we get. A big advantage to having previously written code is in being able to reuse that same solution in the future. The advantage to using other people’s code, when it comes in the form of a library or a framework, is in being able to use their solutions without having to invest your own time in the fine details of a solution.</p>\n<h4>Modules?</h4>\n<p>Modular code (for the purposes of this piece at least) are those reusable snippets of code which we copy &#x26; paste between projects, or those small, tightly-focussed libraries of code with a well-defined scope and purpose. <a href="http://momentjs.com/">Moment.js</a> and <a href="http://jariz.github.io/vibrant.js/">Vibrant.js</a> are two examples of libraries which I’ve used recently, in addition to <a href="https://date-fns.org/">date-fns.</a> The key thing about these libraries is that they’re simple enough to drop into an existing project and quickly get it working without having to restructure large swathes of the existing code.</p>\n<h4>Modules vs. Frameworks</h4>\n<p>Frameworks are a larger beast to introduce to — or remove from — a project. For everything they offer, it’s not really flexibility and universal suitability that’s high on the priorities of a framework.</p>\n<p>Adopting <a href="https://facebook.github.io/react/">React</a>, <a href="https://angularjs.org/">Angular</a>, <a href="http://backbonejs.org/">Backbone</a> or any of the other Javascript frameworks out there ends up locking your source code into its own patterns. Once you’ve adopted a framework you’re more-or-less stuck with it, with the structure, with its quirks, with its ways of thinking, and you can’t escape it without a considerable effort and an evitable rewrite. Modules on the other hand, those you <em>can</em> effectively find drop-in replacements for.</p>\n<h4>Easier to manage, easier to maintain.</h4>\n<p>Being able to easily replace portions of your source code is great for shifting requirements, and seems like a great idea for developing code in line with the Agile methodology. It’s entirely possible to develop without using a framework, and if you do so you don’t lose that flexibility. Modules also have a much shorter learning curve than an entire framework, so it’s much easier to get to grips with them and use them properly, the learning curve is shallower for the codebase as a whole and thus the long-term maintenance of a project is easier to handle.</p>\n<p>In short I prefer a modular, libraries-based codebase than a particular popular-right-now framework. And <a href="https://date-fns.org/">date-fns</a> is one of the better implementations of a format-agnostic library of code that I’ve seen.</p>',frontmatter:{title:"Modular Code Libraries FTW",date:"January 12, 2017",tags:["Medium","JavaScript","Web Development","Frameworks"],url:"https://medium.com/@psyked/modular-code-libraries-ftw-d0db70a5365a",image:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABdElEQVQY0w3IS0+CcAAAcL5Hx7ZWzUvP2XNpgJBTVODPw8AEJDQFBUxBxbTStNZjy1ZbrUut1cW2ttbcOtUHq9/xB3XAzGsj81I3nEKxqYI3lSHhTQTdMmTdZPDjIHqvpb6vjY9+3lUFK1+xUprBp7cxQpN5aIhOJP3rZ5XUzaHUKsktKVnNkf18VqTQFLmCwsSxJmux+J6QO2h1nYrTK+9kOdHC5gpgGWrGJ5HpVXGL8XTWTZO7DN2msB2FrNmVml31yqrGAweEyyAzMnO9amkfxYuy2JAS67MR6PMofCfRLBNYq9LnOnKXwxw8mNfDgwNWUGptEMrQyTqH/d63fpBFM7bkcXjhv7j9yHwUMjeY5wj5BPxGeCOBhC5Yqs7CqkvZJ+IgK+hEDEc4lpe+LpwrV00niI7t7AqqZWRAIA7B474RHHjQFArjthdWacV+d/nTR3ysqzZ9U/YSNc20PUUc1vVGZLPRvbzteVzIb5lNECX+ALqejmuavVc9AAAAAElFTkSuQmCC",aspectRatio:3.2,src:"/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-7a72d.png",srcSet:"/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-8baea.png 158w,\n/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-69705.png 315w,\n/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-7a72d.png 630w,\n/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-514af.png 945w,\n/static/1*pZ9iKrsUlMQIo_isecaj0A-b7aff8786a0651171f3382f504dd180c-5e778.png 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}},description:"Thanks to the fact that I work alongside a bunch of awesome people, today I’ve been introduced to the date-fns library, and it struck a…"}}},pathContext:{prev:{frontmatter:{path:"/blog/what-to-look-for-from-a-prospective-developer/",tags:["Programming","Web Development","Interviewing","Job Interview"],title:"What to look for from a (prospective) Developer",date:"2017-01-10T09:12:00.566Z",description:"I’ve been doing a lot of interviews recently so I thought I would share a little more information about what I’m looking for…",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABwpdQSSJ//8QAGBAAAwEBAAAAAAAAAAAAAAAAAQIQADP/2gAIAQEAAQUCOaHoxn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAASAx/9oACAEBAAY/AmZP/8QAGhABAQACAwAAAAAAAAAAAAAAAQAhMRBhcf/aAAgBAQABPyEA9W8DjfmbBbv/2gAMAwEAAgADAAAAEEM//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QV//EABwQAQACAgMBAAAAAAAAAAAAAAEAESFxMUGRof/aAAgBAQABPxAzVy0ECA1fs2+wNAgS3yUuDvEoyqtT/9k=",aspectRatio:1.4981273408239701,src:"/static/1*XIoDTJDLJK54iGi45TPrxQ-8682e4676231eaf6e13810e125a77e24-f2ac0.jpeg",srcSet:"/static/1*XIoDTJDLJK54iGi45TPrxQ-8682e4676231eaf6e13810e125a77e24-567e3.jpeg 158w,\n/static/1*XIoDTJDLJK54iGi45TPrxQ-8682e4676231eaf6e13810e125a77e24-c3206.jpeg 315w,\n/static/1*XIoDTJDLJK54iGi45TPrxQ-8682e4676231eaf6e13810e125a77e24-f2ac0.jpeg 630w,\n/static/1*XIoDTJDLJK54iGi45TPrxQ-8682e4676231eaf6e13810e125a77e24-0c4a5.jpeg 945w,\n/static/1*XIoDTJDLJK54iGi45TPrxQ-8682e4676231eaf6e13810e125a77e24-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}},next:{frontmatter:{path:"/blog/scribbling-away-during-meetings/",tags:["Design","Productivity"],title:"Scribbling away during meetings.",date:"2017-01-24T18:49:23.000Z",description:"I’ve become quite keen on making what’s known as “sketch notes” during meetings and presentations. It’s something that I first encountered…",image:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAejOa06KHhX/xAAZEAACAwEAAAAAAAAAAAAAAAAAAQIREiL/2gAIAQEAAQUCUdJdJVUxbMI//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEh/9oACAEDAQE/Aa1//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BGf/EABsQAAEEAwAAAAAAAAAAAAAAAAABAiExMkGR/9oACAEBAAY/ArkcmyyDJOFH/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFxQWH/2gAIAQEAAT8hFEwRXpUIgw+MsbB0lC+m5v2F5P/aAAwDAQACAAMAAAAQ5x//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxAKx//EABcRAQADAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8Qgpj/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFhcaHB/9oACAEBAAE/ELWWs77iCQFCFGdHmNy83gR7IDFpacv2GiLmMn3FV80eU//Z",aspectRatio:1.5056461731493098,src:"/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-f2ac0.jpeg",srcSet:"/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-567e3.jpeg 158w,\n/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-c3206.jpeg 315w,\n/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-f2ac0.jpeg 630w,\n/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-0c4a5.jpeg 945w,\n/static/1*V8WgG38jMeJ2lITvnlLM5A-eb75f8d6cd080b9d0b21fdb590d9bf1e-4e530.jpeg 1200w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}}}}});
//# sourceMappingURL=path---blog-modular-code-libraries-ftw-f43e8200d69b40c5be3c.js.map