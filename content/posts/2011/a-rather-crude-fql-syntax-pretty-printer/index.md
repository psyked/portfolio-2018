---
path: /blog/a-rather-crude-fql-syntax-pretty-printer/
layout: post
title: A (rather crude) FQL syntax pretty-printer.
date: 2011-06-14T20:08:34Z
tags:
- facebook
---

I've been working with [FQL](https://developers.facebook.com/docs/reference/fql/ "Open the Facebook Developer Documentation in a new window.") \- Facebooks' SQL-like syntax - and I wanted a way to nicely format FQL queries, just as its possible to format JSON data.

For example, I wanted a query like this one:

    "SELECT uid,name,birthday,birthday_date FROM user WHERE uid
    IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY
    birthday_date ASC"

To look more like this one:

    "SELECT uid,name,birthday,birthday_date
        FROM user
        WHERE uid
        IN (
            SELECT uid2
                FROM friend
                WHERE uid1 = me()
        )
        ORDER BY birthday_date ASC"

Apparently, there's not much out there for formatting SQL syntax data, so I thought I'd make one myself. It's not perfect, but it works good enough for now - maybe I'll have a chance to improve it further in future.

The code itself is stored on GitHub, and its [Gist](https://gist.github.com/psyked/1025740) looks like this:

    function formatFQL(input:String):String 
    {
        var output:String = "";
        var indent:String = "";
        var queries:Array = input.split("SELECT");
        for (var i:int = 1; i < queries.length; i++) {
            indent += "    ";
            output += "SELECT" + queries[i].split("FROM").join("\n" + indent + "FROM").split("WHERE").join("\n" + indent + "WHERE").split("IN").join("\n" + indent + "IN").split("ORDER").join("\n" + indent + "ORDER");
            indent += "    ";
            output += "\n" + indent;
        }
        return output;
    }

