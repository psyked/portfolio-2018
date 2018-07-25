webpackJsonp([0xf94f8b94ae95],{1350:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Psyked: James' Web Development website",author:"James Ford"}},markdownRemark:{id:"/Users/James/Repositories/portfolio-2018/src/posts/uploading-files-to-trello-with-node-js/index.md absPath of file >>> MarkdownRemark",html:"<p><a href=\"https://trello.com/\">Trello</a> is one of my favourite low-budget Content Management Systems for bootstrapped projects (that is to say, projects with zero budget and not projects which use the bootstrap css framework.)</p>\n<p>One of the more recent things I've had to do is upload files from my local machine and store them against a card in Trello. To achieve this I'm using Node.js and the <a href=\"https://github.com/adunkman/node-trello\">node-trello</a> module, with the following code:</p>\n<pre><code class=\"language-javascript\">const fs = require('fs')\nconst path = require('path')\nconst Trello = require('node-trello')\nconst t = new Trello(trelloAuthKey, trelloAuthToken)\n\nt.post(`/1/cards/${cardId}/attachments`, { attachment: fs.createReadStream(path.resolve(__dirname, 'path/to/file.doc')) }, function (err, attachments) {\n  if (err) throw err;\n  console.log(attachments);\n})\n</code></pre>\n<p>As you can see, the process of uploading files with this module is really simple. All you need to know is your Trello API credentials, the Id of the target card, and the path to the file to be uploaded on the local machine.</p>",frontmatter:{title:"Uploading files to Trello with Node.js",date:"May 18, 2017",tags:["nodejs","trello"],url:null,image:null,description:null}}},pathContext:{prev:{frontmatter:{path:"/blog/generating-images-for-download-with-html5-and-canvas/",tags:["html5","javascript","canvas"],title:"Generating images for download with HTML5 and Canvas",date:"2017-05-01T08:57:00.000Z"}},next:{frontmatter:{path:"/blog/pokeproject-adventures-with-lego-bricks-7f24c02f6d9d/",tags:null,title:"PokéProject: Adventures with LEGO Bricks",date:"2017-06-05T11:45:10.366Z"}}}}}});
//# sourceMappingURL=path---blog-uploading-files-to-trello-with-node-js-59ac94c24f87622f50c8.js.map