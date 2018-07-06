---
path: /node41/
layout: post
title: ActionScript Debugging
date: 2007-02-28T16:43:42Z
tags:
- actionscript
---

This is a simple little segment of code that i find very useful to work my way through flash files. It basically lists all the properties (which includes direct children) of the target movieclip. Here's a few implimentations...

(Set n beforehand with something like var n = my_mc)

<code>for(var i in n){
trace(i+" : "+n[i]);
};</code>

and thats it in a nutshell. Your output will be something like this;

<code>property : value</code>

Ok, so thats not a very good example, but try it and you'll see.
Here's a function-based version for you...

<code>traceProperties = function(movieclip){
n = movieclip;
for(i in n){
trace(i+" : "+n[i]);
}
}</code>

and it's Actionscript 2.0 sibling...

<code>function traceProperties(n:Object):Void{
for(var i in n){
trace(i+" : "+n[i]);
}
}</code>