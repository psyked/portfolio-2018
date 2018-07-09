---
path: /blog/data-binding-an-array-in-flex/
layout: post
title: Data Binding an Array in Flex?
date: 2009-02-02T09:45:35Z
tags:
- flex
- array
- arraycollection
---

Can you do it?  No you can't.

Not directly anyway - Arrays aren't something that data binding works with in Flex.  ArrayCollection however, is something you <strong>can </strong>work with.  To use an Array as a bindable object, you can wrap it in an ArrayCollection.  It's similar, but not the same as an Array - you can't push, pull, pop or shift things anymore - you have to work with other methods like addItem or removeItem.

I would've liked to find that all of those classic array methods still worked, but what can you do?