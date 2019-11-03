---
path: /blog/openfaas-like-lamba-but-open/
layout: post
title: 'OpenFaaS: Like AWS Lambda, but Open Source and built on top of Docker'
date: 2018-03-26T21:55:23Z
tags:
- agileontap
- openfaas
- docker
---

These are my notes from talk #1 from the [Agile Peterborough Meetup](https://www.meetup.com/Agile-Peterborough/) on the 23rd January 2018.

Delivered by [Alex Ellis,](https://twitter.com/alexellisuk) founder and lead dev of [OpenFaaS,](https://twitter.com/openfaas) and Docker Captain.

![evolution](/content/images/2018/03/evolution.png)

Functions are the evolution of microservices. They do one thing, really well. They are smaller and easier to deploy to production. AWS Lambda is a good example to think of. They are the tools that power things like Alexa services.

Lambda has limitations though - it only supports a few languages, and concepts like CI/CD go out of the window with Lambda, because it just doesn't work that way.

OpenFaaS uses Docker and exists in the same market niche as Lambda. OpenFaaS originally came out of the DockerCon Cool Hacks hackathon. The hackathon was all about taking docker beyond what it was originally designed to do. It won the Hackathon, got presented at DockerCon, and it's gone from there. It now has a lot of contributers, 9k GitHub stars, and Alex spends a decent amount of time presenting it to different audiences.

What makes OpenFaaS different is from Lambda is that it can run any binary as a service on any infrastructure. It's not limited to Amazon and it can go on any cloud system or any bare metal system. It sits as an interface between your normal binary and provides an API, UI and CLI for that binary, making it possible to monitor, scale, test and configure your function easily, and it provides a lot of developer-first tooling to help you scaffold your service.

In a stunning show of confidence, Alex did some live demos, and they worked.

For the first demo, he used Alexa to check his work holiday time and then book a day off - a task which behind the scenes involves a 20-step process through a website to complete. A browser automation script wrapped within OpenFaaS was able to achieve this instead.

For the second demo, he used a machine learning algorithm to colourise a black and white picture. This involved accessing the OpenFaaS function through its web interface and using that to upload an image grabbed from Google. The function then responded (after 4.5 seconds) with a colourised version.

https://github.com/openfaas/faas

All in all, OpenFaaS is pretty cool.