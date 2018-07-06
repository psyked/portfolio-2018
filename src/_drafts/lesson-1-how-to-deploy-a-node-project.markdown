---
layout: post
title: 'Lesson 1: How to Deploy a Node Project'
---

### 
Fortunately a lot of frameworks, Nuxt included, have two environments built into their templates - **development:** replete with automatic reloading, source maps, debugging and other cleverness, and **production:** the optimised, lean and efficient version of your website.

I've had enough experience in my day job to know that my website deployments should be automated. I'll find some time in the future to go through the actual technical details, but this is essentially how I finally have got my deployments working:

1. Push code to source control on GitLab
2. Using GitLab Pipelines:
  1. Run `npm test` and `npm build` (just to be sure)
  2. Compress local directory into a Zip file
  3. SSH into my production server
  4. Copy the Zip

