---
path: /blog/superscript-and-subscript-with-actionscript/
layout: post
title: Superscript and Subscript - with Actionscript*
date: 2008-03-30T21:11:21Z
tags:
- actionscript
- external-links
- flash
- fonts
- text-formatting
---


<h3><strong>*</strong><strong>And a little bit of custom-font magic...</strong></h3>
<h3><img src="/content/images/2008/03/johnny.jpg" alt="johnny.jpg" /></h3>
Although I do like writing lovely elegant code I'm also a big fan of 'the cheap hack'! Here's one I used last week to get round the age old problem of dynamic text boxes in Flash not supporting superscript and subscript. You need to do the following:

<ol>
	<li>Install the ggsuperscript and ggsubscript fonts, available from <a href="http://blog.ggshow.com/index.php/reference?cat=121" title="Open link in a new window">GG's Flash Blog</a></li>
	<li>Make sure that you have 2 dynamic text boxes offstage with the 2 fonts embedded.</li>
	<li>Then you can use the following code to insert text into a dynamic text box (in this example it's called 'textObject')</li>
	<li>Job done!</li>
</ol>
<blockquote>//#######################################

var myString:String = "Adobe&lt;sup&gt;TM&lt;/sup&gt; C&lt;sub&gt;2&lt;/sub&gt;H&lt;sub&gt;4&lt;/sub&gt;";
var supStartExpression:RegExp = new RegExp("&lt;sup&gt;", "g")
var supEndExpression:RegExp = new RegExp("&lt;/sup&gt;", "g")
var subStartExpression:RegExp = new RegExp("&lt;sub&gt;", "g")
var subEndExpression:RegExp = new RegExp("&lt;/sub&gt;", "g")

myString = myString.replace(supStartExpression, "&lt;font face="GG Superscript"&gt;")
myString = myString.replace(supEndExpression, "&lt;/font&gt;")
myString = myString.replace(subStartExpression, "&lt;font face="GG Subscript"&gt;")
myString = myString.replace(subEndExpression, "&lt;/font&gt;")

textObject.htmlText = myString

//#######################################</blockquote>
The above code uses the new AS3 'replace' method along with it's really cool new support for Regular Expressions (the "g" bit in the regular expression makes sure that it matches and replaces ALL instances of the string). Of course you could just use the &lt;font&gt; tags in your code and forget all the Regular Expression stuff. I was just being a ponce!

If you could be bothered you could even extend the string class etc, etc. If you are using ActionScript 2.0 you could do something really nasty like:
<blockquote>//#######################################

String.prototype.replace = function(find, replace)
{
return this.split(find).join(replace);
};

var str = originalString.replace("&lt;sup&gt;", "&lt;font face="GG Superscript"&gt;");
str = str.replace("&lt;/sup&gt;", "&lt;/font&gt;");
str = originalString.replace("&lt;sub&gt;", "&lt;font face="GG Subscript"&gt;");
str = str.replace("&lt;/sub&gt;", "&lt;/font&gt;");
textField.htmlText = str;

//#######################################</blockquote>
Have fun.....