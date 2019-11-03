---
path: /blog/application-information-class-for-air/
layout: post
title: Application Information Class for AIR
date: 2008-12-01T08:45:29Z
tags:
- actionscript
- air
- applicationinfo
---

Extracting the application information for an AIR application is in some ways a simple process - it's not like the process is too difficult - it's a bit of E4X on some data that is readily accessible from the application itself.  But if you're like me, then repeatedly accessing this information is a bit of a tiresome process.  So, I made a class that can do it for you...

ApplicationInfo, as I've so cunningly called it, is a class that gives you information straight from the application descriptor file - including application name, version, description and even the filepaths to the application icons.  I wouldn't say it's perfect - projects in their first iterations rarely are - but it's a start.

### **Download**

[Download the ApplicationInfo class.](http://uploads.psyked.co.uk/2008/11/applicationinfo.zip)

### **About**

The class is designed for Flex, but will work fine for pure AS3. Most of the functions are static, so you don't need to instanciate the class before you use it, and hopefully it gives you all of the information you'll need.

### **Using ApplicationInfo**

Step 1: Import the class, Step 2: Use it!

import couk.psyked.air.ApplicationInfo;
private var appVersion:String = ApplicationInfo.appVersion;

The variables that are available are;

*   appID
*   appName
*   appVersion
*   appFilename
*   appDescription
*   appCopyright
*   appIcon16URL
*   appIcon32URL
*   appIcon48URL
*   appIcon128URL

The last four are the paths to the application icon - useful I think, if you want to make things a little more dynamic.  I've used them as a data-binded source path for an image loader component, and it worked pretty well.

I'm hoping to put the class on Google code or something - make a project of it and see if anyones interested in expanding it or incorporating it into another project - that's all the rage thesedays, isn't it?