---
path: /creating-outlook-calendar-events-through-http-links/
layout: post
title: Creating Outlook Calendar events through hyperlinks
date: 2008-08-07T22:45:02Z
tags:
- html
- http-link
- icalendar
- outlook
---

You mightn't think it was possible, the lack of implimentations you see for it on a day-to-day basis, but actually you can create Calendar events for a wide range of email / organiser clients using the iCalendar file format.

From the users' point of view, your Calendar event appears as every other hyperlink does in your html pages - but when they click on the link, instead of being taken to a new page, Outlook opens up an 'add event' just as if they'd clicked on a meeting request (in Outlook).

From the developers' point of view, once you have your server configured correctly, it's just a case of creating and linking to an .ics file instead of a .htm file - at which point the client's email software should take over.

<img class="alignnone size-full wp-image-276" title="icalendar" src="http://uploads.psyked.co.uk/2008/08/icalendar.jpg" alt="" width="500" height="280" />
<h2>Does it work for me?</h2>
I don't know - try clicking on <a href="http://www.psyked.co.uk/icalendar.ics" target="_blank">this link</a>.  If MIME types are incorrectly set you'll probably see a plain text file, and if you don't have an application setup that's compatable with iCalendar events, you'll probably just be asked to save the file to your hard drive.

<!--more-->
<h2>How do you create a Calendar event then?</h2>
First up, you need to sort out your MIME-types.  I'm not going into that because it can get a little too complex, but just make sure you have the file extension .ics registered under the MIME-type "<strong>text/calendar</strong>" - if you're lucky it might already be setup!

Next, you need to make the actual file, which is simple in one sense and complex in another.  iCalendar files are plain text files, so you just need notepad or something to create them, but they do have a very specific format. Wikipedia has a very <a href="http://en.wikipedia.org/wiki/ICalendar#Core_object" target="_blank">simple example</a>, so we're going to use that as a basis for our sample file.

So lets create a working example - and we'll use the Flash on the Beach conference as a basis.

This is the example on Wikipedia;
<pre>BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
BEGIN:VEVENT
DTSTART:19970714T170000Z
DTEND:19970715T035959Z
SUMMARY:Bastille Day Party
END:VEVENT
END:VCALENDAR</pre>
The framework we need to keep is pretty self explanitory - there's elements like the beginning and ending of portions of the file, and a basic framework for the dates and summary.  According to the RFC iCalendar specification, VERSION and PRODID are both required, so we'll leave those in also - which just leaves us with some customizing to do on the dates and summary information;
<pre>BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
BEGIN:VEVENT
DTSTART:20080928T000000Z
DTEND:20081001T000000Z
SUMMARY:Flash on the Beach 08 Conference
DESCRIPTION:Flash on the Beach 08 is here again!
Wow, Flash on the Beach is in it's third year already! FOTB06 was awesome,
FOTB07 was even better, and we are now pulling out all the stops to make
FOTB08 the best yet! We have the best talent around speaking, new speakers
to FOTB, the Inspired Sessions, workshops, parties and more! It's gonna rock!
END:VEVENT
END:VCALENDAR</pre>
You can see that there's practically no special formatting for the actual content - just plain text.  (Which is a shock after working with XML and CDATA for so long.)  And date formatting is just a condensed string - 1/11/2008, 15:30:00 just becomes 20081101T153000Z.

Whack that into notepad, change the file extension to .ics and you're away!
<h2>That's it?</h2>
That really is it. It's an incredibly easy thing to customize - I'd really recommend you skim through the <a href="http://tools.ietf.org/html/rfc2445" target="_blank">spec for iCalendar</a> if you're thinking of doing more clever things - there's formats and properties that control priorities, due dates, durations, status, alarms, journal entries - practically everything that Outlook does (beyond emails) can be done with the iCalendar format.
<h2>Resources</h2>
<ul>
	<li><a href="http://en.wikipedia.org/wiki/ICalendar" target="_blank">iCalendar information on Wikipedia</a></li>
	<li><a href="http://tools.ietf.org/html/rfc2445" target="_blank">iCalendar technical specification</a></li>
</ul>