---
path: /blog/testing-performance-speed-and-best-practices-with-lighthouse-109803ce90ba/
title: "Testing Performance, Speed and Best Practices with Lighthouse"
description: "Web Development is an ever changing landscape, and as such we use a variety of tools to evaluate what we do. Like many others with a vested interest in the web, Google has its own projects, and…"
og:title: "undefined"
og:url: "https://medium.com/@psyked/testing-performance-speed-and-best-practices-with-lighthouse-109803ce90ba"
og:image: "https://cdn-images-1.medium.com/max/1200/0*gOsG-4Rh7_nf219f.jpg"
og:description: "Lighthouse is an open-source, automated tool for improving the quality of your web apps."
twitter:description: "Lighthouse is an open-source, automated tool for improving the quality of your web apps."
twitter:image:src: "https://cdn-images-1.medium.com/max/1200/0*gOsG-4Rh7_nf219f.jpg"
author: "James Ford"
og:type: "article"
twitter:card: "summary_large_image"
article:author: "https://medium.com/@psyked"
article:published_time: 2017-01-28T20:31:07.000Z
twitter:creator: "@psyked"
date: 2017-01-28T20:31:07.000Z
---
---

# Testing Performance, Speed and Best Practices with Lighthouse

> _Lighthouse is an open-source, automated tool for improving the quality of your web apps._

![](0*gOsG-4Rh7_nf219f.jpg)

Web Development is an ever changing landscape, and as such we use a variety of tools to evaluate what we do. Like many others with a vested interest in the web, Google has its own projects, and [Lighthouse](https://developers.google.com/web/tools/lighthouse/) is one of them.

I find the Lighthouse tool _particularly_ interesting for two reasons — firstly because it looks at a few of the more recent specs like **Progressive Web Apps** and the difficult-to-evaluate concepts like perceived speed, and secondly because it’s developed by Google, which implies that it’s looking at the kind of website optimisations that Google cares about when indexing a website.

### What Lighthouse checks

A few of the things that Lighthouse currently tests for are:

*   Offline/flaky connection support
*   Page load performance
*   Progressive Enhancement
*   Secure connection (HTTPS)
*   Mobile-friendliness
*   Page render speed / avoiding “jank”
*   Modern accessibility tags

### Running Lighthouse

There are two ways to run a set of Lighthouse tests. One method is through a Chrome Extension, which you can install through the [Chrome Web Store](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) or as a Node module on [NPM.](https://www.npmjs.com/package/lighthouse)

And if you’re interested in an example report, take a look at [the report for www.psyked.co.uk](https://googlechrome.github.io/lighthouse/viewer/?gist=9573cb9302e15405026b40098c8fd342)

---

_Originally published at_ [_www.psyked.co.uk_](https://www.psyked.co.uk/testing-performance-speed-and-best-practices-with-lighthouse/) _on January 28, 2017._