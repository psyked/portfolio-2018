---
path: /blog/git-zero-to-git-hero/
layout: post
title: Git Zero to Git Hero
date: 2016-09-20T20:31:54Z
---

##Mastering git requires a mentor. Let me be yours.

###Getting started with git
If reading is your thing, be sure to check out these ‘git basics’ guides. All of them cover the same content, but with a slightly different angle.

* https://guides.github.com/activities/hello-world/
* http://alistapart.com/article/get-started-with-git
* http://rogerdudler.github.io/git-guide/
* https://teamtreehouse.com/library/git-basics

Okay, so you’ve got the basics. The next question is, how do you improve your git technique and become a git master?

###Write better commit messages
Your commit messages exist for *you* and *your benefit,* so you’re doing yourself a disservice to not be writing them in a way that will actually be useful to you in a year, six months, a week, a day or even an hour.

Go out and write yourself the best darn messages you can, all the time, with the help of this post from Tim Pope:

* http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

###Branches and branching strategy
A solid understanding of branching will make sure that your commit logs actually make sense historically, allows you to work with parallel versions of your source code and keep your master branch focussed, neat and tidy.

Our recommended branching ‘strategy’ is:

* The **master** branch represents your *stable* release.
* The **development** branch is for your *work in progress*.
* Individual **features** should be developed in their own branch.
* **Features** are branched from the **development** branch.
* *Completed* **features** are merged into the **development** branch.
* *Stable* **development** branches get merged into the **master** branch.

To help solidify your knowledge about branches, have a play with this tool:

* http://learngitbranching.js.org/

###Craft your commits
>“A commit, like a well-designed function or class, should represent a single concept. A distinct, cohesive commit is easy to understand, review, and, if necessary, revert.”

The real world of development is a little messy, but your source code and your git commits don’t have to represent this, and you can perfect the contents of your commit as you make it, so that your commit meets these goals — distinct, cohesive and focussed.

* http://blog.carbonfive.com/2011/10/10/crafting-commits-in-git/
* https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging

###Use an IDE, like SourceTree
Does branching get you down, and crafting commit messages seem a little overly complex? Learning the basics with the ‘good old console’ has its advantages, but you don’t have to suffer doing things the *hard way* all the time. Using a more advanced desktop application gives you a much easier way to visualise your code changes and craft your commits, without all the complexity of its command-line counterpart.

* https://www.sourcetreeapp.com/

This is a repost of an article [originally published on Medium](https://medium.com/@psyked_james/git-zero-to-git-hero-900578ab90c2#.2fvj1x1tn)