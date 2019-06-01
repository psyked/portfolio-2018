---
path: /blog/uploading-files-to-trello-with-node-js/
layout: post
title: Uploading files to Trello with Node.js
date: 2017-05-18T20:38:43Z
tags:
- nodejs
- trello
---

[Trello](https://trello.com/) is one of my favourite low-budget Content Management Systems for bootstrapped projects (that is to say, projects with zero budget and not projects which use the bootstrap css framework.)

One of the more recent things I've had to do is upload files from my local machine and store them against a card in Trello. To achieve this I'm using Node.js and the [node-trello](https://github.com/adunkman/node-trello) module, with the following code:

```javascript
const fs = require('fs')
const path = require('path')
const Trello = require('node-trello')
const t = new Trello(trelloAuthKey, trelloAuthToken)

t.post(`/1/cards/${cardId}/attachments`, { attachment: fs.createReadStream(path.resolve(__dirname, 'path/to/file.doc')) }, function (err, attachments) {
  if (err) throw err;
  console.log(attachments);
})
```

As you can see, the process of uploading files with this module is really simple. All you need to know is your Trello API credentials, the Id of the target card, and the path to the file to be uploaded on the local machine.