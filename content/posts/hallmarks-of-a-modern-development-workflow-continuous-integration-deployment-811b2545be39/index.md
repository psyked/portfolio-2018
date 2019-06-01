---
path: /blog/hallmarks-of-a-modern-development-workflow-continuous-integration-deployment-811b2545be39/
layout: "post"
title: "Hallmarks of a Modern development workflow — Continuous Integration & Deployment"
description: "Software Development is a creative process, and as such it’s important to minimise the things which can disrupt your flow."
url: "https://medium.com/@psyked/hallmarks-of-a-modern-development-workflow-continuous-integration-deployment-811b2545be39"
image: 1*E1XjKEGR0WniQFa2W1IIeg.jpeg
src: "https://cdn-images-1.medium.com/max/1200/1*E1XjKEGR0WniQFa2W1IIeg.jpeg"
author: "https://medium.com/@psyked"
published_time: 2017-01-30T09:15:00.000Z
creator: "@psyked"
date: 2017-01-30T09:15:00.000Z
tags:
- Medium
---

![](1*E1XjKEGR0WniQFa2W1IIeg.jpeg)

# Hallmarks of a Modern development workflow — Continuous Integration & Deployment

> _Software Development is a creative process, and as such it’s important to minimise the things which can disrupt your flow._

A modern web development setup is one that harnesses the concepts of [Continuous Integration](https://www.thoughtworks.com/continuous-integration) and [Continuous Deployment](https://www.agilealliance.org/glossary/continuous-deployment/) to deliver the end result. Practically implementing these two concepts goes a long way to improving the efficiency of a project. Why? Well, it’s all about distractions.

![](0*l3g-jcefVme6mQjx.gif)

Having an efficient, “hands-off” approach to validating and releasing code is an essential part of the way we work, primarily because it helps maintain our focus and avoids the need to context-switch.

Before we had our fancy _Continuous Integration_ and _Continuous Deployment_ processes, we made manual deployments 😱. Back in those dark days, a human would log on to a server and copy files from place-to-place. It required collaboration with the development team and concentration lest a mistake be made.

With CI/CD, the whole development and deployment process works like this:

1.  Work locally
2.  Test locally
3.  Commit code
4.  Push changes to Source Control
5.  Automated Tests
6.  Automated Deploy to Dev Environment

Which for a developer means:

1.  Code
2.  Push
3.  Next task

Rather than:

1.  Code
2.  Log on to server
3.  Copy files (wait…)
4.  Test
5.  Next task

This is a much better setup because **it greatly reduces the time spent not coding.** In terms of effort, deploying code and testing it afterwards is the most laborious part of the process. Both automating the testing and deployment of source code and initiating it automatically saves time, effort and cognitive overhead, leaving developers free to continue doing what they do best — development.

At [MMT Digital](https://www.mmtdigital.co.uk/) we usually use [TeamCity](https://www.jetbrains.com/teamcity/) to handle our CI/CD processes. I’ve also started looking at the newer pipeline features of [GitLab](https://docs.gitlab.com/ee/ci/pipelines.html), GitHub and [Bitbucket](https://bitbucket.org/product/features/pipelines) on my personal projects as a way of achieving an automated CI/CD workflow.

---

_Originally published at_ [_www.psyked.co.uk_](https://www.psyked.co.uk/a-modern-development-workflow-ci-and-cd/) _on January 30, 2017._