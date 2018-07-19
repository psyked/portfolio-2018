---
path: /blog/bbc-uses-air-to-install-a-list-of-swear-words-to-users-machines/
layout: post
title: BBC uses Adobe AIR to install a list of swear words to users machines.
date: 2008-08-05T09:01:35Z
tags:
- bbc
- olypmics
- swearing
---

![](http://uploads.psyked.co.uk/2008/08/bbc-swear.jpg "bbc-swear")

**James Cannings** from **MMT Digital** alerted me to this, and has written a post about it at: [http://www.mmtdigital.co.uk/monkeymagic](http://www.mmtdigital.co.uk/monkeymagic), and here's my thoughts on it:

You can install the BBC Sport’s Desktop Monkey at: [http://news.bbc.co.uk/sport1/hi/olympics/monkey/7479984.stm](http://news.bbc.co.uk/sport1/hi/olympics/monkey/7479984.stm)

If you do however, you’ll be unwittingly installing a rather comprehensive list of offensive words as a plain text file to your hard drive. Once it's installed, go to your application directory (Program Files) and **BBC Olympics** \> **assets** \> **data** \> [**bbc-swear.txt**](http://www.psyked.co.uk/wp-content/uploads/2008/08/bbc-swear.txt) and you'll be privvy to a 15kb, 1399 lines long list of bad words.

This is such an ridiculous error that I’m practically lost for words. For an audience as big as the BBC’s you think they’d be mindful about offending people – every other part of the development must have undergone a review process – but bundling a highly offensive text file with your application?

## Why?

Perhaps there’s a reason for the BBC’s Olympics Application to contain a list of restricted words, but for the love of god, don’t store them in an unencrypted text file that’s written to the user’s hard drive - store it in a database format, a non .txt extension, encrypted storage, or even on a remote server – but **do not store it as a text file!**

## On the funny side...

Most of these words I haven’t heard since school, and many of them I’ve never heard of.  Although, beyond childish giggles, this isn't really funny - I don't think its nessessary, and looking at the contents, I have doubts about how useful it really is...

## No really, why?

From an efficiency (programatic) point of view, the text file has some truly odd contents...

If you’re going to search for the word ‘tosser’ then do a **regular expression** for the word ‘tosser’ – and perhaps a regular expression for the l33t-speak variant – don’t just search for these words:

> “to$$ers, to**er, to55er, to55ers, tosser, tosser, tossers, tossurs”

Because a slight misspelling is going to get past, is it not?

Anyway, there’s much that can be said about it - and I'm sure much will be said about it.  [Andrew Shorten](http://www.ashorten.com/2008/07/17/bbc-olympics-coverage-on-your-desktop-with-air-and-on-the-web-with-flash-player/) has been promoting it, I wonder what he has to say?