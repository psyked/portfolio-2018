---
layout: post
title: 'PokéProject: Lessons from my first real-world Node.js deployment.'
---

#### Preface:
This is a chronological follow-up to [my previous post about PokéProject,](https://www.psyked.co.uk/from-static-html-to-react-to-nuxt/) and the slightly rocky start I've had trying to keep the website working, the little bits of fine-tuning and the things that nobody told me about actually running a Node projects for real.

### Know when to pull the trigger
Once I'd reached **feature-parity** between the old static html version of [PokéProject](https://www.pokeproject.co.uk/) and my shiny new [Node.js](https://nodejs.org/en/) and [Nuxt](https://nuxtjs.org/) version, I figured that the time was right to push it out into the world for everyone else to see.

### Go for (a soft) Launch 🚀
Pretty much all of my previous side projects have been either projects hosted by others or static html pages, so this was uncharted territory for me, and I didn't want to muck it up. I also had an existing base of users who were visiting the live website, whom I didn't want to disappoint with any inopportune downtime, and I have my own sanity to worry about as well - the last thing I want is a repeat of my earlier [disastrous day of development.](https://medium.com/@psyked/pok%C3%A9project-dev-diary-day-six-c263ef30fd0c)

I decided to go for a low-key soft launch of the website, setting up a 'beta' subdomain - https://beta.pokeproject.co.uk/ - and keep the static website running alongside it. That reduced the risk and allowed me to run the two websites in parallel until I was happy with my configuration and the deployment processes.

### Master your deployment process 🎓
As it happened, going for a soft launch was a very smart move, because I really didn't understand enough about the deployment processes actually worked, and as a result the first few releases were a bit of a ropey hybrid of old and new chunks of code, causing some rather unexpected errors and prolonged periods of downtime. 

![I got my deployments right on the first try, of course.](/content/images/2017/04/firsttry.gif)

Despite all of these teething issues, I managed to set up an automated deployment process using [GitLab CI,](https://about.gitlab.com/gitlab-ci/) which dutifully executes a sequence of shell scripts every time I push a commit to the code repository.

_(At some point in the future I'll find some time to do another post which properly describes my ultimate solution for deployments.)_

#### Beware the broken build and Test, Test, Test. ☠️
Unfortunately the danger with setting up a Continuous Deployment system is that it's all automated, and it's not a good idea to give it unfettered access to a Live environment without some form of sense-check on the build.

For the projects that I do professionally, we have multiple environments set up - isolated Dev, QA and Live environments. Dev environments have Continuous Deployment, but QA and Live environments require an actual human to push the button that does the deployment, once it's been independently checked. 

However, for PokéProject - because it's my side project - I don't really have multiple environments, and unfortunately I also didn't have any sense checks in place. As a result there were several instances where a broken build would be deployed to the Live domain and everything broke.

![A dramatic reconstruction of my failed deployments](/content/images/2017/04/working.gif)

The lesson here is to test the builds, _especially_ when they get deployed automatically. Many of the deployment failures that crippled PokéProject were simple errors with npm module dependencies, and a simple trial-run of `npm build` would have caught and easily prevented them. 

Other website-crippling issues that cropped up were ones that should have been caught by unit tests or integration tests - all easy to avoid, if I'd invested a little more time and not done everything on a shoestring budget.

#### Failure recovery
Besides the deployment itself, there was one other thing that I knew I'd need - something that could monitor my Node process and restart it if (when) it crashed. Just as with other forms of testing - such as unit tests or end to end tests - I expect that there will be edge cases and scenarios that I won't encounter during development, and I need to be sure that if the worst happens, the website won't just die.

Uptime is not guaranteed
Load testing
Head scratching
Error logging & monitoring
Uptime / Server health monitoring

https://twitter.com/psyked/status/848099856581369856

Fine tuning
Self-healing
Scalability and suitable hardware
DDOS protection / Cloudflare