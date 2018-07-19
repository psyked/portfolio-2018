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

### *******And a little bit of custom-font magic...**

### ![johnny.jpg](/content/images/2008/03/johnny.jpg)

Although I do like writing lovely elegant code I'm also a big fan of 'the cheap hack'! Here's one I used last week to get round the age old problem of dynamic text boxes in Flash not supporting superscript and subscript. You need to do the following:

1.  Install the ggsuperscript and ggsubscript fonts, available from [GG's Flash Blog](http://blog.ggshow.com/index.php/reference?cat=121 "Open link in a new window")
2.  Make sure that you have 2 dynamic text boxes offstage with the 2 fonts embedded.
3.  Then you can use the following code to insert text into a dynamic text box (in this example it's called 'textObject')
4.  Job done!

> //#######################################

var myString:String = "Adobe<sup>TM</sup> C<sub>2</sub>H<sub>4</sub>"; var supStartExpression:RegExp = new RegExp("<sup>", "g") var supEndExpression:RegExp = new RegExp("</sup>", "g") var subStartExpression:RegExp = new RegExp("<sub>", "g") var subEndExpression:RegExp = new RegExp("</sub>", "g")

myString = myString.replace(supStartExpression, "<font face="GG Superscript">") myString = myString.replace(supEndExpression, "</font>") myString = myString.replace(subStartExpression, "<font face="GG Subscript">") myString = myString.replace(subEndExpression, "</font>")

textObject.htmlText = myString

//####################################### The above code uses the new AS3 'replace' method along with it's really cool new support for Regular Expressions (the "g" bit in the regular expression makes sure that it matches and replaces ALL instances of the string). Of course you could just use the <font> tags in your code and forget all the Regular Expression stuff. I was just being a ponce!

If you could be bothered you could even extend the string class etc, etc. If you are using ActionScript 2.0 you could do something really nasty like:

> //#######################################

String.prototype.replace = function(find, replace) { return this.split(find).join(replace); };

var str = originalString.replace("<sup>", "<font face="GG Superscript">"); str = str.replace("</sup>", "</font>"); str = originalString.replace("<sub>", "<font face="GG Subscript">"); str = str.replace("</sub>", "</font>"); textField.htmlText = str;

//####################################### Have fun.....