---
path: /blog/creating-flex-components-the-easy-way-for-flash-ide-converts/
layout: post
title: Creating Flex Components - the easy way (for Flash IDE converts)
date: 2009-01-05T08:43:18Z
tags:
- flash
- flex
- components
---

<span>I’m sure I’m not the only one that wants to make use of their existing skills in Flash to create Flex components without getting bogged down by creating it all in ActionScript classes, overriding lots of methods and generally getting in a mess. Don’t get me wrong, learning how to code custom components is something I want to learn but for now, I want something quick. </span>

<span>I came across <a href="http://www.webkitchen.be/2008/12/12/video-tutorial-make-flex-components-with-flash-cs4/" target="_blank">this post by Serge Jespers</a>; a brilliant video for getting started. However, I wanted my components to be scalable like other Flex components, and after some digging around I found that by overriding the method <span style="font-family:"><strong>setActualSize()</strong></span> I could get my components to react to being scaled by its layout container. The <span style="font-family:"><strong>setActualSize()</strong></span> method on a component is called by its layout containers’ </span><span>updateDisplayList()</span><span> method, so when we make changes to the size of the layout container (i.e. resize the window) the changes are reflected in the component, in Design view. </span>

<span>In the explanations below I’ll be assuming you already have an understanding of the Flash IDE (in this case CS3), creating custom classes and have the <a href="https://www.adobe.com/cfusion/entitlement/index.cfm?e=flex_skins" target="_blank">Flex Component Kit for Flash</a> installed.</span>
<span></span>
<h3>Before we get started, you can;</h3>
<a href="http://uploads.psyked.co.uk/2008/12/redbox.zip">Download the Flash CS3 source files [Zip file: 151Kb]</a>

<a href="http://uploads.psyked.co.uk/2008/12/redboxexample.zip">Download the sample Flex project archive [Flex Project (Zip file): 41Kb]</a>
<h3>Creating the component in Flash</h3>
If you look at the image below I’ve created a red box with the instance name of box in a MovieClip called RedBox. This is the basis of the component we will create; the aim is for the component to keep the red box centered when it is resized.

<img class="alignnone size-full wp-image-518" title="image1" src="http://uploads.psyked.co.uk/2008/12/image1.jpg" alt="image1" width="500" height="280" />

If you select the RedBox MovieClip in your library and go to <strong>Commands &gt; Convert Symbol to Flex Component</strong> this will now, amongst other things, set the Flash file to produce a swc file when published, which you will later use in Flex, and added the FlexComponentBase to your library.

You may receive an alert asking you if you wish to change the frame rate of your Flash file to 24fps, it is recommended to do this. The properties of the RedBox MovieClip should look the same as the image below. Note that the MovieClip now has a base class of mx.flash.UIMovieClip, this is the base class we will extend for our custom component.

<img class="alignnone size-full wp-image-517" title="image2" src="http://uploads.psyked.co.uk/2008/12/image2.jpg" alt="image2" width="500" height="280" />

The MovieClip is ready for use in Flex as a component, but if you try to do so it won’t perform as we want it to when it’s scaled. We will use the class below to do this, before we move on there’s a couple of things to note about the class.
<ul>
	<li>We need to import the MovieClip class because it’s used in the component (the instance called box is still a MovieClip). If you have other objects in your component ensure these are imported.</li>
	<li>The class extends mx.flash.UIMovieClip, this is the base class the Flex Component kit gave the class initially.</li>
	<li>We’ve overridden the setActualSize() method so that we control what happens when the component is resized. Firstly we check to ensure that it’s necessary we change properties of the children in the component, if the new dimensions do not match the current dimensions then we change them and adjust the children (in this case our box).</li>
</ul>
<pre><code>package couk.psyked.ui
{
import flash.display.MovieClip;
import mx.flash.UIMovieClip;
//
public class RedBox extends UIMovieClip
{
public function RedBox():void
{
super();
}
//
override public function setActualSize( newWidth:Number, newHeight:Number ):void
{
if (newWidth != _width || newHeight != _height)
{
_width = newWidth;
_height = newHeight;
//
box.x = ( _width - box.width ) / 2;
box.y = ( _height - box.height ) / 2;
}
}
}
}</code></pre>

Finally we need to change the linkage of our RedBox MovieClip in the library, set those to the image below. Note that we change the base class to flash.display.MovieClip; this is because it’s ignored now that our custom class extends mx.flash.UIMovieClip. If you try to link the custom class to the MovieClip without changing the base class you’ll get an error.

<img class="alignnone size-full wp-image-515" title="image3" src="http://uploads.psyked.co.uk/2008/12/image3.jpg" alt="image3" width="500" height="280" />

That’s it, publish the file and it’s ready to drop into Flex.
<h3>Using the component in Flex</h3>
Create a new project in Flex, I’ll be using a new Web application, and add the swc file to the library path of the project (it’ll be the same name as the fla). Your Flex Build Path properties should look similar to the image below.

<img class="alignnone size-full wp-image-514" title="image4" src="http://uploads.psyked.co.uk/2008/12/image4.jpg" alt="image4" width="500" height="280" />

In the application tag of your mxml file you need to add the following attribute xmlns:ui="couk.psyked.ui.*" this will enable you to use the custom component and give you code hinting for it. If you’re not sure what this attribute does then you might want to look up xml namespaces.

Now you can use the component as you would any other Flex Component, start typing “&lt;Red” and you should see <em>ui:RedBox</em> in the code completion list. In the example below I’ve used the component twice in a VBox, once setting both the width and height to 100% and the other one has the height specified. If you run this web application in the browser and play with the window size you will see the red boxes stay in the center of their component.

<a href="http://www.psyked.co.uk/downloads/RedBoxExample.html" target="_blank"> View the published web application</a>

You can download the source files below; this includes the files used in both Flash and Flex.

<a href="http://uploads.psyked.co.uk/2008/12/redbox.zip">Download the Flash CS3 source files [Zip file: 151Kb]</a>

<a href="http://uploads.psyked.co.uk/2008/12/redboxexample.zip">Download the sample Flex project archive [Flex Project (Zip file): 41Kb]</a>
<h3>Final comments</h3>
As I mentioned before, this is a quick implementation of creating a Flex Component using Flash. If anyone has any improvements, cool uses, suggestions or comments on this method please leave a comment – even if it’s just to say you used it!