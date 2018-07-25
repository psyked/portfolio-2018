---
path: /blog/modular-code-libraries-ftw-d0db70a5365a/
layout: "post"
title: "Modular Code Libraries FTW"
description: "Thanks to the fact that I work alongside a bunch of awesome people, today I’ve been introduced to the date-fns library, and it struck a…"
url: "https://medium.com/@psyked/modular-code-libraries-ftw-d0db70a5365a"
image: https://cdn-images-1.medium.com/max/1200/1*pZ9iKrsUlMQIo_isecaj0A.png
src: "https://cdn-images-1.medium.com/max/1200/1*pZ9iKrsUlMQIo_isecaj0A.png"
author: "https://medium.com/@psyked"
published_time: 2017-01-12T09:07:00.606Z
creator: "@psyked"
tags:
- JavaScript
- Web Development
- Frameworks
date: 2017-01-12T09:07:00.606Z
---

![](1*pZ9iKrsUlMQIo_isecaj0A.png)

# Modular Code Libraries FTW

## Thanks to the fact that I work alongside a bunch of awesome people, today I’ve been introduced to the [date-fns](https://date-fns.org/) library, and it struck a chord with me because it the epitomises a way of thinking about creating manageable, maintainable source code.

Code is ultimately a solution to a problem. As developers we’re constantly writing code, and the more code we write, the more experience we acquire, the better we get. A big advantage to having previously written code is in being able to reuse that same solution in the future. The advantage to using other people’s code, when it comes in the form of a library or a framework, is in being able to use their solutions without having to invest your own time in the fine details of a solution.

#### Modules?

Modular code (for the purposes of this piece at least) are those reusable snippets of code which we copy & paste between projects, or those small, tightly-focussed libraries of code with a well-defined scope and purpose. [Moment.js](http://momentjs.com/) and [Vibrant.js](http://jariz.github.io/vibrant.js/) are two examples of libraries which I’ve used recently, in addition to [date-fns.](https://date-fns.org/) The key thing about these libraries is that they’re simple enough to drop into an existing project and quickly get it working without having to restructure large swathes of the existing code.

#### Modules vs. Frameworks

Frameworks are a larger beast to introduce to — or remove from — a project. For everything they offer, it’s not really flexibility and universal suitability that’s high on the priorities of a framework.

Adopting [React](https://facebook.github.io/react/), [Angular](https://angularjs.org/), [Backbone](http://backbonejs.org/) or any of the other Javascript frameworks out there ends up locking your source code into its own patterns. Once you’ve adopted a framework you’re more-or-less stuck with it, with the structure, with its quirks, with its ways of thinking, and you can’t escape it without a considerable effort and an evitable rewrite. Modules on the other hand, those you _can_ effectively find drop-in replacements for.

#### Easier to manage, easier to maintain.

Being able to easily replace portions of your source code is great for shifting requirements, and seems like a great idea for developing code in line with the Agile methodology. It’s entirely possible to develop without using a framework, and if you do so you don’t lose that flexibility. Modules also have a much shorter learning curve than an entire framework, so it’s much easier to get to grips with them and use them properly, the learning curve is shallower for the codebase as a whole and thus the long-term maintenance of a project is easier to handle.

In short I prefer a modular, libraries-based codebase than a particular popular-right-now framework. And [date-fns](https://date-fns.org/) is one of the better implementations of a format-agnostic library of code that I’ve seen.