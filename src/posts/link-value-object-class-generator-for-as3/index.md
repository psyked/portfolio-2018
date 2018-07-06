---
path: /link-value-object-class-generator-for-as3/
layout: post
title: 'Link: Value Object Class generator for ActionScript 3'
date: 2010-03-26T09:08:42Z
tags:
- actionscript
- external-links
---

A bit specialist perhaps, and the need for such a tool might become redundant if the Flash Builder hype is to be believed, but I found this quite useful for speeding up the process of writing a value-object class in AS3.

<a href="http://projects.stroep.nl/ValueObjectGenerator/">http://projects.stroep.nl/ValueObjectGenerator/</a>
<h3>What is a value object anyway?</h3>
For the uninitiated, a value object class is essentially a class with very little or no application logic inside it.

Instead of being a file that actually does something, it's more of a class for just storing data.  What makes it special is that AS3 classes are not all dynamic, so you have to plan what data you need to store and how you'll store it; and you can achieve a vast majority of that with value object classes.

If you're coming from an AS2 or Flash IDE background you might think it's a bit unnecessary or even frustrating, but when you plug value object classes into a development environment like Flex Builder you see where it comes in useful, when it can actually gives you useful autocomplete suggestions, and warns you if you're passing the wrong type of data into your classes.