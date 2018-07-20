---
path: /blog/playing-with-air/
layout: post
title: Playing with Air...
date: 2008-04-07T07:00:15Z
tags:
- air-applications
- ansi
- xml
---

I thought i'd do a little bit of serious work with Air - how about an application for converting text file formats? Well ok, it sounds boring, but it's a starting point. I'm not finished yet, but my deadline is pretty harsh (Wednesday, in fact!) so I'm hoping to have another update tomorrow, once I've ironed out a few remaining bugs (and removed the chance that the application will corrupt your files!)

![adobeairpost.jpg](http://uploads.psyked.co.uk/2008/04/adobeairpost.jpg)

## What is it?

This Air app. should take an ANSI or other unusually formatted text file, and save it out as UTF-8.

## Why?

The need for this app. is pretty simple, really. If you make a Macro - don't shudder - to export MS Office content to text files (like, xml files) you can't specify the encoding of the outputted files. Although the content makes it out, it's encoded in (usually) Windows-1252 format (aka ANSI). When Flash - or many other XML-reading products, like Internet Explorer or Firefox - import the XML file, and come across incorrectly encoded characters, they tend to crash and burn. If the file is properly saved as UTF-8 however, everyone plays nicely. Now this can be done by opening the file in notepad and changing the encoding type, but that wouldn't be so fun, would it?

## When can I try it?

A safe, stable version should be available aroundabout the 9th April. (Conventiently just after the Adobe On Air tour)