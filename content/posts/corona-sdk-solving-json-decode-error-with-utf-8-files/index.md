---
path: /blog/corona-sdk-solving-json-decode-error-with-utf-8-files/
layout: post
title: 'Corona SDK: Solving JSON decode error with UTF-8 files.'
date: 2011-11-14T21:41:45Z
tags:
- encoding
---

While working with JSON-encoded data files, I had some problems getting the darn things to work.  Apart from an unhelpful error message, the Corona simulator gave me no clues as to what was wrong. Turned out that the problem was actually to do with the UTF-8 encoding. And in the end, what fixed it was changing the UTF-8 encoding to **"UTF-8 without BOM"** \- the default UTF-8 encoding just didn't cut it.

![](corona-ribbon.png)