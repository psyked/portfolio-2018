---
path: /blog/if-its-not-in-bitbucket-it-doesnt-exist/
layout: post
title: If it’s not in Bitbucket, it doesn’t exist.
featured: true
date: 2016-09-19T07:00:00Z
---

##Reinforcing Development Best Practices with brutally inflexible rules.

A fly-on-the-wall at the MMT Digital offices might occasionally hear mutterings along the lines of;

> “If it’s not in Bitbucket, it doesn’t exist.”

A phrase which, when uttered, roughly translates as *“what the heck are you doing? how am I supposed to work with this?”* and essentially boils down to the belief that;

>Once you understand source control, you can’t
fathom why you would ever work without it again.

*Source control* is essentially the management of versions and changes to files. But why should we insist so strongly that everyone uses it?

Having a decent source control system in place allows multiple developers to work in parallel on the same project and project files, gives each of them access to an annotated code history, and the ability to create or combine parallel sets of changes from others into a final, ‘working version’ of that code.

Using source control in this manner also makes the automation of testing and deployment processes possible, improving our development efficiency.

The final, and most **business critical** point is that, using a Distributed Version Control System (DVCS) in conjunction with a service like Bitbucket makes us ‘Fireproof’ in the sense that — if our offices were to suffer an overnight calamity — we still have multiple intact copies of the source code, from which the entire project could be restored.

This final ‘business critical’ point is where our rule originates. The best rules work on many levels, you see.

- From a business point of view, we care a lot about how we could continue, should the unthinkable happen.
- From a developers’ point of view, we want contextual and historical information about our code base.
- From a team’s point of view, we want to reduce the obstacles to working in parallel on the same project.

We can’t do any of this *without* source control, but we can do all of it *with* source control, and it’s for that reason we say:

> “If it’s not in [source control], it doesn’t exist.”

Harsh maybe, but with solid reasoning behind it.

This is a repost of the an article [originally published on Medium.](https://medium.com/@psyked_james/if-its-not-in-bitbucket-it-doesnt-exist-897d925abac1#.xy43xyhhh)