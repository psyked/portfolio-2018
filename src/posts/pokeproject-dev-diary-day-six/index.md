---
path: /blog/poképroject-dev-diary-day-six/
layout: "post"
title: "PokéProject Dev Diary: Day Six"
description: "Move fast, break shit."
url: "https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-six-c263ef30fd0c"
image: 1*p5_Ies7YdsgoJcMFxHQoHg.jpeg
src: "https://cdn-images-1.medium.com/max/1200/1*p5_Ies7YdsgoJcMFxHQoHg.jpeg"
author: "https://medium.com/@psyked"
published_time: 2016-09-26T08:16:02.077Z
creator: "@psyked"
tags:
- Ssl
- Nginx
- Pokemon
- Agile
- Hackathon
date: 2016-09-26T08:16:02.077Z
---

Sometimes you wish you’d never started.

Well, day six was a bit of a depressing development experience.

What a depressing evening that was.

To cut a long story short, I started out with the aim improving the SEO of PokéProject by upgrading the website to use HTTPS, because that’s generally better and it has [an impact on your Google rankings](http://thenextweb.com/google/2015/12/17/unsecured-websites-are-about-to-get-hammered-in-googles-search-ranking/#gref). I used [LetsEncrypt](https://letsencrypt.org/) to get the certificates (which worked fine) and navigated the mysterious world of Nginx config files successfully, rebooted and we had the certificates all sorted.

Emboldened by this, I decided to go one step further, and that’s where it all fell apart. Because adding HTTPS was so unexpectedly simple, I thought I’d go a step further and add the [Pagespeed module](https://developers.google.com/speed/pagespeed/module/) to my server as well, bringing features like automated optimisations to bear. It turns out that’s much more complicated in practice. Three hours later and every website on the same box is offline and I can’t bring them back.

> “Just get it back online.”

My micro-deadlines get smaller and simpler, my success criteria re-defines itself to _“just get it back online”_ and in the end — at gone midnight — I end up reverting to a backup snapshot of the box.

#### Retrospective

Wow, that was humiliating. In retrospect I certainly shouldn’t have tried something so complicated as recompiling nginx without practicing it first in a safe environment, and in the same vein I really shouldn’t be working without decent backups or multiple environments.

In my day job we use multiple environments — Local, Dev, QA & Production — all of the time, so why did I think my side-projects should be any different?

Ugh. Well, lesson learned. Next time we’ll look at something a little more interesting, and stop mucking around with things we don’t understand.

---

PokéProject is (fortunately) back online at: [https://www.pokeproject.co.uk](https://www.pokeproject.co.uk)