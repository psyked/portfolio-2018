---
path: /blog/internet-woes-fixed-thank-you-opendns/
layout: post
title: Internet woes fixed - thank you OpenDNS!
date: 2008-06-20T21:43:58Z
tags:
- dns
- opendns
- virgin-broadband
---

Argh.  For a couple of days now I've been unable to connect to Psyked from my home internet connection, for some inexplicable reason.  I won't claim to understand any of it, but it seemed like the whole internet worked except my domain.  I could even ping other websites on the same shared server, and access Psyked through a horribly slow open proxy server, but direct connection was a no-no.

Well, a bit of Googling into traceroutes, pings, hostnames and general techie mumbo-jumbo led me to reconfigure my home networks' DNS servers away from <strong>Virgin broadband</strong> and onto <strong>OpenDNS</strong>. Restart the router and boom! we're back online.

There's a lot written about a lot of things (namely problems with Virgin broadband, and some contention over the OpenDNS project).  Here's a few links I picked up, if you're interested;


<ul>
	<li><a href="https://www.opendns.com/start#" target="_blank">OpenDNS main website</a></li>
	<li><a href="http://www.techcrunch.com/2006/07/18/opendns-wants-to-watch-the-web-for-you/" target="_blank">Techcrunch on OpenDNS</a> (cagey about OpenDNS)</li>
	<li><a href="http://ma.tt/2006/07/opendns/" target="_blank">Matt Mullenweg on OpenDNS</a> (for OpenDNS)</li>
</ul>