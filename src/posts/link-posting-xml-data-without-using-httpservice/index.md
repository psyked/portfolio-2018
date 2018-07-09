---
path: /blog/link-posting-xml-data-without-using-httpservice/
layout: post
title: 'Link: POSTing XML data, without using HTTPService'
date: 2009-06-21T17:32:49Z
tags:
- external-links
- flex
- httpservice
- post-tag
- rest
---

<em>[This came up a while ago, but I thought I'd promote the link I found that solved my woes.]</em>

The situation: I'm trying to interact with a REST API, via Flex and AIR.  Now, I know that the HTTPService class exists in Flex to make it really quick and easy to send and recieve data, but the downside of the HTTPService class is that it assumes a little top much.  It assumes for example, that any data you're trying to send comes in a name/value pair - which my data doesn't. The REST webservice I'm using requires raw XML data, but the HTTPService class doesn't do that.

The solution?  Well, there's only one - don't use the HTTPService class, and code everything yourself.  Thankfully, this link I found tells you exactly how to do that, along with examples.

<a href="http://tacfug.org/blog/index.cfm/2007/3/26/Flex--Posting-XML-without-using-mxhttpservice-">http://tacfug.org/blog/index.cfm/2007/3/26/Flex--Posting-XML-without-using-mxhttpservice-</a>