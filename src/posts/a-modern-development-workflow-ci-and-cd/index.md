---
path: /blog/a-modern-development-workflow-ci-and-cd/
layout: post
title: Hallmarks of a Modern development workflow - Continuous Integration & Deployment
date: 2017-01-30T09:15:00Z
tags:
- web-development
- continuous-integration
- continuous-deployment
---

> Software Development is a creative process, and as such it's important to minimise the things which can disrupt your flow.

## CI/CD
A modern web development setup is one that harnesses the concepts of [Continuous Integration](https://www.thoughtworks.com/continuous-integration) and [Continuous Deployment](https://www.agilealliance.org/glossary/continuous-deployment/) to deliver the end result. Practically implementing these two concepts goes a long way to improving the efficiency of a project. Why? Well, it's all about distractions.

![No distractions, please.](/content/images/2017/01/siliconvalley.gif)

Having an efficient, "hands-off" approach to validating and releasing code is an essential part of the way we work, primarily because it helps maintain our focus and avoids the need to context-switch.

Before we had our fancy _Continuous Integration_ and _Continuous Deployment_ processes, we made manual deployments 😱. Back in those dark days, a human would log on to a server and copy files from  place-to-place. It required collaboration with the development team and concentration lest a mistake be made.

With CI/CD, the whole development and deployment process works like this:

1. Work locally
1. Test locally
1. Commit code
1. Push changes to Source Control
1. Automated Tests
1. Automated Deploy to Dev Environment

Which for a developer means:

2. Code
2. Push
2. Next task

Rather than:

3. Code
3. Log on to server
3. Copy files (wait...)
3. Test 
3. Next task

This is a much better setup because **it greatly reduces the time spent not coding.** In terms of effort, deploying code and testing it afterwards is the most laborious part of the process. Both automating the testing and deployment of source code and initiating it automatically saves time, effort and cognitive overhead, leaving developers free to continue doing what they do best - development.

## Useful links
At [MMT Digital](https://www.mmtdigital.co.uk/) we usually use [TeamCity](https://www.jetbrains.com/teamcity/) to handle our CI/CD processes. I've also started looking at the newer pipeline features of [GitLab](https://docs.gitlab.com/ee/ci/pipelines.html), GitHub and [Bitbucket](https://bitbucket.org/product/features/pipelines) on my personal projects as a way of achieving an automated CI/CD workflow.