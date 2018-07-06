---
path: /a-rather-crude-fql-syntax-pretty-printer/
layout: post
title: A (rather crude) FQL syntax pretty-printer.
date: 2011-06-14T20:08:34Z
tags:
- facebook
---

I've been working with <a title="Open the Facebook Developer Documentation in a new window." href="https://developers.facebook.com/docs/reference/fql/" target="_blank">FQL</a> - Facebooks' SQL-like syntax - and I wanted a way to nicely format FQL queries, just as its possible to format JSON data.

For example, I wanted a query like this one:
<pre>"SELECT uid,name,birthday,birthday_date FROM user WHERE uid
IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY
birthday_date ASC"</pre>

To look more like this one:
<pre>"SELECT uid,name,birthday,birthday_date
    FROM user
    WHERE uid
    IN (
        SELECT uid2
            FROM friend
            WHERE uid1 = me()
    )
    ORDER BY birthday_date ASC"</pre>

Apparently, there's not much out there for formatting SQL syntax data, so I thought I'd make one myself. It's not perfect, but it works good enough for now - maybe I'll have a chance to improve it further in future.

The code itself is stored on GitHub, and its Gist looks like this:

<script src="https://gist.github.com/1025740.js"> </script>