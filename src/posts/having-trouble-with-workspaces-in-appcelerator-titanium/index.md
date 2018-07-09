---
path: /blog/having-trouble-with-workspaces-in-appcelerator-titanium/
layout: post
title: Having trouble with workspaces in Appcelerator Titanium?
date: 2011-07-19T09:05:51Z
---

So I was having some trouble with corrupted workspaces in Appcelerator Titanium. Every time I launched the application it would try opening this corrupt workspace, and now offer any options for selecting a different one.

The solution? In the end, I just had to resort to deleting the entire <code>.metadata</code> folder of the Workspace.

Nuclear option maybe, but it worked, and the Titanium Studio was at least able to open for long enough for me to change or rebuild the workspace.