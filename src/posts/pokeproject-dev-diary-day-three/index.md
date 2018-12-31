---
path: /blog/poképroject-dev-diary-day-three/
layout: "post"
title: "PokéProject Dev Diary: Day Three"
description: "Changing the theme a bit, today has all been about data, APIs and data transformation."
url: "https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-three-31afdf3e1302"
image: 1*Jdy8DfU9xn_2jW8i8O3s6g.gif
src: "https://cdn-images-1.medium.com/max/1200/1*Jdy8DfU9xn_2jW8i8O3s6g.gif"
author: "https://medium.com/@psyked"
published_time: 2016-09-17T13:21:53.274Z
creator: "@psyked"
tags:
- JavaScript
- Nodejs
- Agile
- Pokemon
date: 2016-09-17T13:21:53.274Z
---

> “Being as [LEAN](https://en.wikipedia.org/wiki/Lean_software_development) and [AGILE](https://en.wikipedia.org/wiki/Agile_software_development) as possible _can_ be interpreted as being as-lazy-as-possible about your solutions for as-long-as they work, and that’s certainly the case so far with PokéProject.”

But now it’s become apparent that the original “_Google it, ctrl+c, ctrl+v”_ data solution is no longer fit for purpose, so I’ve gone back to the drawing board to create a Node.js-based data collector, which harvests data from endpoints like [PokeAPI](https://pokeapi.co) and transforms it into a streamlined data set, one that’s both _more complete_ and _more tailored_ to the task at hand.

![](1*Jdy8DfU9xn_2jW8i8O3s6g.gif)

The end result of this means a fair amount of changes under the hood to support this new data structure, but it does make it easier to control and expand — I’ve also increased the original set of Generation 1 Pokémon to also include the 100 extra from Generation 2 — bringing the total number up to 251 Pokémon (which is all of those that I remember from my childhood.)

![](1*R01SfEw7eI36hn5NhgGh_g.png)

#### Retrospective

Having more control over the data in our application is an important because it means we can tweak the structure to suit our needs. For the moment we’ve not got a reason to adjust things in any major sense, but being able to do so should serve us well in the future. The main driving force for this data work so far has been to plug the gaps in the data and avoid having to do additional error-handling work.

#### Next Steps

Having PokéProject online for a day or so now has spawned some feedback — such as a desire for saveable outputs and feedback on the UI, so our next steps are going to involve incorporating some of that feedback.

---

PokéProject is now online @ [https://www.pokeproject.co.uk/](https://www.pokeproject.co.uk/)