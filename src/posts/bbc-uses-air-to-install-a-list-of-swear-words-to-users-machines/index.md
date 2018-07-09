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

<img class="alignnone size-full wp-image-273" title="bbc-swear" src="http://uploads.psyked.co.uk/2008/08/bbc-swear.jpg" alt="" width="500" height="280" />

<strong>James Cannings</strong> from <strong>MMT Digital</strong> alerted me to this, and has written a post about it at: <a href="http://www.mmtdigital.co.uk/monkeymagic" target="_blank">http://www.mmtdigital.co.uk/monkeymagic</a>, and here's my thoughts on it:

You can install the BBC Sport’s Desktop Monkey at: <a href="http://news.bbc.co.uk/sport1/hi/olympics/monkey/7479984.stm" target="_blank">http://news.bbc.co.uk/sport1/hi/olympics/monkey/7479984.stm</a>

If you do however, you’ll be unwittingly installing a rather comprehensive list of offensive words as a plain text file to your hard drive.  Once it's installed, go to your application directory (Program Files) and <strong>BBC Olympics</strong> &gt; <strong>assets </strong>&gt; <strong>data </strong>&gt; <a href="http://www.psyked.co.uk/wp-content/uploads/2008/08/bbc-swear.txt" target="_blank"><strong>bbc-swear.txt
</strong></a> and you'll be privvy to a 15kb, 1399 lines long list of bad words.

This is such an ridiculous error that I’m practically lost for words.  For an audience as big as the BBC’s you think they’d be mindful about offending people – every other part of the development must have undergone a review process – but bundling a highly offensive text file with your application?


<h2>Why?</h2>
Perhaps there’s a reason for the BBC’s Olympics Application to contain a list of restricted words, but for the love of god, don’t store them in an unencrypted text file that’s written to the user’s hard drive - store it in a database format, a non .txt extension, encrypted storage, or even on a remote server – but <strong>do not store it as a text file!</strong>
<h2>On the funny side...</h2>
Most of these words I haven’t heard since school, and many of them I’ve never heard of.  Although, beyond childish giggles, this isn't really funny - I don't think its nessessary, and looking at the contents, I have doubts about how useful it really is...
<h2>No really, why?</h2>
From an efficiency (programatic) point of view, the text file has some truly odd contents...

If you’re going to search for the word ‘tosser’ then do a <strong>regular expression</strong> for the word ‘tosser’ – and perhaps a regular expression for the l33t-speak variant – don’t just search for these words:
<blockquote>“to$$ers, to**er, to55er, to55ers, tosser, tosser, tossers, tossurs”</blockquote>
Because a slight misspelling is going to get past, is it not?

Anyway, there’s much that can be said about it - and I'm sure much will be said about it.  <a href="http://www.ashorten.com/2008/07/17/bbc-olympics-coverage-on-your-desktop-with-air-and-on-the-web-with-flash-player/" target="_blank">Andrew Shorten</a> has been promoting it, I wonder what he has to say?