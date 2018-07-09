---
path: /blog/from-static-html-to-react-to-nuxt/
layout: post
title: 'PokéProject: from Static HTML, to React, to Nuxt.'
date: 2017-04-10T08:11:00Z
tags:
- web-development
- pokeproject
- nuxt
- react
---

#### Preface:
This is the story of my development journey with [PokéProject.](https://www.pokeproject.co.uk/) Hopefully this isn't the complete story, and there's much more to be told again in the future. This isn't a tale of the perfect development lifecycle, and I'm sure that if I started this project from scratch again a fair number of alternate choices would have been made.

Ready? _Let's get going._

### The idea 💡✨
The initial idea for PokéProject was to use the classic Pokémon games of my childhood as inspiration for codenames in my projects at work, as a sort of nostalgic injection of fun into the daily grind. 

Project codenames are a fairly big thing at [MMT Digital](https://www.mmtdigital.co.uk/) - each project team picks a codename for themselves as a bonding exercise during the first sprint - and often go so far as to support that with limited-edition swag, such as branded mugs, t-shirts or similar items. One of these project kick-off meetings sparked the idea for me, and it took shape from then on.

### The technical approach 🤔
I am primarily a Front End Developer, and my language of choice is JavaScript. For the very first version of PokéProject I figured that all I needed would be static HTML, CSS and some plain vanilla JavaScript. No frameworks, no Bootstrap templates, and certainly nothing to distract me from the core purpose of the project, which was to generate codenames.


### The progress plateau 📉
This lean, framework-free approach served me well at the start, and even afforded me time enough to code and blog about my code, but eventually I stopped making enough progress each time to make documenting the journey on such a regular basis seem worthwhile. I managed 8 posts in total before I got to this point.

 - [PokéProject Dev Diary: Prologue](https://medium.com/@psyked/pok%C3%A9project-dev-diary-prologue-d214a44c348f)
 - [PokéProject Dev Diary: Day One](https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-one-8a77a252bf0a)
 - [PokéProject Dev Diary: Day Two](https://medium.com/@psyked/pokeproject-dev-diary-day-two-a6019e6cf0f0)
 - [PokéProject Dev Diary: Day Three](https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-three-31afdf3e1302)
 - [PokéProject Dev Diary: Day Four](https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-four-25aed272eb17)
 - [PokéProject Dev Diary: Day Five](https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-five-92859457a20a)
 - [PokéProject Dev Diary: Day Six](https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-six-c263ef30fd0c)
 - [PokéProject Dev Diary: Day Seven](https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-seven-dc096bdac274)

After this initial phase, having something substantial enough to write about in what was essentially a few hours' development each day was becoming too much hassle, and I stopped writing about it, even as development continued.

## The need to rebuild
This was essentially the first phase of development - getting a prototype application up and running, and out in the wild. Phase two is when we take the idea further, and begin a large scale redevelopment to enable bigger and better things.

When I say bigger and better things, I'm talking about a few key features that I felt were lacking with PokéProject, and were limiting its chances of success. These were primarily:

 - Social Networking integration.
 - The maintainability and long-term scalability of the source code.
 - The limitations of my URL routing solution and the difficulty of deploying and maintaining it.
 - The download size of the website and its data sources.

Having focussed more on the prototype and shunning unfamiliar frameworks, it was becoming increasingly apparent that I was spending much more time developing solutions that others had already solved, rather than developing my own unique application features.

![]

## Static HTML
Static HTML is ultimately faster than anything that's dynamically generated on the server side is going to be. The development server for PokéProject uses NGINX to serve static HTML, and it's fast and scalable. Prior experience tells me that there's going to be no problems with load or resource consumption - if we get enough traffic to cause issues, it's not going to be NGINX which fails first. 

The setup that I went for was very low budget - my entire 'website' was a single index.html file which NGINX was configured to serve by default when a directly referenced file didn't exist on the server. Regardless of the URL requested, the same index.html file contents would be returned and, the client-side JavaScript would evaluate the window.location property to determine what content to display on screen. A low budget, entirely custom approach to URL routing - simple, but it works. Or worked, initially.

### Problems with Static HTML
The problems with static HTML really started to emerge when I wanted to push PokéProject into the social sphere, and make the content more easily sharable on platforms like Twitter and Facebook. When adding links to these platforms they make a request to fetch data about the linked page, and use that to populate a preview of the link. The trouble is my static HTML pages are essentially all the same HTML file, served in response to any URL request and the contents evaluated and rendered client-side based on the content, which is far from ideal for these server-based website previews. I really needed different, appropriate HTML to be served for each URL request - essentially, I needed server-side rendering.

#### Option 1: More Static HTML
One option that was open to me was the idea of pre-rendering my static HTML, building a one-off task to autogenerate a whole load of HTML files with different contents. 

To a certain extent I was already doing something similar - for the first version of the Twitter card integration I needed to create actual JPG format versions of my canvas rendering, so I built a script to do a one-off generation of  the 721 Pokémon cards needed to support it - but generating potentially thousands of copies static HTML files in the appropriate URL structures didn't seem the proper way, not least because the time it takes to update these on the server for each release was prohibitive.

#### Option 2: Server Side Rendering
Another alternate option, and the one I actually took, was to investigate further the idea of building PokéProject in a proper framework, ideally one with server-side or 'universal' rendering support. 

Part of my decision making here was based on the fact that I _wanted_ to use a framework. It's not generally a sensible business decision to gamble on something you don't understand when there's a perfectly viable alternative available, but I did it anyway, mainly because I hadn't used React before, and I wanted to change that.

## ✨Adopting React✨
[React](https://facebook.github.io/react/) is a component-based view rendering library, and the theory and thinking that's gone into its conception makes it a really attractive library to be using. 

Once I had started it was really easy to transform my bespoke, standalone JavaScript code into React components, and once I had those it was startlingly easy to use, re-use and mash those components together to begin exploring a host of new directions for my application.

### Problems with React
The problem was, my out-of-the-box React application didn't support server-side rendering, which was kinda the main point of adopting it in the first place. 

React is very popular, and as a result there are loads of starter tutorials and bootstrap projects available. And I do mean loads. There's even [a website dedicated to helping you find one with the features that you need.]() I picked the first one I found that I found accessible, and ended up without the universal rendering support that I really needed from it in the first place. 

No problem, I thought, and picked another. Most of the structure was the same, and I spent an evening porting the code across, only to discover that 'this' template uses React _and_ Redux. [Redux](http://redux.js.org/) is a whole other deal - they even advise against taking on the two for the first time at the same time specifically on their website. Jump forward in time and wasted a few more days trying to figure out how _that_ works, and I still don't have a React app with server-side rendered content, and so I'm back to desperately researching React starter templates for one that's a) easy enough for me to understand without lots of reading documentation and b) supports server side rendering, hot module reloading and everything else I think a project should have.

![Oh, dear, everything is so confusing.](/content/images/2017/04/soconfusing.gif)

By this point, I've spent almost as much time trying to understand React and getting a template which just _works_ that I spent developing the core of the application. I want to work on my application functionality, not the boring things like configuration and customisation - that's the whole point of adopting a framework, abstracting away the dull, mundane bits of development.

### Admitting defeat
I tried React because it offered to componentise my source code, give me a solid URL routing library, make me organise my source code better and offer server side rendering, but all I really ended up doing was realising 'React' as I understood it was more an umbrella term for a whole host of libraries, not one of which seemed to be intuitive enough for me to understand.

## Finding Vue.js
[Vue.js,](https://vuejs.org/) had been a technology in my peripheral vision for a little while, and I started really looking at it again after my failures with React. It's perhaps wrong to like a technology purely based on the branding of its website, but it has got that going for it as well. I don't start with the documentation when looking at a technology, I start with the code examples, and I was quickly redirected to the Nuxt project because it advertised server-side rendering.

![Nuxt Logo](/content/images/2017/04/nuxt.png)
## ✨Adopting Nuxt✨
My experience with [Nuxt](https://nuxtjs.org/) has been significantly better than that with React. Right from the start the example applications available on [GitHub](https://github.com/nuxt) have 'just worked', and have been simple enough for me to muddle through without further reading and still offer all of the features I needed. Somehow, it's more intuitive than React ever was.

Quite literally, I was able to find, download, install and have a working local development and production server working as a proof of concept with an Express-based API, webpack code-splitting, hot module reloading and everything else in under an hour. Given that I couldn't achieve the equivalent thing in _two weeks_ of development with React, I was hooked on Nuxt fairly quickly.

Perhaps it's because the community is much smaller, or perhaps Nuxt is ultimately less flexible than React, but it does seem that there's one way, and one way only to solve a problem - and I'm happy with that. Nuxt has an example for every feature I've needed, and I don't feel the need to challenge the approach or the architecture, because it works. It does seems to hide more of the technical details of the website away from me, and autogenerates core parts of the application, but that hasn't been a problem - it means I can focus more on my application, and making my unique stuff work, and forget about everything else.

Since then, I've completely replaced [PokéProject](https://www.pokeproject.co.uk/) with a Nuxt based version, and I'm excited for what the future has in store.

![]
